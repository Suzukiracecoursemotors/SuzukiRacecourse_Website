import Aftersale from "../aftersale/page";
import Carosil from "../common/carosil";
import Sale from "../sales/page";
import AimsandMissions from "./about_aim";
import Landingpage from "./landing_page";

export default async function HomePage() {
  return (
    <>
      {/* <Landingpage /> */}
      <Carosil />
      {/* <DepartmentsList /> */}
      <Sale
        params={{
          locale: undefined,
        }}
      />
      <Aftersale />

      <AimsandMissions />
    </>
  );
}
