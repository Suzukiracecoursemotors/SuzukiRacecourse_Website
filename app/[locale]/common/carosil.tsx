"use client";
import React, { useState, useEffect } from "react";
import image1 from "../../[locale]/public/banner1.jpeg";
import image2 from "../../[locale]/public/aftersale1.jpeg";
import image4 from "../../[locale]/public/banner2.jpg";
import image5 from "../../[locale]/public/banner3.jpeg";
import image6 from "../../[locale]/public/banner4.jpeg";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function Carosil() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image4, image1, image2, image5, image6]; // Replace with your image paths

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000); // Auto slide change interval in milliseconds

    return () => clearInterval(interval);
  }, [images.length]);
  const autoSlideInterval = 2000;

  return (
    <section className="py-4 py-xl-8">
      <Carousel
        autoPlay={true}
        interval={autoSlideInterval}
        selectedItem={currentIndex}
        showArrows={false}
        showStatus={false}
        showThumbs={false}
      >
        {images.map((image, index) => (
          <div key={index}>
            <Image src={image} layout="responsive" alt="background image" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Carosil;
