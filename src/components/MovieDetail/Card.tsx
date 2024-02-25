import React from "react";
import ASSETS from "../../utils/constant/assets";

interface ItemCardProps {
  name: string;
  image?: string;
}

const ItemCard = ({ name, image }: ItemCardProps) => {
  return (
    <div className="flex-shrink-0 flex-grow-0 basis-auto min-w-[16rem] max-w-[16rem] m-2 p-2 rounded overflow-hidden shadow-lg bg-gray-800 text-white hover:bg-gray-700 transition duration-200 ease-in-out">
      <div className="w-full h-48 max-w-[16rem] flex justify-center items-center overflow-hidden">
        <img
          className="object-cover min-w-full min-h-full"
          src={image ? image : ASSETS.IMAGE_NOT_FOUND}
          alt={name}
        />
      </div>
      <div className="px-6 py-4 h-20 flex flex-col justify-between">
        <div className="font-bold text-xl break-words">{name}</div>
      </div>
    </div>
  );
};

export default ItemCard;
