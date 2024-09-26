import { Locale } from "@/i18n";
import { getTranslations } from "next-intl/server";
import Image from "next/image";
import React from "react";
import warrentypic from "./Pics/EW-Ecstarbanner-1920x400.jpg";
import freeoilpic from "./Pics/exchangecontent.jpg";
import un1 from "./Pics/Untitled.png";
import un2 from "./Pics/111.png";
const config = {
  customerChoice: "Customer choice of Engine Oil selection is as follows:",
  note: "NOTE: √: Applicable X: Not Applicable",
};
export default async function ExtendWarrenty() {
  return (
    <article>
      <section className="py-9">
        <Image
          src={warrentypic}
          layout="responsive"
          alt=" background-image background "
        />{" "}
        <br />
        <div className="container">
          <div className="row justify-content-center">
            <Image
              src={freeoilpic}
              layout="responsive"
              alt=" background-image background "
            />{" "}
          </div>
          <br />
          <div className="row justify-content-center">
            <Image
              src={un1}
              layout="responsive"
              alt=" background-image background "
            />{" "}
          </div>{" "}
          <h5 className="py-2">{config.customerChoice}</h5>
          <div className="row justify-content-center">
            <Image
              src={un2}
              layout="responsive"
              alt=" background-image background "
            />{" "}
          </div>
          <h5 className="py-2">{config.note}</h5>
        </div>
      </section>
    </article>
  );
}
