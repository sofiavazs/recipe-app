import React, { useRef, useState } from "react";
import {
  Box,
  Button,
  Footer,
  FormField,
  Select,
  TextArea,
  TextInput,
} from "grommet";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useFormData } from "../../common/context";

interface Props {
  nextFormStep: () => void;
  previousFormStep: () => void;
  formStep: number;
}

type FormValues = {
  recipeName: string;
  ingredients: {
    name: string;
    quantity: {
      number: number;
      unitMeasure: string;
    };
  }[];
  instructionsField: string;
};

const NewRecipeForm: React.FC<Props> = ({ nextFormStep, formStep }) => {
  const { setFormValues } = useFormData();
  const { data } = useFormData();

  const { register, control, handleSubmit } = useForm<FormValues>({
    defaultValues: {
      ingredients: [
        { name: "test", quantity: { number: 1, unitMeasure: "gram" } },
      ],
    },
    mode: "onSubmit",
  });

  const { fields, remove, append } = useFieldArray({
    control,
    name: "ingredients",
  });

  const onSubmit = (values) => {
    setFormValues(values);
    nextFormStep();
  };

  const appendIngredient = () => {
    append({
      name: "",
      quantity: { number: 0, unitMeasure: "grams" },
    });
  };

  const allOptions = ["gramas"];

  const RecipeNameAndIngredients = () => {
    return (
      <>
        <Box>
          <Box className="form-wrapper">
            <FormField label="Nome da Receita">
              <TextInput
                placeholder="Nome da Receita"
                {...register("recipeName")}
              />
            </FormField>
            {fields.map((ingredient, index) => (
              <Box
                key={ingredient.id}
                border={{ color: "#58db4c", style: "solid" }}
                margin={{ top: "1rem" }}
                pad={"1rem"}
                round={"4px"}
                elevation={"small"}
              >
                <FormField label="Ingrediente">
                  <TextInput
                    placeholder="Ingrediente"
                    {...register(`ingredients.${index}.name` as const, {
                      required: true,
                    })}
                    defaultValue={ingredient.name}
                  />
                </FormField>
                <FormField label="Quantidade">
                  <TextInput
                    placeholder="Quantidadde"
                    {...register(
                      `ingredients.${index}.quantity.number` as const,
                      {
                        required: true,
                      }
                    )}
                    defaultValue={ingredient.quantity.number}
                    type="number"
                  />
                </FormField>

                <FormField
                  label="Unidade de medida"
                  className="measure-unit-dropdown"
                >
                  <Controller
                    name={`ingredients.${index}.quantity.unitMeasure`}
                    control={control}
                    rules={{ required: true }}
                    render={({ field: { onChange, value } }) => (
                      <Select
                        placeholder="unidade de medida"
                        options={allOptions}
                        value={value}
                        onChange={onChange}
                      />
                    )}
                  />
                  <Box justify="evenly" direction="row" margin={"1rem"}>
                    {fields.length > 1 && (
                      <Button
                        primary
                        type="button"
                        label={"Remover"}
                        onClick={() => remove(index)}
                      />
                    )}
                  </Box>
                </FormField>
              </Box>
            ))}
          </Box>
        </Box>
        <Box pad={"small"}>
          <Button
            type="button"
            label="Adicionar Ingrediente"
            onClick={appendIngredient}
            margin={{ top: "0.5rem" }}
          />
        </Box>
      </>
    );
  };

  const RecipeInstructions = () => {
    return (
      <>
        <Box margin={{ top: "1rem" }}>
          <label>
            Instructions
            <TextArea
              className="instructions-input"
              resize={false}
              placeholder="Instruções"
              {...register("instructionsField")}
            />
          </label>
        </Box>
      </>
    );
  };

  const RecipeSummary = () => {
    return (
      <>
        <div>{JSON.stringify(data)}</div>
        <button type="submit">Submit</button>
      </>
    );
  };

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formStep === 0 && <RecipeNameAndIngredients />}
        {formStep === 1 && <RecipeInstructions />}
        {formStep === 2 && <RecipeSummary />}
      </form>
    </>
  );
};

export default NewRecipeForm;
