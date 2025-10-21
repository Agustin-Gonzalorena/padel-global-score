import React, { useEffect, useState } from "react";
import CardMatch from "./CardMatch.jsx";
import { set } from "astro:schema";

const BoxHistory = ({ BASE_URL }) => {
  const [params, setParams] = useState({});
  const [teams, setTeams] = useState([]);
  const [locations, setLocations] = useState([]);
  const [size, setSize] = useState(4);
  const [totalElements, setTotalElements] = useState(0);
  const [location, setLocation] = useState("all");
  const [winner, setWinner] = useState("all");
  const [loading, setLoading] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [teamA, setTeamA] = useState(null);
  const [teamB, setTeamB] = useState(null);

  const fetchTeams = async () => {
    try {
      setScrollPosition(window.scrollY);
      const query = new URLSearchParams();

      if (params.teamAId) query.append("teamA", params.teamAId);
      if (params.teamBId) query.append("teamB", params.teamBId);
      if (location !== "all") query.append("location", location);
      if (winner !== "all") query.append("winner", winner);
      query.append("page", 0);
      query.append("size", size);

      const response = await fetch(
        `${BASE_URL}/api/matches?${query.toString()}`
      );
      const res = await response.json();
      setTeams(res.data.content);
      //si es el primer fetch, setear teamA y teamB
      if (!teamA && res.data.content.length > 0) {
        setTeamA(res.data.content[0].teamA);
      }
      if (!teamB && res.data.content.length > 0) {
        setTeamB(res.data.content[0].teamB);
      }
      setTotalElements(res.data.totalElements);
      setLoading(false);
      window.scrollTo(0, scrollPosition);
    } catch (error) {
      console.error("Error fetching teams:", error);
    }
  };
  const getParams = async () => {
    const query = new URLSearchParams(window.location.search);
    setParams({
      teamAId: query.get("teamA"),
      teamBId: query.get("teamB"),
    });
  };
  const fetchLocations = async () => {
    try {
      const response = await fetch(`${BASE_URL}/api/locations`);
      const res = await response.json();
      setLocations(res.data);
    } catch (error) {
      console.error("Error fetching locations:", error);
    }
  };

  useEffect(() => {
    getParams();
    fetchLocations();
  }, []);
  useEffect(() => {
    window.scrollTo(0, scrollPosition);
  }, [teams]);
  useEffect(() => {
    if (!params.teamAId || !params.teamBId) return;
    setLoading(true);
    fetchTeams();
  }, [params, size, location, winner]);

  if (loading) {
    return (
      <div className="w-full flex justify-center items-center">
        <p>Cargando...</p>
      </div>
    );
  }
  return (
    <section className="px-2">
      <div className="bg-card/40 p-2 flex justify-end gap-2 md:gap-4 text-xs rounded-lg mb-4">
        <label htmlFor="">Lugar:</label>
        <select value={location} onChange={(e) => setLocation(e.target.value)}>
          <option value="all">Todos</option>
          {locations.map((loc) => (
            <option key={loc.id} value={loc.id}>
              {loc.name}
            </option>
          ))}
        </select>
        <label htmlFor="">Ganador:</label>
        <select value={winner} onChange={(e) => setWinner(e.target.value)}>
          <option value="all">Todos</option>
          <option value={teamA?.id}>
            {teamA?.leftSide.name} / {teamA?.rightSide.name}
          </option>
          <option value={teamB?.id}>
            {teamB?.leftSide.name} / {teamB?.rightSide.name}
          </option>
        </select>
      </div>

      {teams.map((match) => (
        <div className="match-item" key={match.id}>
          <CardMatch match={match} />
        </div>
      ))}
      <div className="container px-5 py-2 mx-auto">
        {teams.length === 0 && (
          <div className="text-center">
            <p>Sin resultados</p>
          </div>
        )}
        <div className="w-full flex justify-center">
          <button
            className="px-5 py-2  bg-card/50 rounded-xl mb-25 hover:bg-card/70 disabled:opacity-50"
            onClick={() => {
              setSize(size + 4);
            }}
            disabled={teams.length >= totalElements}
          >
            Ver más
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoxHistory;
