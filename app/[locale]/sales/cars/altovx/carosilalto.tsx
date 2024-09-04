"use client";
import React, { useState, useEffect } from "react";
import image1 from "./carosilpic/Studio Session-1150.jpg";
import image2 from "./carosilpic/Studio Session-1158.jpg";
import image3 from "./carosilpic/Studio Session-1163.jpg";
import image4 from "./carosilpic/Studio Session-1168.jpg";
import image5 from "./carosilpic/Studio Session-1177.jpg";
import image6 from "./carosilpic/Studio Session-1179.jpg";
import image7 from "./carosilpic/Studio Session-1190.jpg";
import image8 from "./carosilpic/Studio Session-1203.jpg";
import image9 from "./carosilpic/Studio Session-1250.jpg";
import image10 from "./carosilpic/Studio Session-1304.jpg";
import image11 from "./carosilpic/Studio Session-1310.jpg";
import image12 from "./carosilpic/Studio Session-1334.jpg";
import image13 from "./carosilpic/Studio Session-1357.jpg";
import image14 from "./carosilpic/Studio Session-1370.jpg";
import image15 from "./carosilpic/Studio Session-1429.jpg";
import image16 from "./carosilpic/Studio Session-1429_01.jpg";
import image17 from "./carosilpic/Studio Session-1461.jpg";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
function CarosilAltoVX() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image4,
    image1,
    image2,
    image5,
    image3,
    image6,
    image7,
    image8,
    image9,
    image11,
    image10,
    image11,
    image12,
    image13,
    image14,
    image15,
    image16,
    image17,
  ];

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
              alt="
             background-image"
            />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default CarosilAltoVX;
