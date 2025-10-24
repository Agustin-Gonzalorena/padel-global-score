import React from "react";
import BoxHistory from "../components/BoxHistory";
import TitleSections from "../components/TitleSections";

const page = () => {
  return (
    <>
      <TitleSections
        title={"Historial"}
        subtitle={"Revise los encuentros pasados"}
      />
      <BoxHistory />
    </>
  );
};

export default page;
