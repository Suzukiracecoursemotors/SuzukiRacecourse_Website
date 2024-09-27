import Cards from "../aftersale/maintainpoint";
import Aftersale from "../aftersale/page";
import Whychose from "../aftersale/whychose";
import Carosil from "../common/carosil";
import Sale from "../sales/page";
import AimsandMissions from "./about_aim";

export default async function HomePage() {
  return (
    <>
      {/* <Landingpage /> */}
      <Carosil />
      {/* <DepartmentsList /> */}
      <Sale />
      {/* <Aftersale /> */}
      {/* <AimsandMissions /> */}
      {/* <Missions /> */}
      <Cards />
      <Whychose />
    </>
  );
}
