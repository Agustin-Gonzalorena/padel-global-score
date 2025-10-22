import React from "react";
import BoxHistory from "../components/BoxHistory";

const page = () => {
  return (
    <>
      <div className="flex flex-col text-center w-full p-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font">
          Historial
        </h1>
        <p className="text-sm text-white/70">Revise los encuentros pasados</p>
      </div>
      <BoxHistory />
    </>
  );
};

export default page;
