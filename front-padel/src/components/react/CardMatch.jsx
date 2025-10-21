import React from "react";

const CardMatch = ({ match }) => {
  const winnerColorTeamA =
    match.winner === null
      ? "text-white"
      : match.winner.id === match.teamA.id
      ? "text-primary"
      : "text-white";
  const winnerColorTeamB =
    match.winner === null
      ? "text-white"
      : match.winner.id === match.teamB.id
      ? "text-primary"
      : "text-white";

  const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const getDay = (dateString) => {
    const date = new Date(dateString + "T00:00:00-03:00");
    return date.toLocaleDateString("es-AR", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "America/Argentina/Buenos_Aires",
    });
  };
  return (
    <div className="text-center mb-8 md:mb-12">
      <div className="border border-border rounded-lg text-left p-4 md:p-6 bg-card">
        <section>
          <div className="mb-4 flex text-sm font-light justify-between">
            <p className="w-1/3 text-left">{getDay(match.date)}</p>
            <p className="w-1/3 text-center">
              {formatName(match.location.name)}
            </p>
            <p className="w-1/3 text-right">{match.time.substr(0, 5)}hs</p>
          </div>
        </section>
        <section className="flex items-center">
          <div id="teams">
            <p className={`${winnerColorTeamA}`}>
              {formatName(match.teamA.leftSide.name)} /{" "}
              {formatName(match.teamA.rightSide.name)}
            </p>
            <p className={`${winnerColorTeamB}`}>
              {formatName(match.teamB.leftSide.name)} /{" "}
              {formatName(match.teamB.rightSide.name)}
            </p>
          </div>
          <div className="ml-2 border-l border-white/30 pl-2">
            <p>{match.sets.length == 0 ? 0 : match.sets[0].gamesTeamA}</p>
            <p>{match.sets.length == 0 ? 0 : match.sets[0].gamesTeamB}</p>
          </div>
          <div className="ml-2 border-l border-white/30 pl-2">
            <p>{match.sets.length == 0 ? 0 : match.sets[1].gamesTeamA}</p>
            <p>{match.sets.length == 0 ? 0 : match.sets[1].gamesTeamB}</p>
          </div>
          <div className="ml-2 border-l border-r pr-2 border-white/30 pl-2">
            <p>{match.sets.length == 0 ? 0 : match.sets[2].gamesTeamA}</p>
            <p>{match.sets.length == 0 ? 0 : match.sets[2].gamesTeamB}</p>
          </div>
          <div className="ml-2 border-l border-white/30 pl-4 font-bold">
            {match.state == "SUSPENDED" && (
              <p className="text-yellow-500 text-xs">SUSPENDIDO</p>
            )}
            {match.state == "PENDING" && (
              <p className="text-purple-400 text-xs">Proximo</p>
            )}
          </div>
        </section>
      </div>
    </div>
  );
};

export default CardMatch;
