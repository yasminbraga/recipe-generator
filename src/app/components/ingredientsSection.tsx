import { FC } from "react";
import { useMeal } from "../contexts/mealContext";
import { mergeItemsAndQtd } from "../utils/merge-items";

const IngredientsSection: FC = () => {
  const { meal } = useMeal();
  const items = mergeItemsAndQtd(meal);
  return (
    <ul className="flex flex-col flex-wrap lg:flex-row p-5">
      {items.map((item) => (
        <li className="list-disc lg:w-1/3" key={item}>
          {item}
        </li>
      ))}
    </ul>
  );
};

export default IngredientsSection;
