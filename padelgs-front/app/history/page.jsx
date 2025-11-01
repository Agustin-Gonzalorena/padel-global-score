import React from "react";
import BoxHistory from "../components/BoxHistory";
import TitleSections from "../components/TitleSections";

const page = () => {
  return (
    <>
      <TitleSections
        title={"Historial"}
        subtitle={"Lo que pasó y por qué dolió"}
      />
      <BoxHistory />
    </>
  );
};

export default page;
