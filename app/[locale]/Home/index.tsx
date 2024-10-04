import Cards from "../aftersale/cards";
import Whychose from "../aftersale/whychose";
import Carosil from "../common/carosil";
import CarsPage from "../common/carspage";

export default async function HomePage() {
  return (
    <>
      <Carosil />
      <CarsPage />
      {/* <Sale /> */}
      {/* <AimsandMissions /> */}
      {/* <Missions /> */}
      <Cards />
      <Whychose />
      {/* <AimsandMissions /> */}
      {/* <Missions /> */}
    </>
  );
}
