"use client";
import Image from "next/image";
import { useMemo, useState } from "react";
import {
  allImgs,
  cosmeticsImgs,
  interriorImgs,
  massagesImgs,
} from "@/lib/utils";
import { useTranslations } from "next-intl";

interface GalleryProps {
  isGrey: boolean;
  title: string;
}
type GalleryType = "all" | "interior" | "massages" | "cosmetics";
const types: GalleryType[] = ["all", "interior", "massages", "cosmetics"];

function Gallery({ isGrey, title }: GalleryProps) {
  const t = useTranslations("page");

  const [selected, setSelected] = useState("all");

  const handleChange = (type: string) => {
    setSelected(type);
  };

  const selectetImages = useMemo(() => {
    switch (selected) {
      case "all":
        return allImgs;
      case "cosmetics":
        return cosmeticsImgs;
      case "interior":
        return interriorImgs;
      case "massages":
        return massagesImgs;
      default:
        return [];
    }
  }, [selected]);

  return (
    <section className={"py-15 py-xl-20" + (isGrey ? " bg-light" : "")}>
      <div className="container mt-5 mt-xl-10">
        <div className="row mb-10 g-3 g-xl-5 align-items-end">
          <div className="col-lg-8">
            <h1 className="display-1">{title}</h1>
          </div>
        </div>

        <div className="mb-5 ">
          {types.map((type: GalleryType) => {
            return (
              <button
                key={type}
                className={`btn btn-filter rounded-pill my-1 me-1 ${
                  selected === type ? "current" : ""
                }`}
                onClick={() => handleChange(type)}
              >
                {t(`gallery.${type}`)}
              </button>
            );
          })}
        </div>

        <div className={`row mb-10 g-3 g-xl-5`} data-isotope="">
          {selectetImages.map((image, index) => (
            <div key={image} className={`col-md-6 col-lg-4`}>
              <div className="media media-image gallery-img-container overlay">
                <Image
                  src={image}
                  width={600}
                  height={600}
                  layout="responsive"
                  style={{ objectFit: "cover" }}
                  alt={`${index}`}
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
