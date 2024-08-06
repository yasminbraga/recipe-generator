import type { SVGProps } from "react";
import { useMeal } from "../contexts/mealContext";

export function MdiHeart(props: SVGProps<SVGSVGElement>) {
  const { favorites, meal } = useMeal();
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="2em"
      height="1.5em"
      viewBox="0 0 24 24"
      {...props}
    >
      <path
        fill={
          favorites.find((item) => item.idMeal === meal?.idMeal)
            ? "red"
            : "black"
        }
        d="m12 21.35l-1.45-1.32C5.4 15.36 2 12.27 2 8.5C2 5.41 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.08C13.09 3.81 14.76 3 16.5 3C19.58 3 22 5.41 22 8.5c0 3.77-3.4 6.86-8.55 11.53z"
      ></path>
    </svg>
  );
}
