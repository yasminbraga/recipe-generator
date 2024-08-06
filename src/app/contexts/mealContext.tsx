"use client";
import axios from "axios";
import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";
import { MealType } from "../types/meal";

interface MealContextType {
  meal: MealType;
  setMeal: Dispatch<SetStateAction<MealType>>;
  lastMeal: MealType[];
  setLastMeal: Dispatch<SetStateAction<MealType[] | []>>;
  fetcher: () => Promise<void>;
  handleLastMeal: () => void;
  showModal: boolean;
  setShowModal: Dispatch<SetStateAction<boolean>>;

  favorites: MealType[];
  setFavorites: Dispatch<SetStateAction<MealType[] | []>>;
  handleFavorite: (meal: MealType) => void;
}

export const MealContext = createContext({} as MealContextType);

export const MealProvider = ({ children }: { children: ReactNode }) => {
  const [meal, setMeal] = useState<MealType>({
    idMeal: "",
    strInstructions: "",
    strMealThumb: "",
    strMeal: "",
  });
  const [lastMeal, setLastMeal] = useState<MealType[] | []>([]);
  const [showModal, setShowModal] = useState(false);
  const [favorites, setFavorites] = useState<MealType[] | []>(
    JSON.parse(localStorage.getItem("favorites") || "[]")
  );

  const fetcher = async () => {
    try {
      const res = await axios.get(
        "https://www.themealdb.com/api/json/v1/1/random.php"
      );
      setMeal(res.data.meals[0]);
    } catch (error) {
      console.log(error);
    }
  };

  const handleLastMeal = () => {
    setMeal(lastMeal[lastMeal.length - 1]);
    lastMeal.pop();
  };

  const handleFavorite = (meal: MealType) => {
    const isFavorite = favorites.find((item) => item.idMeal === meal.idMeal);
    if (!isFavorite) {
      setFavorites([...favorites, meal]);
    } else {
      setFavorites(favorites.filter((item) => item.idMeal !== meal.idMeal));
    }
  };

  useEffect(() => {
    fetcher();
  }, []);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  return (
    <MealContext.Provider
      value={{
        meal,
        setMeal,
        lastMeal,
        setLastMeal,
        fetcher,
        handleLastMeal,
        showModal,
        setShowModal,
        favorites,
        setFavorites,
        handleFavorite,
      }}
    >
      {children}
    </MealContext.Provider>
  );
};

export const useMeal = () => {
  return useContext(MealContext);
};
