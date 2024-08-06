"use client";

import { useEffect } from "react";

const ShowLast: React.FC<{ mealId: string }> = ({ mealId }) => {
  useEffect(() => {
    if (typeof window !== undefined) {
      const fromLocalStorage = JSON.parse(
        localStorage.getItem("lastMealId") || ""
      );
      if (fromLocalStorage !== mealId) {
        window.localStorage.setItem("lastMealId", JSON.stringify(mealId));
      } else {
        window.localStorage.setItem(
          "lastMealId",
          JSON.stringify(fromLocalStorage)
        );
      }
    }
  }, [mealId]);

  return (
    <button className="bg-[#50C0D8] rounded-xl py-2 w-[95px] text-white text-sm font-semibold shadow-md">
      Back
    </button>
  );
};

export default ShowLast;
