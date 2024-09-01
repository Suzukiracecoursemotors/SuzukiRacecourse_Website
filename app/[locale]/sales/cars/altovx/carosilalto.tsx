"use client";
import React, { useState, useEffect } from "react";
import image1 from "../../cars/altovx/New folder/1alto.jpg";
import image2 from "../../cars/altovx/New folder/2alto.jpg";
import image3 from "../../cars/altovx/New folder/3alto.jpg";
import image4 from "../../cars/altovx/New folder/4alto.jpg";
import image5 from "../../cars/altovx/New folder/5alto.jpg";
import image6 from "../../cars/altovx/New folder/6alto.jpg";
import image7 from "../../cars/altovx/New folder/7alto.jpg";
import image8 from "../../cars/altovx/New folder/8alt.jpg";
import image9 from "../../cars/altovx/New folder/9alto.jpg";
import image10 from "../../cars/altovx/New folder/10alto.jpg";
import image11 from "../../cars/altovx/New folder/11alto.jpg";
import image12 from "../../cars/altovx/New folder/12alt.jpg";

import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { BookingForm } from "@/app/[locale]/common/form";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
function CarosilAltoVX() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [
    image4,
    image1,
    image2,
    image3,
    image5,
    image6,
    image7,
    image8,
    image9,
    image11,
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 2000);

    return () => clearInterval(interval);
  }, [images.length]);
  const autoSlideInterval = 2000;

  return (
    <section className="">
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

export default CarosilAltoVX;
