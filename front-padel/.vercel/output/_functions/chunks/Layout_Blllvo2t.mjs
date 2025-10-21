import { e as createComponent, m as maybeRenderHead, r as renderTemplate, f as createAstro, h as addAttribute, n as renderHead, k as renderComponent, o as renderSlot } from './astro/server_Dio6Ocm8.mjs';
import 'kleur/colors';
/* empty css                         */
import 'clsx';

const $$Navbar = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<header class="w-full border-b border-white/10 backdrop-blur-sm sticky top-0 z-50"> <div class="container mx-auto px-4 py-6"> <div class="flex items-center justify-center gap-4"> <a href="/" class="flex"> <div class="w-9 h-9"> <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trophy w-8 h-8 text-primary"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2H6v7a6 6 0 0 0 12 0V2Z"></path></svg> </div> <h1 class="text-3xl md:text-4xl font-bold tracking-tight text-foreground">
Padel Global Score
</h1> </a> </div> </div> </header>`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/Navbar.astro", void 0);

const $$Astro = createAstro();
const $$Layout = createComponent(($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Layout;
  return renderTemplate`<html lang="en" data-astro-cid-sckkx6r4> <head><meta charset="UTF-8"><meta name="viewport" content="width=device-width"><link rel="icon" type="ico" href="/favicon.ico"><meta name="generator"${addAttribute(Astro2.generator, "content")}><title>Padel Global Score</title>${renderHead()}</head> <body class="flex flex-col w-full items-center" data-astro-cid-sckkx6r4> ${renderComponent($$result, "Navbar", $$Navbar, { "data-astro-cid-sckkx6r4": true })} <main class="w-full md:max-w-2/6" data-astro-cid-sckkx6r4> ${renderSlot($$result, $$slots["default"])} <!-- <Footer /> --> </main> </body></html>`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/layouts/Layout.astro", void 0);

export { $$Layout as $ };
