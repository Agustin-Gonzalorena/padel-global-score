import React from "react";

const CardPlayer = ({ name, urlPhoto, strength, weakness, position }) => {
  return (
    <div className="bg-card p-2 w-full rounded-lg flex flex-row items-center text-center gap-5 border border-white/10">
      <div>
        <div className="w-20 h-20 rounded-full overflow-hidden">
          <img src={urlPhoto} alt="" />
        </div>
      </div>
      <div className="text-left text-sm flex flex-col">
        <p className="text-lg">{name}</p>
        <p className="text-muted-foreground">{position}</p>
        <p>
          <span className="text-green-500">Fortaleza: </span> {strength}
        </p>
        <p>
          <span className="text-red-500">Debilidad: </span> {weakness}
        </p>
      </div>
    </div>
  );
};

export default CardPlayer;
