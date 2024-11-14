"use client";
import React, { useState, useEffect } from "react";
import image1 from "../../[locale]/public/swift awais website.jpg";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

function Carosil() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image1];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000);

    return () => clearInterval(interval);
  }, [images.length]);

  const autoSlideInterval = 3000;

  return (
    <section className="carouselContainer  bg-white ">
      <Carousel
        autoPlay={true}
        interval={autoSlideInterval}
        selectedItem={currentIndex}
        showArrows={true}
        showStatus={false}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index} className="">
            <Image src={image} layout="responsive" alt="background image" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Carosil;
