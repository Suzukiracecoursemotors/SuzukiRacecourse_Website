"use client";
import React, { useState, useEffect } from "react";
import image3 from "./New folder/Studio Session-479.jpg";
import image2 from "./New folder/exterior2.jpg";
import image4 from "./New folder/Exterior Alto-2 (1920x800).jpg";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarosilAltoVX() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image2, image4, image3];

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
            <Image src={image} layout="responsive" alt="background-image" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default CarosilAltoVX;
