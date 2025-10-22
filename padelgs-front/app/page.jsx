"use client";
import { useEffect, useState } from "react";
import BoxTeam from "./components/BoxTeam";
import BoxMenu from "./components/BoxMenu";
import Loading from "./components/Loading";

export default function Home() {
  const [loading, setLoading] = useState(true);
  const [lastMatch, setLastMatch] = useState({});
  const [teams, setTeams] = useState([]);

  const getDay = (dateString) => {
    const date = new Date(dateString + "T00:00:00-03:00");
    return date.toLocaleDateString("es-AR", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "America/Argentina/Buenos_Aires",
    });
  };
  const fetchTeams = async () => {
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/matches?teamA=1&teamB=2&page=0&size=1`
      );
      const res = await response.json();
      setTeams(res.data.content);
      setLastMatch(res.data.content[0]);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };
  useEffect(() => {
    fetchTeams();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="mt-5 max-w-4xl mx-auto flex flex-col items-center text-center">
        <h2 className="bg-orange-300/20 rounded-t-2xl w-1/2 text-xl px-4 py-1">
          Proximo partido:
        </h2>
        <div className="flex justify-center w-full px-2">
          <div className="bg-orange-300/5 border-2 border-orange-300/20 p-5 rounded-2xl w-full ">
            {lastMatch.state == "PENDING" ? (
              <div className="flex text-sm justify-center gap-10 md:gap-20 w-full">
                <p>{getDay(lastMatch.date)}</p>
                <p>
                  {lastMatch.location.name.charAt(0).toUpperCase() +
                    lastMatch.location.name.slice(1)}
                </p>
                <p>{lastMatch.time.slice(0, 5)}hs</p>
              </div>
            ) : (
              <div className="flex text-sm justify-center gap-10 md:gap-20 w-full">
                <p>Proximamente...</p>
              </div>
            )}
          </div>
        </div>
      </div>
      <BoxTeam
        teamA={teams[0].teamA}
        teamB={teams[0].teamB}
        setLoading={setLoading}
      />
      <BoxMenu teamA={teams[0].teamA} teamB={teams[0].teamB} />
    </>
  );
}
