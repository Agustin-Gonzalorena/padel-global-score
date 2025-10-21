import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_Dio6Ocm8.mjs';
import 'kleur/colors';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_Blllvo2t.mjs';
import { g as getTeams } from '../chunks/teamStore_DprTJ3Bg.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$3 = createAstro();
const $$CardTeam = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$3, $$props, $$slots);
  Astro2.self = $$CardTeam;
  const { team, wins, streak, win, urlTeam } = Astro2.props;
  const teamLeftSideName = team.leftSide.name.charAt(0).toUpperCase() + team.leftSide.name.slice(1);
  const teamRightSideName = team.rightSide.name.charAt(0).toUpperCase() + team.rightSide.name.slice(1);
  const isWinner = win && win.id === team.id;
  return renderTemplate`${maybeRenderHead()}<div${addAttribute(`p-4 rounded-lg flex flex-col items-center bg-card ${isWinner ? "border-1 border-primary shadow-lg shadow-primary/30" : ""}`, "class")}> <div${addAttribute(`w-20 h-20 mb-2 flex justify-center items-center rounded-full overflow-hidden border-3 ${isWinner ? "border-primary shadow-xl shadow-primary/20" : "border-white/5"}`, "class")}> <img class="w-full h-full object-cover"${addAttribute(urlTeam, "src")} alt=""> </div> <div id="Names" class="text-center text-xl font-extrabold mt-1"> <h3>${teamLeftSideName}</h3> <h3>${teamRightSideName}</h3> </div> <div id="Wins" class="text-center my-2 flex flex-col gap-1"> <p class="text-muted-foreground text-sm">TOTAL WINS</p> <p${addAttribute(`text-4xl font-bold ${isWinner ? "text-primary" : ""}`, "class")}>${wins}</p> </div> <div${addAttribute(`border-t border-white/10 w-full text-center relative ${streak > 0 ? "text-primary" : ""}`, "class")}> <p class="text-muted-foreground text-sm z-20 relative mt-1">RACHA</p> <div class="relative min-h-18 flex justify-center items-center mt-2"> ${streak > 0 ? renderTemplate`<p class="absolute right-1/2 bottom-0 text-2xl translate-x-1/2 text-[#FFFF00] font-bold z-20"> ${streak} </p>
      <svg fill="#FF6600" viewBox="0 0 32 32" version="1.1" xmlns="http://www.w3.org/2000/svg"${addAttribute(`absolute w-20 h-20 right-1/2 z-10 translate-x-1/2 opacity-80 filter drop-shadow-[0_-6px_6px_rgba(255,0,0,0.7)] ${streak > 0 ? "block" : "hidden"}`, "class")}> <path d="M15.888 31.977c-7.539 0-12.887-5.228-12.887-12.431 0-3.824 2.293-7.944 2.39-8.116 0.199-0.354 0.59-0.547 0.998-0.502 0.404 0.052 0.736 0.343 0.84 0.736 0.006 0.024 0.624 2.336 1.44 3.62 0.548 0.864 1.104 1.475 1.729 1.899-0.423-1.833-0.747-4.591-0.22-7.421 1.448-7.768 7.562-9.627 7.824-9.701 0.337-0.097 0.695-0.010 0.951 0.223 0.256 0.235 0.373 0.586 0.307 0.927-0.010 0.054-1.020 5.493 1.123 10.127 0.195 0.421 0.466 0.91 0.758 1.399 0.083-0.672 0.212-1.386 0.41-2.080 0.786-2.749 2.819-3.688 2.904-3.726 0.339-0.154 0.735-0.104 1.027 0.126 0.292 0.231 0.433 0.603 0.365 0.969-0.011 0.068-0.294 1.938 1.298 4.592 1.438 2.396 1.852 3.949 1.852 6.928 0 7.203-5.514 12.43-13.111 12.43zM6.115 14.615c-0.549 1.385-1.115 3.226-1.115 4.931 0 6.044 4.506 10.43 10.887 10.43 6.438 0 11.11-4.386 11.11-10.431 0-2.611-0.323-3.822-1.567-5.899-0.832-1.386-1.243-2.633-1.439-3.625-0.198 0.321-0.382 0.712-0.516 1.184-0.61 2.131-0.456 4.623-0.454 4.649 0.029 0.446-0.242 0.859-0.664 1.008s-0.892 0.002-1.151-0.364c-0.075-0.107-1.854-2.624-2.637-4.32-1.628-3.518-1.601-7.323-1.434-9.514-1.648 0.96-4.177 3.104-4.989 7.466-0.791 4.244 0.746 8.488 0.762 8.529 0.133 0.346 0.063 0.739-0.181 1.018-0.245 0.277-0.622 0.4-0.986 0.313-0.124-0.030-2.938-0.762-4.761-3.634-0.325-0.514-0.617-1.137-0.864-1.742z"></path> </svg>` : renderTemplate`<svg viewBox="0 0 1024 1024" class="icon h-10 w-10 opacity-20" fill="#779ecb"> <path d="M539.7 463.1V273.5l90.8-91.2c11-11 10.9-28.7 0-39.6-11-11-28.7-10.9-39.6 0L539.7 194V91.3c0-15.1-12.5-27.8-28-27.8-15.6 0-28 12.5-28 27.8V195L432.5 143.8c-10.9-10.9-28.6-11-39.6 0-10.9 10.9-11 28.6 0 39.6l90.8 91.2v188.6l-164.2-94.8L286 244.1c-4-15-19.4-23.8-34.3-19.8-15 4-23.8 19.4-19.8 34.3l18.7 70-88.9-51.4c-13.1-7.6-30.4-3-38.1 10.4-7.8 13.5-3.2 30.5 10.1 38.2l89.8 51.9-70 18.7c-14.9 4-23.8 19.3-19.8 34.3 4 14.9 19.3 23.8 34.3 19.8l124.4-33.1 163.3 94.3-164.2 94.8-124.4-33.1c-15-4-30.3 4.9-34.3 19.8-4 15 4.9 30.3 19.8 34.3l70 18.7-88.9 51.4c-13.1 7.6-17.8 24.8-10.1 38.2 7.8 13.5 24.8 18 38.1 10.4l89.8-51.9-18.7 70c-4 14.9 4.8 30.3 19.8 34.3 14.9 4 30.3-4.8 34.3-19.8l33.6-124.3 163.3-94.3v190.6l-90.8 93c-11 11-10.9 28.7 0 39.6 11 11 28.7 10.9 39.6 0l51.2-51.2v99.9c0 15.1 12.5 27.8 28 27.8 15.6 0 28-12.5 28-27.8v-101l51.2 51.2c10.9 10.9 28.6 11 39.6 0 10.9-10.9 11-28.6 0-39.6l-90.8-93V560.2l165.1 95.3L740 780.6c4 15 19.4 23.8 34.3 19.8 15-4 23.8-19.4 19.8-34.3l-18.7-70 86.6 50c13.1 7.6 30.4 3 38.1-10.4 7.8-13.5 3.2-30.5-10.1-38.2L802.6 647l70-18.7c14.9-4 23.8-19.3 19.8-34.3-4-14.9-19.3-23.8-34.3-19.8l-125.9 32.2L568 511.6l165.1-95.3L859 448.5c15 4 30.3-4.9 34.3-19.8 4-15-4.9-30.3-19.8-34.3l-70-18.7 86.6-50c13.1-7.6 17.8-24.8 10.1-38.2-7.8-13.5-24.8-18-38.1-10.4l-87.4 50.5 18.7-70c4-14.9-4.8-30.3-19.8-34.3-14.9-4-30.3 4.8-34.3 19.8l-35.1 125.1-164.5 94.9z"></path></svg>`} </div> </div> </div>`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/CardTeam.astro", void 0);

