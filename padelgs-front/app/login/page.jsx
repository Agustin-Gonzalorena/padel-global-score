import React from "react";
import FormLogin from "../components/FormLogin";

const page = () => {
  return (
    <>
      <div className="flex flex-col text-center w-full p-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font">
          Iniciar Sesion
        </h1>
        <p className="text-sm text-white/70">Rappa no podes hackear esto</p>
      </div>
      <div className="mb-20">
        <FormLogin />
      </div>
    </>
  );
};

export default page;
