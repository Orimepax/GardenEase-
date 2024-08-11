import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import carouselImages from './CarouselImages';
import './MainCarousel.css'; // Import the custom CSS file


const items = carouselImages.map((image, index) => (
  <div key={index} className="carousel-item">
    <img src={image} alt={`Carousel ${index + 1}`} />
  </div>
));

const MainCarousel = () => (
  <AliceCarousel
    items={items}
    disableButtonsControls
    autoPlay
    autoPlayInterval={2000}
    infinite
    disableDotsControls
  />
);

export default MainCarousel;
