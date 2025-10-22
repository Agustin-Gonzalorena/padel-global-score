"use client";
import { useSearchParams } from "next/navigation";
import React, { useEffect, useState } from "react";
import CardPlayer from "../components/CardPlayer";
import Loading from "../components/Loading";

const page = () => {
  const params = useSearchParams();
  const [teams, setTeams] = useState([]);

  const fetchTeams = async () => {
    try {
      const resA = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/teams/${params.get("teamA")}`
      );
      const { data: teamA } = await resA.json();
      const resB = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/teams/${params.get("teamB")}`
      );
      const { data: teamB } = await resB.json();
      setTeams([teamA, teamB]);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };
  useEffect(() => {
    fetchTeams();
  }, []);
  if (teams.length === 0) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex flex-col gap-4 mt-5 min-h-screen">
        <div className="flex flex-col text-center w-full p-5">
          <h1 className="sm:text-3xl text-2xl font-medium title-font">
            Jugadores
          </h1>
          <p className="text-sm text-white/70">Conozca a los atletas</p>
        </div>
        {teams.map((m) => {
          return (
            <div
              className="flex flex-col gap-4 justify-center items-center px-2"
              key={m.id}
            >
              <CardPlayer
                name={
                  m.leftSide.name.charAt(0).toUpperCase() +
                  m.leftSide.name.slice(1)
                }
                urlPhoto={m.leftSide.urlPhoto}
                strength={m.leftSide.strength}
                weakness={m.leftSide.weakness}
                position="Reves"
              />

              <CardPlayer
                name={
                  m.rightSide.name.charAt(0).toUpperCase() +
                  m.rightSide.name.slice(1)
                }
                urlPhoto={m.rightSide.urlPhoto}
                strength={m.rightSide.strength}
                weakness={m.rightSide.weakness}
                position="Drive"
              />
            </div>
          );
        })}
      </div>
    </>
  );
};

export default page;
