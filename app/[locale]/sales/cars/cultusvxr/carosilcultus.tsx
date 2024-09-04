"use client";
import React, { useState, useEffect } from "react";
import image1 from "./cultuscarosilimg/Stylish.jpg";
import image2 from "./cultuscarosilimg/Cultus opend doors.jpg";
import image3 from "./cultuscarosilimg/Cultus-Side.jpg";
import image4 from "./cultuscarosilimg/Exterior Cultus-1 (1920x800).jpg";
import image7 from "./cultuscarosilimg/Exterior Cultus-2 (1920x800).jpg";
import image8 from "./cultuscarosilimg/Cultus-Blue-front.jpg";
import image9 from "./cultuscarosilimg/New-Cultus-2020.jpg";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarosilCultus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image4, image1, image2, image3, image7, image8, image9];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);
  const autoSlideInterval = 2000;

  return (
    <section className="mt-10">
      <Carousel
        autoPlay={true}
        interval={autoSlideInterval}
        selectedItem={currentIndex}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image
              src={image}
              layout="responsive"
              alt="background background-image"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default CarosilCultus;
