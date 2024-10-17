import Cards from "../aftersale/cards";
import Whychose from "../aftersale/whychose";
import Carosil from "../common/carosil";
import CarsPage from "../common/carspage";
import CarosilEvery from "../sales/cars/every/CarosilEvery";

export default async function HomePage() {
  return (
    <>
      <CarosilEvery />
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
