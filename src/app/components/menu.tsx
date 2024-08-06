"use client";
import { useMeal } from "../contexts/mealContext";
import { JamRefreshIcon } from "./jamRefreshIcon";
import { MdiHeart } from "./mdiHeart";

const Menu: React.FC = () => {
  const {
    fetcher,
    setLastMeal,
    lastMeal,
    meal,
    handleLastMeal,
    setShowModal,
    handleFavorite,
  } = useMeal();
  return (
    <>
      <div className="flex gap-4">
        <button
          onClick={handleLastMeal}
          className="bg-[#50C0D8] rounded-xl py-2 w-[95px] text-white text-sm font-semibold shadow-md"
        >
          Back
        </button>
        <button
          onClick={() => setShowModal(true)}
          className="bg-[#50C0D8] rounded-xl py-2 w-[95px] text-white text-sm font-semibold shadow-md"
        >
          Favorites
        </button>
      </div>
      <div className="flex items-center gap-4">
        <button
          onClick={() => {
            setLastMeal([...lastMeal, meal]);
            fetcher();
          }}
        >
          <JamRefreshIcon />
        </button>
        <button onClick={() => handleFavorite(meal)}>
          <MdiHeart />
        </button>
      </div>
    </>
  );
};

export default Menu;
