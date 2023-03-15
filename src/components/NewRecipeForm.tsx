import React, { useState } from "react";
import { Box, FormField, Select, TextInput } from "grommet";
import { useForm, useFieldArray, Controller } from "react-hook-form";
import { useFormData } from "../../common/context";

interface Props {}

type FormValues = {
  recipeName: string;
  ingredients: {
    name: string;
    quantity: {
      number: number;
      unitMeasure: string;
    };
  }[];
};

const NewRecipeForm: React.FC<Props> = () => {
  const { setFormValues } = useFormData();
  const { data } = useFormData();
  const [formStep, setFormStep] = useState(0);
  const nextFormStep = () => setFormStep(formStep + 1);
  const prevFormStep = () => setFormStep(formStep - 1);

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

  const allOptions = ["gramas"];

  const RecipeNameAndIngredients = () => {
    return (
      <>
        <Box>
          <span>Step {formStep + 1} of 3</span>
          <Box className="form-wrapper">
            <FormField label="Nome da Receita">
              <TextInput
                placeholder="Nome da Receita"
                {...register("recipeName")}
              />
            </FormField>

            {fields.map((ingredient, index) => (
              <div key={ingredient.id}>
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

                <FormField label="Unidade de medida">
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
                </FormField>
                {fields.length > 1 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remover
                  </button>
                )}
              </div>
            ))}
          </Box>
          <button
            type="button"
            onClick={() =>
              append({
                name: "",
                quantity: { number: 0, unitMeasure: "grams" },
              })
            }
          >
            Adicionar Ingrediente
          </button>
          <button>Next</button>
        </Box>
      </>
    );
  };

  const RecipeInstructions = () => {
    return (
      <>
        <span>Step {formStep + 1} of 3</span>
        <textarea placeholder="test"></textarea>
        <button onClick={prevFormStep}>Previous</button>
        <button>Next</button>
      </>
    );
  };

  const RecipeSummary = () => {
    return (
      <>
        <span>Step {formStep + 1} of 3</span>
        <div>{JSON.stringify(data)}</div>
        <button onClick={prevFormStep}>Previous</button>
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
