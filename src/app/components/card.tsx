import React from "react";
import { useMeal } from "../contexts/mealContext";
import { splitDirections } from "../utils/split-directions";
import DirectionsSection from "./directionsSection";
import IngredientsSection from "./ingredientsSection";
import MealImage from "./mealImage";
import Menu from "./menu";

const Card: React.FC = () => {
  const { meal } = useMeal();

  if (!meal) return <div>Loading...</div>;

  const directions = splitDirections(meal.strInstructions);

  return (
    <div>
      <article className="bg-white lg:flex lg:flex-row rounded-2xl overflow-hidden lg:max-w-[800px] lg:my-10">
        <MealImage srcImage={meal.strMealThumb} altImage={meal.strMeal} />
        <section className="p-5">
          <h2 className="text-xl font-semibold">{meal.strMeal}</h2>
          <IngredientsSection />

          <h3 className="uppercase font-semibold">Directions</h3>
          <DirectionsSection instructions={directions} />
          <div className="hidden bg-white pt-5 sm:flex items-center justify-between">
            <Menu />
          </div>
        </section>
      </article>
      <div className="bg-white fixed top-0 right-0 left-0 p-6 flex items-center justify-between lg:hidden">
        <Menu />
      </div>
    </div>
  );
};

export default Card;
