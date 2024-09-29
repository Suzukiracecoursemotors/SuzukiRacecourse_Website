import Cards from "../aftersale/cards";
import Whychose from "../aftersale/whychose";
import Carosil from "../common/carosil";
import Sale from "../sales/page";

export default async function HomePage() {
  return (
    <>
      <Carosil />
      <Sale />
      {/* <AimsandMissions /> */}
      {/* <Missions /> */}
      <Cards />
      <Whychose />
    </>
  );
}
