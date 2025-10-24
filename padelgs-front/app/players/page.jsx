import { Suspense } from "react";
import BoxPlayer from "../components/BoxPlayer";
import TitleSections from "../components/TitleSections";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-5 min-h-screen">
        <TitleSections title={"Jugadores"} subtitle={"Conozca a los atletas"} />
        {/* <Suspense fallback={<div>Loading players...</div>}>
          <BoxPlayer />
        </Suspense> */}
        <BoxPlayer />
      </div>
    </>
  );
};

export default page;
