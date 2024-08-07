import Aftersale from "../aftersale/page";
import Sale from "../sales/page";
import AimsandMissions from "./about_aim";
import Landingpage from "./landing_page";

export default async function HomePage() {
  return (
    <>
      {/* <Landingpage /> */}
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
