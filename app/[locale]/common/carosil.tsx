"use client";
import React, { useState, useEffect } from "react";
import image1 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import image2 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import image4 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import image5 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import image6 from "../../[locale]/public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";
import Image from "next/image";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import Constants from "@/data/Constants";
function Carosil() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [image4, image1, image2, image5, image6];

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
            <Image src={image} layout="responsive" alt="background image" />
          </div>
        ))}
      </Carousel>
    </section>
  );
}

export default Carosil;
