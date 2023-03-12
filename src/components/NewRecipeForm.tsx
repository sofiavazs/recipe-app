import { Box } from "grommet";
import React, { useState } from "react";
import { useForm, useFieldArray } from "react-hook-form";
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

  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        {formStep === 0 && (
          <>
            <Box>
              <span>Step {formStep + 1} of 3</span>
              <label htmlFor="text">
                Nome da Receita
                <input
                  {...register("recipeName")}
                  placeholder="Nome da Receita"
                  type="text"
                ></input>
              </label>
            </Box>
            {fields.map((ingredient, index) => (
              <Box width={"100%"} margin={"1rem"} key={ingredient.id}>
                <label>
                  Ingrediente
                  <input
                    placeholder="Ingrediente"
                    {...register(`ingredients.${index}.name` as const, {
                      required: true,
                    })}
                    defaultValue={ingredient.name}
                    type="text"
                  />
                </label>
                <label>
                  Quantidade
                  <input
                    placeholder="Quantidade"
                    {...register(
                      `ingredients.${index}.quantity.number` as const,
                      {
                        required: true,
                      }
                    )}
                    defaultValue={ingredient.quantity.number}
                    type="number"
                  />
                </label>
                <label>
                  Unidade de medida
                  <input
                    placeholder="Unidade"
                    {...register(
                      `ingredients.${index}.quantity.unitMeasure` as const,
                      {
                        required: true,
                      }
                    )}
                    defaultValue={ingredient.quantity.unitMeasure}
                    type="text"
                  />
                </label>
                <br />
                {fields.length > 1 && (
                  <button type="button" onClick={() => remove(index)}>
                    Remover
                  </button>
                )}
              </Box>
            ))}
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
          </>
        )}
        {formStep === 1 && (
          <>
            <textarea placeholder="test"></textarea>
            <button onClick={prevFormStep}>Previous</button>
            <button>Next</button>
          </>
        )}
        {formStep === 2 && (
          <>
            <div>{JSON.stringify(data)}</div>
            <button type="submit">Submit</button>
          </>
        )}
      </form>
    </>
  );
};

export default NewRecipeForm;
