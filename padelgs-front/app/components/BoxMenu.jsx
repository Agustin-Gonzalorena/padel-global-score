import React from "react";

const BoxMenu = ({ teamA, teamB }) => {
  return (
    <div className="flex-1 container mx-auto px-4 py-8 md:py-10">
      <div className="flex flex-col items-center">
        <div className="flex w-full mb-2 gap-2">
          <a
            href={`/players?teamA=${teamA.id}&teamB=${teamB.id}`}
            className="w-1/2"
          >
            <div className="bg-card p-5 text-center shadow-sm shadow-white/30 text-sm rounded-2xl">
              <p>NUESTROS</p>
              <p>JUGADORES</p>
            </div>
          </a>
          <a
            href={`/history?teamA=${teamA.id}&teamB=${teamB.id}`}
            className="w-1/2"
          >
            <div className="bg-card p-5 text-center shadow-sm shadow-white/30 text-sm rounded-2xl">
              <p>HISTORIAL</p>
              <p>PARTIDOS</p>
            </div>
          </a>
        </div>
        <a href="/news/1" className="w-full">
          <div className="mt-1 bg-card text-center p-4 shadow-sm shadow-white/30 rounded-2xl">
            ULTIMAS NOTICIAS
          </div>
        </a>
      </div>
    </div>
  );
};

export default BoxMenu;
