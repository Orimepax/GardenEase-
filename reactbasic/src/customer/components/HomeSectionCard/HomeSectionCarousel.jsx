import React, { useState } from "react";
import AliceCarousel from "react-alice-carousel";
import HomeSectionCard from "./HomeSectionCard";
import { KeyboardArrowRight, KeyboardArrowLeft } from "@mui/icons-material";
import cardImages from "./CardImages"; // Correct the path as needed

const HomeSectionCarousel = () => {
  const itemsPerPage = 5;
  const [currentPage, setCurrentPage] = useState(0);

  const totalItems = cardImages.length;
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePrev = () => {
    setCurrentPage((prevPage) => Math.max(prevPage - 1, 0));
  };

  const handleNext = () => {
    setCurrentPage((prevPage) => Math.min(prevPage + 1, totalPages - 1));
  };

  const startIndex = currentPage * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const itemsToDisplay = cardImages.slice(startIndex, endIndex).map((image, index) => (
    <HomeSectionCard key={index} image={image} />
  ));

  return (
    <div className="flex justify-center items-center relative">
      <AliceCarousel
        items={itemsToDisplay}
        disableDotsControls
        disableButtonsControls
        infinite
        responsive={{
          0: { items: 1 },
          720: { items: 3 },
          1024: { items: 5 },
        }}
      />
      {currentPage > 0 && (
        <button
          onClick={handlePrev}
          className="z-50 absolute top-1/2 left-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
          aria-label="previous"
        >
          <KeyboardArrowLeft />
        </button>
      )}
      {currentPage < totalPages - 1 && (
        <button
          onClick={handleNext}
          className="z-50 absolute top-1/2 right-0 transform -translate-y-1/2 bg-white text-black p-2 rounded-full shadow-lg"
          aria-label="next"
        >
          <KeyboardArrowRight />
        </button>
      )}
    </div>
  );
};

export default HomeSectionCarousel;
