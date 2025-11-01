import { Suspense } from "react";
import BoxPlayer from "../components/BoxPlayer";
import TitleSections from "../components/TitleSections";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-5 min-h-screen">
        <TitleSections
          title={"Jugadores"}
          subtitle={"Los cracks y sus habilidades"}
        />
        {/* <Suspense fallback={<div>Loading players...</div>}>
          <BoxPlayer />
        </Suspense> */}
        <BoxPlayer />
      </div>
    </>
  );
};

export default page;
