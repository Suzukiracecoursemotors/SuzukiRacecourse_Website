"use client";
import React, { useState, useEffect } from "react";
import image1 from "./cultuscarosilimg/Stylish.jpg";
import image9 from "./cultuscarosilimg/New-Cultus-2020.jpg";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarosilCultus() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1, image9];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);
  const autoSlideInterval = 2000;

  return (
    <section className="mt-9">
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
