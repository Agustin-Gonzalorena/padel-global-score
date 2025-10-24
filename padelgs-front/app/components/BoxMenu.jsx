import React from "react";

const BoxMenu = ({ teamA, teamB }) => {
  return (
    <div className="flex-1 container mx-auto px-4 py-8 md:py-10">
      <div className="flex flex-col items-center">
        <div className="flex w-full mb-2 gap-2 text-center text-sm">
          <a
            href={`/players?teamA=${teamA.id}&teamB=${teamB.id}`}
            className="w-1/2 "
          >
            <div className="bg-secondary p-5 border-b-2 border-white/50 rounded-2xl active:scale-95">
              <p>NUESTROS</p>
              <p>JUGADORES</p>
            </div>
          </a>
          <a
            href={`/history?teamA=${teamA.id}&teamB=${teamB.id}`}
            className="w-1/2"
          >
            <div className="bg-secondary p-5 border-b-2 border-white/50 rounded-2xl active:scale-95">
              <p>HISTORIAL</p>
              <p>PARTIDOS</p>
            </div>
          </a>
        </div>
        <a href="/news" className="w-full">
          <div className="mt-1 bg-secondary p-4 border-b-2 border-white/50 text-center text-sm rounded-2xl active:scale-95">
            ULTIMAS NOTICIAS
          </div>
        </a>
      </div>
    </div>
  );
};

export default BoxMenu;