const $$Astro$2 = createAstro();
const $$BoxTeam = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$2, $$props, $$slots);
  Astro2.self = $$BoxTeam;
  const { teamA, teamB } = Astro2.props;
  const BASE_URL = "http://localhost:8080";
  const resResults = await fetch(
    `${BASE_URL}/api/statistics/vs?teamA=${teamA.id}&teamB=${teamB.id}`
  );
  const resultsData = await resResults.json();
  const { data: results } = resultsData;
  const win = results.winsTeamA > results.winsTeamB ? teamA : teamB;
  return renderTemplate`${maybeRenderHead()}<section class="flex-1 container mx-auto px-4 py-8 md:py-16"> <div class="grid grid-cols-2 gap-3 md:gap-8 max-w-6xl mx-auto"> ${renderComponent($$result, "CardTeam", $$CardTeam, { "team": teamA, "wins": results.winsTeamA, "streak": results.streakTeamA, "win": win, "urlTeam": teamA.urlPhoto, "title": "Team A" })} ${renderComponent($$result, "CardTeam", $$CardTeam, { "team": teamB, "wins": results.winsTeamB, "streak": results.streakTeamB, "win": win, "urlTeam": teamB.urlPhoto, "title": "Team B" })} <div class="text-center col-span-2 mt-4 flex justify-center"> <p class="bg-card px-4 py-2 rounded-lg text-muted-foreground text-sm">
Total de partidos jugados: <span class="text-white font-bold"> ${results.totalMatches} </span> </p> </div> </div> </section>`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/BoxTeam.astro", void 0);

