import React from "react";
import CardStats from "./CardStats";

const Stats = ({ results }) => {
  const percentage = (part, total) => {
    if (total === 0) return "0.00";
    return ((part / total) * 100).toPrecision(3);
  };
  return (
    <div className="w-full flex flex-col justify-center items-center gap-3 px-2">
      <div className="flex flex-col text-center w-full p-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font">
          Estadisticas
        </h1>
        <p className="text-sm text-white/70">Descubra los datos clave</p>
      </div>
      <div className="flex gap-2 w-full">
        <CardStats
          name={"Partidos"}
          total={results.totalMatches}
          winTeamA={results.winMatchesTeamA}
          winTeamB={results.winMatchesTeamB}
          percentage={percentage}
        />
        <CardStats
          name={"Mejores Rachas 🔥"}
          total={null}
          winTeamA={results.maxStreakTeamA}
          winTeamB={results.maxStreakTeamB}
          percentage={percentage}
        />
      </div>
      <p className="text-xs text-white/20 text-center">
        A partir de aqui estan conciderados los encuentros donde se registraron
        los puntos.
      </p>
      <div className="flex w-full gap-2">
        <CardStats
          name={"Sets"}
          total={results.totalSets}
          winTeamA={results.winSetsTeamA}
          winTeamB={results.winSetsTeamB}
          percentage={percentage}
        />
        <CardStats
          name={"Games"}
          total={results.totalGames}
          winTeamA={results.winGamesTeamA}
          winTeamB={results.winGamesTeamB}
          percentage={percentage}
        />
      </div>
      <CardStats
        name={"Tie-Breaks"}
        total={results.totalTiebreaks}
        winTeamA={results.winTiebreaksTeamA}
        winTeamB={results.winTiebreaksTeamB}
        percentage={percentage}
      />
    </div>
  );
};

export default Stats;
