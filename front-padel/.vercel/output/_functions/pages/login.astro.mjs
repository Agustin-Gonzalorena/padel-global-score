import { e as createComponent, k as renderComponent, r as renderTemplate, m as maybeRenderHead } from '../chunks/astro/server_Dio6Ocm8.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Blllvo2t.mjs';
import { jsx, jsxs } from 'react/jsx-runtime';
import 'react';
export { renderers } from '../renderers.mjs';

const FormLogin = ({ BASE_URL }) => {
  const handleSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);
    const username = formData.get("username");
    const password = formData.get("password");
    try {
      const response = await fetch(`${BASE_URL}/api/auth`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify({ username, password })
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response data:", errorData.message);
        throw new Error("Network response was not ok");
      }
      const res = await response.json();
      document.cookie = `token=${res.data.token}; path=/`;
      window.location.href = "/admin";
    } catch (error) {
      console.log(error);
      alert("Error logging in");
    }
  };
  return /* @__PURE__ */ jsx("div", { className: "w-full flex justify-center p-4", children: /* @__PURE__ */ jsxs(
    "form",
    {
      onSubmit: handleSubmit,
      className: "bg-card/50 rounded-2xl p-2 flex flex-col justify-center gap-5",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "username", children: "Usuario:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "text",
              id: "username",
              name: "username",
              required: true,
              className: "bg-card rounded-lg p-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
          /* @__PURE__ */ jsx("label", { htmlFor: "password", children: "Contraseña:" }),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "password",
              id: "password",
              name: "password",
              required: true,
              className: "bg-card rounded-lg p-1"
            }
          )
        ] }),
        /* @__PURE__ */ jsx(
          "button",
          {
            type: "submit",
            className: "mt-2 p-2 shadow-xs shadow-white/10 rounded-xl",
            children: "Iniciar"
          }
        )
      ]
    }
  ) });
};

const $$Login = createComponent(($$result, $$props, $$slots) => {
  const BASE_URL = "http://localhost:8080";
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col text-center w-full p-5"> <h1 class="sm:text-3xl text-2xl font-medium title-font">Iniciar Sesion</h1> <p class="text-sm text-white/70">Rappa no podes hackear esto</p> </div> ${renderComponent($$result2, "FormLogin", FormLogin, { "client:load": true, "BASE_URL": BASE_URL, "client:component-hydration": "load", "client:component-path": "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/react/FormLogin.jsx", "client:component-export": "default" })} ` })}`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/login.astro", void 0);
const $$file = "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/login.astro";
const $$url = "/login";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Login,
  file: $$file,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
