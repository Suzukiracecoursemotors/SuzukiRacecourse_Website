"use client";
import React, { useState, useEffect } from "react";
import image3 from "./New folder/1.jpeg";
import image2 from "./New folder/2.jpeg";
import image4 from "./New folder/3.jpeg";
import image1 from "./New folder/4.jpeg";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarosilEvery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image4, image2, image3, image1];

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

export default CarosilEvery;
