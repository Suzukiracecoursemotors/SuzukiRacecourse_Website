"use client";
import Image from "next/image";
import { useState } from "react";
import { useTranslations } from "next-intl";
import Galaryimg from "../public/PurchaseOfferuptoRs.50,000forWagonR_1_011802.png";

interface GalleryProps {
  isGrey: boolean;
  title: string;
}

const images = [
  {
    src: Galaryimg,
    alt: "Image 1 description",
  },
  {
    src: Galaryimg,
    alt: "Image 1 description",
  },
];
const galleryTypes = ["Gallery"] as const;

function Gallery({ isGrey, title }: GalleryProps) {
  const t = useTranslations("page");
  const [selectedType, setSelectedType] = useState(galleryTypes[0]);

  const handleTypeChange = (type: any) => {
    setSelectedType(type);
  };

  return (
    <section className={`py-1 py-xl-1${isGrey ? " bg-light" : ""}`}>
      <div className="container mt-5 mt-xl-10">
        <div className="row mb-10 g-3 g-xl-5 align-items-end">
          <div className="col-lg-8">
            <h1 className="display-1">{title}</h1>
          </div>
        </div>

        <div className="mb-5">
          {galleryTypes.map((type) => (
            <button
              key={type}
              className={`btn btn-filter rounded-pill my-1 me-1 ${
                selectedType === type ? "current" : ""
              }`}
              onClick={() => handleTypeChange(type)}
            >
              Gallery{" "}
            </button>
          ))}
        </div>

        <div className="row mb-10 g-3 g-xl-5">
          {images.map((image, index) => (
            <div key={index} className="col-md-6 col-lg-4">
              <div className="media media-image gallery-img-container overlay">
                <Image
                  src={image.src}
                  width={600}
                  height={600}
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  alt={image.alt}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
