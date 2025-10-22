"use client";
import React, { useEffect, useState } from "react";
import FormCreateMatch from "../components/FormCreateMatch";
import FormFinishMatch from "../components/FormFinishMatch";
import Loading from "../components/Loading";

const page = () => {
  const [loading, setLoading] = useState(true);
  const [pendingMatch, setPendingMatch] = useState(null);

  const fetchPendingMatch = async () => {
    try {
      const lastMatch = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/matches?teamA=1&teamB=2`,
        {
          method: "GET",
          headers: {
            Authorization: `Bearer ${
              document.cookie
                .split("; ")
                .find((row) => row.startsWith("token="))
                ?.split("=")[1]
            }`,
          },
        }
      );
      const lastMatchData = await lastMatch.json();
      setPendingMatch(lastMatchData.data.content[0]);
      setLoading(false);
    } catch (error) {
      console.error("Error fetching pending match:", error);
    }
  };
  const logOut = () => {
    document.cookie = "token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;";
    window.location.href = "/login";
  };
  useEffect(() => {
    fetchPendingMatch();
  }, []);
  if (loading) {
    return <Loading />;
  }
  return (
    <>
      <div className="flex flex-col text-center w-full p-5">
        <h1 className="sm:text-3xl text-2xl font-medium title-font">Panel</h1>
        <p className="text-sm text-white/70">Administre los encuentros</p>
      </div>
      <FormCreateMatch />
      <div className="flex flex-col gap-6 mt-10 max-w-md mx-auto items-center">
        {pendingMatch.state == "PENDING" ? (
          <FormFinishMatch pendingMatch={pendingMatch} />
        ) : (
          <p className="text-center mt-4 text-sm text-muted-foreground">
            No hay partidos creados aún.
          </p>
        )}
      </div>
      <div className="w-full flex justify-center mt-5">
        <button
          className="shadow-xs shadow-white/10 p-2 rounded-2xl"
          onClick={logOut}
        >
          Cerrar sesion
        </button>
      </div>
    </>
  );
};

export default page;
