import React from "react";

const HomeSectionCard = ({ image }) => {
  return (
    <div className="cursor-pointer flex flex-col items-center bg-white rounded-lg shadow-lg overflow-hidden w-[15rem] mx-3">
      <div className="relative h-[13rem] w-full">
        <img
          className="absolute inset-0 object-cover w-full h-full"
          src={image}
          alt="Carousel Item"
        />
      </div>

      <div className="p-4">
        <h3 className="text-lg font-medium text-gray-900">Cluster Beans</h3>
        <p className="mt-2 text-sm text-gray-500">
          Gwar Seeds - Excellent Germination
        </p>
      </div>
    </div>
  );
};

export default HomeSectionCard;
