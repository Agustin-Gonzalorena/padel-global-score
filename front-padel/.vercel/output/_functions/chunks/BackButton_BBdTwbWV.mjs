import { e as createComponent, m as maybeRenderHead, r as renderTemplate } from './astro/server_Dio6Ocm8.mjs';
import 'kleur/colors';
import 'clsx';

const $$BackButton = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${maybeRenderHead()}<div class="fixed w-full left-0 bottom-10 flex justify-center items-center"> <a href="/" class="bg-card px-6 py-2 rounded-full shadow-sm shadow-white/30"> <p class="text-primary/80">Volver</p> </a> </div>`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/BackButton.astro", void 0);

export { $$BackButton as $ };
