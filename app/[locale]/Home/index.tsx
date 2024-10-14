import Cards from "../aftersale/cards";
import Whychose from "../aftersale/whychose";
import Carosil from "../common/carosil";
import CarsPage from "../common/carspage";
import CarosilEvery from "../sales/cars/every/CarosilEvery";

export default async function HomePage() {
  return (
    <>
      <script
        async
        src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-4601096006216408"
        crossOrigin="anonymous"
      ></script>
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
