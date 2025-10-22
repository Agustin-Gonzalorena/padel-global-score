import { Suspense } from "react";
import BoxPlayer from "../components/BoxPlayer";

const page = () => {
  return (
    <>
      <div className="flex flex-col gap-4 mt-5 min-h-screen">
        <div className="flex flex-col text-center w-full p-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font">
            Jugadores
          </h1>
          <p className="text-sm text-white/70">Conozca a los atletas</p>
        </div>
        {/* <Suspense fallback={<div>Loading players...</div>}>
          <BoxPlayer />
        </Suspense> */}
        <BoxPlayer />
      </div>
    </>
  );
};

export default page;
