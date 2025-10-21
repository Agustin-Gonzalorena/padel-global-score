import { e as createComponent, f as createAstro, k as renderComponent, r as renderTemplate, m as maybeRenderHead, l as renderScript } from '../chunks/astro/server_Dio6Ocm8.mjs';
import 'kleur/colors';
import { $ as $$Layout } from '../chunks/Layout_Blllvo2t.mjs';
import { jsxs, jsx } from 'react/jsx-runtime';
import React, { useState, useEffect } from 'react';
export { renderers } from '../renderers.mjs';

const FormCreateMatch = ({ BASE_URL }) => {
  const [locations, setLocations] = useState([]);
  const [location, setLocation] = useState(1);
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const data = {
      date: formData.get("date"),
      time: formData.get("time"),
      locationId: location,
      teamAId: parseInt(formData.get("teamAId")),
      teamBId: parseInt(formData.get("teamBId"))
    };
    try {
      const response = await fetch(`${BASE_URL}/api/matches`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1]}`
        },
        body: JSON.stringify(data)
      });
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response data:", errorData.message);
        throw new Error("Network response was not ok");
      }
      const result = await response.json();
      console.log("Match created successfully:", result);
      alert("Partido creado exitosamente");
      window.location.reload();
    } catch (error) {
      alert("Error creating match");
    }
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
    fetchLocations();
  }, []);
  return /* @__PURE__ */ jsxs("div", { className: "w-full justify-center items-center flex flex-col mt-5", children: [
    /* @__PURE__ */ jsx("p", { children: "Crear Partido" }),
    /* @__PURE__ */ jsxs(
      "form",
      {
        action: "",
        onSubmit: handleSubmit,
        className: "flex flex-col items-center gap-4 mt-4 bg-card/50 p-3 rounded-lg",
        children: [
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "date",
              name: "date",
              id: "date",
              required: true,
              className: "bg-card p-2 rounded-lg w-full"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "time",
              name: "time",
              id: "time",
              required: true,
              className: "bg-card p-2 rounded-lg w-full"
            }
          ),
          /* @__PURE__ */ jsx(
            "select",
            {
              value: location,
              onChange: (e) => setLocation(e.target.value),
              className: "w-full bg-card p-2 rounded-lg",
              children: locations.map((loc) => /* @__PURE__ */ jsx("option", { value: loc.id, children: loc.name }, loc.id))
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              name: "teamAId",
              id: "teamAId",
              placeholder: "Team A ID",
              required: true,
              className: "bg-card p-2 rounded-lg w-full"
            }
          ),
          /* @__PURE__ */ jsx(
            "input",
            {
              type: "number",
              name: "teamBId",
              id: "teamBId",
              placeholder: "Team B ID",
              required: true,
              className: "bg-card p-2 rounded-lg"
            }
          ),
          /* @__PURE__ */ jsx("button", { type: "submit", className: "underline", children: "Crear" })
        ]
      }
    )
  ] });
};

const FormFinishMatch = ({ pendingMatch, BASE_URL }) => {
  const [actionMatch, setActionMatch] = React.useState("finish");
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
        gamesTeamB: gamesTeamB[index] || 0
      }))
    };
    console.log(result);
    try {
      const response = await fetch(
        `${BASE_URL}/api/matches/${actionMatch}/${pendingMatch.id}`,
        {
          method: "PUT",
          headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${document.cookie.split("; ").find((row) => row.startsWith("token="))?.split("=")[1]}`
          },
          body: JSON.stringify(result)
        }
      );
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Error response data:", errorData.message);
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
  return /* @__PURE__ */ jsxs("div", { children: [
    /* @__PURE__ */ jsxs(
      "p",
      {
        id: "match-info",
        className: "text-center mt-4 text-sm text-muted-foreground",
        children: [
          "Último partido creado:",
          " ",
          /* @__PURE__ */ jsxs("span", { className: "text-white font-bold", children: [
            new Date(pendingMatch.date).toLocaleDateString(),
            " -",
            " ",
            pendingMatch.location.name
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs("div", { className: "mb-10 flex flex-col gap-4 mt-4 bg-card/50 p-3 rounded-lg", children: [
      /* @__PURE__ */ jsx("h2", { children: "Cargar resultado" }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx(
          "input",
          {
            type: "checkBox",
            id: "suspend-match",
            name: "suspend-match",
            onChange: () => setActionMatch("suspend")
          }
        ),
        /* @__PURE__ */ jsx("label", { htmlFor: "suspend-match", className: "ml-2 text-sm", children: "Suspender partido" })
      ] }),
      /* @__PURE__ */ jsxs(
        "form",
        {
          action: "",
          id: "form-result",
          onSubmit: handleSubmit,
          className: "flex flex-col gap-2",
          children: [
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs("label", { className: "text-sm font-thin", children: [
                pendingMatch.teamA.leftSide.name,
                " /",
                " ",
                pendingMatch.teamA.rightSide.name
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "scoreA",
                  id: "scoreA",
                  placeholder: "6,3,6",
                  className: "bg-card p-2 rounded-lg"
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex flex-col", children: [
              /* @__PURE__ */ jsxs("label", { className: "text-sm font-thin", children: [
                pendingMatch.teamB.leftSide.name,
                " /",
                " ",
                pendingMatch.teamB.rightSide.name
              ] }),
              /* @__PURE__ */ jsx(
                "input",
                {
                  type: "text",
                  name: "scoreB",
                  id: "scoreB",
                  placeholder: "4,6,3",
                  className: "bg-card p-2 rounded-lg"
                }
              )
            ] }),
            /* @__PURE__ */ jsx("button", { type: "submit", className: "underline text-md", children: "Cargar" })
          ]
        }
      )
    ] })
  ] });
};

const $$Astro = createAstro();
const prerender = false;
const $$Admin = createComponent(async ($$result, $$props, $$slots) => {
  const Astro2 = $$result.createAstro($$Astro, $$props, $$slots);
  Astro2.self = $$Admin;
  const tokenCookie = Astro2.cookies.get("token") || null;
  if (!tokenCookie || !tokenCookie.value) {
    return Astro2.redirect("/login");
  }
  const BASE_URL = "http://localhost:8080";
  const res = await fetch(`${BASE_URL}/api/auth/validate`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${tokenCookie.value}`
    }
  });
  if (!res.ok) {
    console.log("Token no válido, redirigiendo a login");
    return Astro2.redirect("/login");
  }
  const lastMatch = await fetch(`${BASE_URL}/api/matches?teamA=1&teamB=2`, {
    method: "GET",
    headers: {
      Authorization: `Bearer ${tokenCookie.value}`
    }
  });
  const lastMatchData = await lastMatch.json();
  const pendingMatch = lastMatchData.data.content[0];
  console.log(pendingMatch);
  return renderTemplate`${renderComponent($$result, "Layout", $$Layout, {}, { "default": async ($$result2) => renderTemplate` ${maybeRenderHead()}<div class="flex flex-col text-center w-full p-5"> <h1 class="sm:text-3xl text-2xl font-medium title-font">Panel</h1> <p class="text-sm text-white/70">Administre los encuentros</p> </div> ${renderComponent($$result2, "FormCreateMatch", FormCreateMatch, { "client:load": true, "BASE_URL": BASE_URL, "client:component-hydration": "load", "client:component-path": "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/react/FormCreateMatch", "client:component-export": "default" })} <div class="flex flex-col gap-6 mt-10 max-w-md mx-auto items-center"> ${pendingMatch.state == "PENDING" ? renderTemplate`${renderComponent($$result2, "FormFinishMatch", FormFinishMatch, { "client:load": true, "pendingMatch": pendingMatch, "BASE_URL": BASE_URL, "client:component-hydration": "load", "client:component-path": "/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/react/FormFinishMatch.jsx", "client:component-export": "default" })}` : renderTemplate`<p class="text-center mt-4 text-sm text-muted-foreground">
No hay partidos creados aún.
</p>`} </div> <div class="w-full flex justify-center mt-5"> <button id="logOutBTN" class="shadow-xs shadow-white/10 p-2 rounded-2xl">Cerrar sesion
</button> </div> ${renderScript($$result2, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/admin.astro?astro&type=script&index=0&lang.ts")} ` })}`;
}, "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/admin.astro", void 0);
const $$file = "/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/admin.astro";
const $$url = "/admin";

const _page = /*#__PURE__*/Object.freeze(/*#__PURE__*/Object.defineProperty({
  __proto__: null,
  default: $$Admin,
  file: $$file,
  prerender,
  url: $$url
}, Symbol.toStringTag, { value: 'Module' }));

const page = () => _page;

export { page };