const $$Astro$1 = createAstro();
const $$BoxMenu = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$BoxMenu;
  const { teamA, teamB } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="flex-1 container mx-auto px-4 py-8 md:py-10"> <div class="flex flex-col items-center"> <div class="flex w-full mb-2 gap-2"> <a${addAttribute(`/players?teamA=${teamA.id}&teamB=${teamB.id}`, "href")} class="w-1/2"> <div class="bg-card p-5 text-center shadow-sm shadow-white/30 text-sm rounded-2xl"> <p>NUESTROS</p> <p>JUGADORES</p> </div> </a> <a${addAttribute(`/history?teamA=${teamA.id}&teamB=${teamB.id}`, "href")} class="w-1/2"> <div class="bg-card p-5 text-center shadow-sm shadow-white/30 text-sm rounded-2xl"> <p>HISTORIAL</p> <p>PARTIDOS</p> </div> </a> </div> <a href="/admin" class="w-full"> <div class="mt-1 bg-card text-center p-4 shadow-sm shadow-white/30 rounded-2xl">
Adminitrar
</div> </a> </div> </div>`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/BoxMenu.astro", void 0);

const $$Astro = createAstro();
const $$Index = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Index;
  const teamAid = 1;
  const teamBid = 2;
  const BASE_URL = "http://localhost:8080";
  let teamA, teamB;
  let lastMatch;
  const getDay = (dateString) => {
    const date = /* @__PURE__ */ new Date(dateString + "T00:00:00-03:00");
    return date.toLocaleDateString("es-AR", {
      weekday: "short",
      month: "short",
      day: "numeric",
      timeZone: "America/Argentina/Buenos_Aires"
    });
  };
  try {
    const teams = await getTeams(BASE_URL, teamAid, teamBid);
    teamA = teams[0];
    teamB = teams[1];
    const resMatches = await fetch(
      `${BASE_URL}/api/matches?teamA=${teamAid}&teamB=${teamBid}&page=0&size=1`
    );
    const matchesData = await resMatches.json();
    if (matchesData.data.content.length == 0) {
      return Astro2.redirect("/error");
    }
    lastMatch = matchesData.data.content[0];
  } catch (error) {
    return Astro2.redirect("/error");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="mt-5 max-w-4xl mx-auto flex flex-col items-center text-center"> <h2 class="bg-orange-300/20 rounded-t-2xl w-1/2 text-xl px-4 py-1">
Proximo partido:
</h2> <div class="flex justify-center w-full px-2"> <div class="bg-orange-300/5 border-2 border-orange-300/20 p-5 rounded-2xl flex text-sm justify-center gap-10 md:gap-20 w-full"> ${lastMatch.state == "PENDING" ? renderTemplate`<p>${getDay(lastMatch.date)}</p>
        <p>${lastMatch.location.name.charAt(0).toUpperCase() + lastMatch.location.name.slice(1)}</p>
        <p>${lastMatch.time.slice(0, 5)}hs</p>` : renderTemplate`<p>Proximamente...</p>`} </div> </div> </div> ${renderComponent($$result2, "BoxTeam", $$BoxTeam, { "teamA": teamA, "teamB": teamB })} ${renderComponent($$result2, "BoxMenu", $$BoxMenu, { "teamA": teamA, "teamB": teamB })} ` })}`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/index.astro", void 0);
const $$file = "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/index.astro";
const $$url = "";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Index,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
