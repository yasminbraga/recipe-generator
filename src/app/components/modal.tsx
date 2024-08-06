import Image from "next/image";
import { useMeal } from "../contexts/mealContext";

const Modal: React.FC = () => {
  const { showModal, setShowModal, favorites } = useMeal();
  if (!showModal) return <></>;
  return (
    <div className="h-full w-screen fixed flex justify-center items-center bg-gray-500 bg-opacity-50">
      <div className="bg-white p-6 rounded-xl flex flex-col items-center">
        <h3 className="font-bold text-xl self-start">Favorites</h3>
        <div className="mt-4">
          {favorites.map((item) => (
            <div key={item.idMeal} className="flex items-center gap-4 mb-4">
              <Image
                src={item.strMealThumb}
                alt={item.strMeal}
                width={60}
                height={60}
                className="rounded"
              />
              <h4 className="font-semibold">{item.strMeal}</h4>
            </div>
          ))}
        </div>
        <button
          onClick={() => setShowModal(false)}
          className="bg-[#50C0D8] rounded-md py-1 w-[95px] text-white text-xs font-semibold shadow-md uppercase"
        >
          Close
        </button>
      </div>
    </div>
  );
};

export default Modal;
