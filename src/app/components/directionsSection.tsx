import { FC } from "react";

const DirectionsSection: FC<{ instructions: string[] }> = ({
  instructions,
}) => {
  return (
    <ul className="p-5">
      {instructions.map((direction, index) => (
        <li key={index} className="list-disc">
          {direction}
        </li>
      ))}
    </ul>
  );
};

export default DirectionsSection;
