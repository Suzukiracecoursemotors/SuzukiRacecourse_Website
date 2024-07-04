import HomeAddress from "../common/address";
import Designhome from "../../[locale]/public/banner2.jpg";
import { Link } from "@/navigation";
import Constants from "@/data/Constants";
import Image from "next/image";
import DepartmentsList from "./departments";
import AimsandMissions from "./about_aim";
import Landingpage from "./landing_page";

export default async function HomePage() {
  return (
    <>
      <Landingpage />
      <DepartmentsList />
      <AimsandMissions />
    </>
  );
}
