"use client";
import React, { useState } from "react";

const FormFinishMatch = ({ pendingMatch }) => {
  const [actionMatch, setActionMatch] = useState("finish");
  const [error, setError] = useState(null);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);

    const scoreA = formData.get("scoreA");
    const scoreB = formData.get("scoreB");

    const gamesTeamA = scoreA.split(",").map(Number);
    const gamesTeamB = scoreB.split(",").map(Number);

    const result = {
      results: gamesTeamA.map((gamesA, index) => ({
        numberSet: index + 1,
        gamesTeamA: gamesA,
        gamesTeamB: gamesTeamB[index] || 0,
      })),
    };
    console.log(result);
    try {
      const response = await fetch(
        `${process.env.NEXT_PUBLIC_BASE_URL}/api/matches/${actionMatch}/${pendingMatch.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${
              document.cookie
                .split("; ")
                .find((row) => row.startsWith("token="))
                ?.split("=")[1]
            }`,
          },
          body: JSON.stringify(result),
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response data:", errorData.message);
        setError(errorData.message);
        throw new Error("Network response was not ok");
      }
      const res = await response.json();
      console.log("Match finished successfully:", res);
      alert("Datos de partido cargados exitosamente");
      window.location.reload();
    } catch (error) {
      console.log(error);
      alert("Error finishing match");
    }
  };

  return (
    <div>
      <p
        id="match-info"
        className="text-center mt-4 text-sm text-muted-foreground"
      >
        Último partido creado:{" "}
        <span className="text-white font-bold">
          {new Date(pendingMatch.date).toLocaleDateString()} -{" "}
          {pendingMatch.location.name}
        </span>
      </p>
      <div className="mb-10 flex flex-col gap-4 mt-4 bg-card/50 p-3 rounded-lg">
        <h2>Cargar resultado</h2>
        <p className="text-xs text-red-500">{error != null && error}</p>
        <div>
          <input
            type="checkBox"
            id="suspend-match"
            name="suspend-match"
            onChange={() => setActionMatch("suspend")}
          />
          <label htmlFor="suspend-match" className="ml-2 text-sm">
            Suspender partido
          </label>
        </div>
        <form
          action=""
          id="form-result"
          onSubmit={handleSubmit}
          className="flex flex-col gap-2"
        >
          <div className="flex flex-col">
            <label className="text-sm font-thin">
              {pendingMatch.teamA.leftSide.name} /{" "}
              {pendingMatch.teamA.rightSide.name}
            </label>
            <input
              type="text"
              name="scoreA"
              id="scoreA"
              placeholder="6,3,6"
              className="bg-card p-2 rounded-lg"
            />
          </div>
          <div className="flex flex-col">
            <label className="text-sm font-thin">
              {pendingMatch.teamB.leftSide.name} /{" "}
              {pendingMatch.teamB.rightSide.name}
            </label>
            <input
              type="text"
              name="scoreB"
              id="scoreB"
              placeholder="4,6,3"
              className="bg-card p-2 rounded-lg"
            />
          </div>
          <button type="submit" className="underline text-md">
            Cargar
          </button>
        </form>
      </div>
    </div>
  );
};

export default FormFinishMatch;
