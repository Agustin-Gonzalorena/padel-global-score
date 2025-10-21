import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dio6Ocm8.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Blllvo2t.mjs';
export { renderers } from '../renderers.mjs';

const $$Error = createComponent(($$result, $$props, $$slots) => {
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="min-h-3/4 flex flex-col gap-4 justify-center items-center"> <div class="text-center text-lg"> <p>Lo sentimos</p> <p>Error inesperado</p> </div> <a href="/" class="bg-card p-3 rounded-3xl shadow-sm shadow-primary/60 text-primary">
Recargar pagina
</a> </div> ` })}`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/error.astro", void 0);

const $$file = "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/error.astro";
const $$url = "/error";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Error,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
