import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dio6Ocm8.mjs';
import 'kleur/colors';
import { $ as $$BackButton } from '../chunks/BackButton_BBdTwbWV.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import { useState, useEffect } from 'react';
import { $ as $$Layout } from '../chunks/Layout_Blllvo2t.mjs';
export { renderers } from '../renderers.mjs';

const CardMatch = ({ match }) => {
  const winnerColorTeamA = match.winner === null ? "text-white" : match.winner.id === match.teamA.id ? "text-primary" : "text-white";
  const winnerColorTeamB = match.winner === null ? "text-white" : match.winner.id === match.teamB.id ? "text-primary" : "text-white";
  const formatName = (name) => {
    return name.charAt(0).toUpperCase() + name.slice(1);
  };
  const getDay = (dateString) => {
    const date = /* @__PURE__ */ new Date(dateString + "T00:00:00-03:00");
    return date.toLocaleDateString("es-AR", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "America/Argentina/Buenos_Aires"
    });
  };
  return /* @__PURE__ */ jsx("div", { className: "text-center mb-8 md:mb-12", children: /* @__PURE__ */ jsxs("div", { className: "border border-border rounded-lg text-left p-4 md:p-6 bg-card", children: [
    /* @__PURE__ */ jsx("section", { children: /* @__PURE__ */ jsxs("div", { className: "mb-4 flex text-sm font-light justify-between", children: [
      /* @__PURE__ */ jsx("p", { className: "w-1/3 text-left", children: getDay(match.date) }),
      /* @__PURE__ */ jsx("p", { className: "w-1/3 text-center", children: formatName(match.location.name) }),
      /* @__PURE__ */ jsxs("p", { className: "w-1/3 text-right", children: [
        match.time.substr(0, 5),
        "hs"
      ] })
    ] }) }),
    /* @__PURE__ */ jsxs("section", { className: "flex items-center", children: [
      /* @__PURE__ */ jsxs("div", { id: "teams", children: [
        /* @__PURE__ */ jsxs("p", { className: `${winnerColorTeamA}`, children: [
          formatName(match.teamA.leftSide.name),
          " /",
          " ",
          formatName(match.teamA.rightSide.name)
        ] }),
        /* @__PURE__ */ jsxs("p", { className: `${winnerColorTeamB}`, children: [
          formatName(match.teamB.leftSide.name),
          " /",
          " ",
          formatName(match.teamB.rightSide.name)
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ml-2 border-l border-white/30 pl-2", children: [
        /* @__PURE__ */ jsx("p", { children: match.sets.length == 0 ? 0 : match.sets[0].gamesTeamA }),
        /* @__PURE__ */ jsx("p", { children: match.sets.length == 0 ? 0 : match.sets[0].gamesTeamB })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ml-2 border-l border-white/30 pl-2", children: [
        /* @__PURE__ */ jsx("p", { children: match.sets.length == 0 ? 0 : match.sets[1].gamesTeamA }),
        /* @__PURE__ */ jsx("p", { children: match.sets.length == 0 ? 0 : match.sets[1].gamesTeamB })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ml-2 border-l border-r pr-2 border-white/30 pl-2", children: [
        /* @__PURE__ */ jsx("p", { children: match.sets.length == 0 ? 0 : match.sets[2].gamesTeamA }),
        /* @__PURE__ */ jsx("p", { children: match.sets.length == 0 ? 0 : match.sets[2].gamesTeamB })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "ml-2 border-l border-white/30 pl-4 font-bold", children: [
        match.state == "SUSPENDED" && /* @__PURE__ */ jsx("p", { className: "text-yellow-500 text-xs", children: "SUSPENDIDO" }),
        match.state == "PENDING" && /* @__PURE__ */ jsx("p", { className: "text-purple-400 text-xs", children: "Proximo" })
      ] })
    ] })
  ] }) });
};

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
      teamBId: query.get("teamB")
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
    return /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center items-center", children: /* @__PURE__ */ jsx("p", { children: "Cargando..." }) });
  }
  return /* @__PURE__ */ jsxs("section", { className: "px-2", children: [
    /* @__PURE__ */ jsxs("div", { className: "bg-card/40 p-2 flex justify-end gap-2 md:gap-4 text-xs rounded-lg mb-4", children: [
      /* @__PURE__ */ jsx("label", { htmlFor: "", children: "Lugar:" }),
      /* @__PURE__ */ jsxs("select", { value: location, onChange: (e) => setLocation(e.target.value), children: [
        /* @__PURE__ */ jsx("option", { value: "all", children: "Todos" }),
        locations.map((loc) => /* @__PURE__ */ jsx("option", { value: loc.id, children: loc.name }, loc.id))
      ] }),
      /* @__PURE__ */ jsx("label", { htmlFor: "", children: "Ganador:" }),
      /* @__PURE__ */ jsxs("select", { value: winner, onChange: (e) => setWinner(e.target.value), children: [
        /* @__PURE__ */ jsx("option", { value: "all", children: "Todos" }),
        /* @__PURE__ */ jsxs("option", { value: teamA?.id, children: [
          teamA?.leftSide.name,
          " / ",
          teamA?.rightSide.name
        ] }),
        /* @__PURE__ */ jsxs("option", { value: teamB?.id, children: [
          teamB?.leftSide.name,
          " / ",
          teamB?.rightSide.name
        ] })
      ] })
    ] }),
    teams.map((match) => /* @__PURE__ */ jsx("div", { className: "match-item", children: /* @__PURE__ */ jsx(CardMatch, { match }) }, match.id)),
    /* @__PURE__ */ jsxs("div", { className: "container px-5 py-2 mx-auto", children: [
      teams.length === 0 && /* @__PURE__ */ jsx("div", { className: "text-center", children: /* @__PURE__ */ jsx("p", { children: "Sin resultados" }) }),
      /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center", children: /* @__PURE__ */ jsx(
        "button",
        {
          className: "px-5 py-2  bg-card/50 rounded-xl mb-25 hover:bg-card/70 disabled:opacity-50",
          onClick: () => {
            setSize(size + 4);
          },
          disabled: teams.length >= totalElements,
          children: "Ver más"
        }
      ) })
    ] })
  ] });
};

const prerender = false;
const $$History = createComponent(($$result, $$props, $$slots) => {
  const BASE_URL = "http://localhost:8080";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col text-center w-full p-5"> <h1 class="sm:text-3xl text-2xl font-medium title-font">Historial</h1> <p class="text-sm text-white/70">Revise los encuentros pasados</p> </div> ${renderComponent($$result2, "BoxHistory", BoxHistory, { "client:load": true, "BASE_URL": BASE_URL, "client:component-hydration": "load", "client:component-path": "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/react/BoxHistory", "client:component-export": "default" })} ` })} ${renderComponent($$result, "BackButton", $$BackButton, {})}`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/history.astro", void 0);
const $$file = "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/history.astro";
const $$url = "/history";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$History,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
