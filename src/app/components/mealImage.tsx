import Image from "next/image";
import { FC } from "react";

interface MealImageTypes {
  srcImage: string;
  altImage: string;
}

const MealImage: FC<MealImageTypes> = ({ srcImage, altImage }) => {
  return (
    <div className="relative w-full h-[400px] lg:min-w-[280px] lg:h-auto">
      <Image
        src={srcImage}
        alt={altImage}
        fill={true}
        className="object-cover"
        priority
      />
    </div>
  );
};

export default MealImage;
