import { e as createComponent, f as createAstro, m as maybeRenderHead, h as addAttribute, r as renderTemplate, k as renderComponent } from '../chunks/astro/server_Dio6Ocm8.mjs';
import 'kleur/colors';
import { $ as $$BackButton } from '../chunks/BackButton_BBdTwbWV.mjs';
import 'clsx';
import { $ as $$Layout } from '../chunks/Layout_Blllvo2t.mjs';
import { g as getTeams } from '../chunks/teamStore_DprTJ3Bg.mjs';
export { renderers } from '../renderers.mjs';

const $$Astro$1 = createAstro();
const $$CardPlayer = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro$1, $$props, $$slots);
  Astro2.self = $$CardPlayer;
  const { name, urlPhoto, strength, weakness, position } = Astro2.props;
  return renderTemplate`${maybeRenderHead()}<div class="bg-card p-2 w-full rounded-lg flex flex-row items-center text-center gap-5 border border-white/10"> <div> <div class="w-20 h-20 rounded-full overflow-hidden"> <img${addAttribute(urlPhoto, "src")} alt=""> </div> </div> <div class="text-left text-sm flex flex-col"> <p class="text-lg">${name}</p> <p class="text-muted-foreground">${position}</p> <p><span class="text-green-500">Fortaleza: </span> ${strength}</p> <p><span class="text-red-500">Debilidad: </span> ${weakness}</p> </div> </div>`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/CardPlayer.astro", void 0);

const $$Astro = createAstro();
const prerender = false;
const $$Players = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Players;
  const { searchParams } = new URL(Astro2.request.url);
  const teamAId = searchParams.get("teamA");
  const teamBId = searchParams.get("teamB");
  let teams = [];
  try {
    teams = await getTeams(teamAId, teamBId);
  } catch (error) {
    console.log(error);
    return Astro2.redirect("/error");
  }
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col gap-4 mt-5 min-h-screen"> <div class="flex flex-col text-center w-full p-5"> <h1 class="sm:text-3xl text-2xl font-medium title-font">Jugadores</h1> <p class="text-sm text-white/70">Conozca a los atletas</p> </div> ${teams.map((m) => {
    return renderTemplate`<div class="flex flex-col gap-4 justify-center items-center px-2"> ${renderComponent($$result2, "CardPlayer", $$CardPlayer, { "name": m.leftSide.name.charAt(0).toUpperCase() + m.leftSide.name.slice(1), "urlPhoto": m.leftSide.urlPhoto, "strength": m.leftSide.strength, "weakness": m.leftSide.weakness, "position": "Reves" })} ${renderComponent($$result2, "CardPlayer", $$CardPlayer, { "name": m.rightSide.name.charAt(0).toUpperCase() + m.rightSide.name.slice(1), "urlPhoto": m.rightSide.urlPhoto, "strength": m.rightSide.strength, "weakness": m.rightSide.weakness, "position": "Drive" })} </div>`;
  })} </div> ${renderComponent($$result2, "BackButton", $$BackButton, {})} ` })}`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/players.astro", void 0);

const $$file = "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/players.astro";
const $$url = "/players";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Players,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
