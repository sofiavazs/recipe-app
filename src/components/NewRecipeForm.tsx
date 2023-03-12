import React from "react";
import { useForm, Controller, useFieldArray } from "react-hook-form";

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

  const registerSubmit = (data) => {
    console.log(data);
  };
  return (
    <>
      <form onSubmit={handleSubmit(registerSubmit)}>
        <input
          {...register("recipeName")}
          placeholder="Nome da Receita"
          type="text"
        />
        <br />
        {fields.map((ingredient, index) => (
          <div key={ingredient.id}>
            <input
              placeholder="Ingrediente"
              {...register(`ingredients.${index}.name` as const, {
                required: true,
              })}
              defaultValue={ingredient.name}
              type="text"
            />
            <input
              placeholder="Quantidade"
              {...register(`ingredients.${index}.quantity.number` as const, {
                required: true,
              })}
              defaultValue={ingredient.quantity.number}
              type="number"
            />
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
            <br />
            <button type="button" onClick={() => remove(index)}>
              Remover
            </button>
          </div>
        ))}
        <button
          type="button"
          onClick={() =>
            append({ name: "", quantity: { number: 0, unitMeasure: "grams" } })
          }
        >
          Adicionar Ingrediente
        </button>
        <button type="submit">Submit</button>
      </form>
    </>
  );
};

export default NewRecipeForm;
