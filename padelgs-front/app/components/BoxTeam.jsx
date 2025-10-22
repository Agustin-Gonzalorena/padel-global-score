import React, { useState } from "react";
import CardTeam from "./CardTeam";

const BoxTeam = ({ teamA, teamB }) => {
  const [results, setResults] = useState([]);
  const [win, setWin] = useState(null);
  const fetchResults = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/statistics/vs?teamA=${teamA.id}&teamB=${teamB.id}`
      );
      const res = await response.json();
      setResults(res.data);
      setWin(res.data.winsTeamA > res.data.winsTeamB ? teamA : teamB);
    } catch (error) {
      console.error("Error fetching results:", error);
    }
  };
  React.useEffect(() => {
    fetchResults();
  }, []);
  return (
    <section className="flex-1 container mx-auto px-4 py-8 md:py-16">
      <div className="grid grid-cols-2 gap-3 md:gap-8 max-w-6xl mx-auto">
        <CardTeam
          team={teamA}
          wins={results.winsTeamA}
          streak={results.streakTeamA}
          win={win}
          urlTeam={teamA.urlPhoto}
          title="Team A"
        />
        <CardTeam
          team={teamB}
          wins={results.winsTeamB}
          streak={results.streakTeamB}
          win={win}
          urlTeam={teamB.urlPhoto}
          title="Team B"
        />
        <div className="text-center col-span-2 mt-4 flex justify-center">
          <p className="bg-card px-4 py-2 rounded-lg text-muted-foreground text-sm">
            Total de partidos jugados:{" "}
            <span className="text-white font-bold">{results.totalMatches}</span>
          </p>
        </div>
      </div>
    </section>
  );
};

export default BoxTeam;
