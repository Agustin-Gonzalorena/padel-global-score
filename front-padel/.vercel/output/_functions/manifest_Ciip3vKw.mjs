import 'kleur/colors';
import { p as decodeKey } from './chunks/astro/server_Dio6Ocm8.mjs';
import 'clsx';
import 'cookie';
import { N as NOOP_MIDDLEWARE_FN } from './chunks/astro-designed-error-pages_HEJGdg2F.mjs';
import 'es-module-lexer';

function sanitizeParams(params) {
  return Object.fromEntries(
    Object.entries(params).map(([key, value]) => {
      if (typeof value === "string") {
        return [key, value.normalize().replace(/#/g, "%23").replace(/\?/g, "%3F")];
      }
      return [key, value];
    })
  );
}
function getParameter(part, params) {
  if (part.spread) {
    return params[part.content.slice(3)] || "";
  }
  if (part.dynamic) {
    if (!params[part.content]) {
      throw new TypeError(`Missing parameter: ${part.content}`);
    }
    return params[part.content];
  }
  return part.content.normalize().replace(/\?/g, "%3F").replace(/#/g, "%23").replace(/%5B/g, "[").replace(/%5D/g, "]");
}
function getSegment(segment, params) {
  const segmentPath = segment.map((part) => getParameter(part, params)).join("");
  return segmentPath ? "/" + segmentPath : "";
}
function getRouteGenerator(segments, addTrailingSlash) {
  return (params) => {
    const sanitizedParams = sanitizeParams(params);
    let trailing = "";
    if (addTrailingSlash === "always" && segments.length) {
      trailing = "/";
    }
    const path = segments.map((segment) => getSegment(segment, sanitizedParams)).join("") + trailing;
    return path || "/";
  };
}

function deserializeRouteData(rawRouteData) {
  return {
    route: rawRouteData.route,
    type: rawRouteData.type,
    pattern: new RegExp(rawRouteData.pattern),
    params: rawRouteData.params,
    component: rawRouteData.component,
    generate: getRouteGenerator(rawRouteData.segments, rawRouteData._meta.trailingSlash),
    pathname: rawRouteData.pathname || void 0,
    segments: rawRouteData.segments,
    prerender: rawRouteData.prerender,
    redirect: rawRouteData.redirect,
    redirectRoute: rawRouteData.redirectRoute ? deserializeRouteData(rawRouteData.redirectRoute) : void 0,
    fallbackRoutes: rawRouteData.fallbackRoutes.map((fallback) => {
      return deserializeRouteData(fallback);
    }),
    isIndex: rawRouteData.isIndex,
    origin: rawRouteData.origin
  };
}

function deserializeManifest(serializedManifest) {
  const routes = [];
  for (const serializedRoute of serializedManifest.routes) {
    routes.push({
      ...serializedRoute,
      routeData: deserializeRouteData(serializedRoute.routeData)
    });
    const route = serializedRoute;
    route.routeData = deserializeRouteData(serializedRoute.routeData);
  }
  const assets = new Set(serializedManifest.assets);
  const componentMetadata = new Map(serializedManifest.componentMetadata);
  const inlinedScripts = new Map(serializedManifest.inlinedScripts);
  const clientDirectives = new Map(serializedManifest.clientDirectives);
  const serverIslandNameMap = new Map(serializedManifest.serverIslandNameMap);
  const key = decodeKey(serializedManifest.key);
  return {
    // in case user middleware exists, this no-op middleware will be reassigned (see plugin-ssr.ts)
    middleware() {
      return { onRequest: NOOP_MIDDLEWARE_FN };
    },
    ...serializedManifest,
    assets,
    componentMetadata,
    inlinedScripts,
    clientDirectives,
    routes,
    serverIslandNameMap,
    key
  };
}

const manifest = deserializeManifest({"hrefRoot":"file:///home/agus/Documents/Projects/padel-global-score/front-padel/","cacheDir":"file:///home/agus/Documents/Projects/padel-global-score/front-padel/node_modules/.astro/","outDir":"file:///home/agus/Documents/Projects/padel-global-score/front-padel/dist/","srcDir":"file:///home/agus/Documents/Projects/padel-global-score/front-padel/src/","publicDir":"file:///home/agus/Documents/Projects/padel-global-score/front-padel/public/","buildClientDir":"file:///home/agus/Documents/Projects/padel-global-score/front-padel/dist/client/","buildServerDir":"file:///home/agus/Documents/Projects/padel-global-score/front-padel/dist/server/","adapterName":"@astrojs/vercel","routes":[{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"page","component":"_server-islands.astro","params":["name"],"segments":[[{"content":"_server-islands","dynamic":false,"spread":false}],[{"content":"name","dynamic":true,"spread":false}]],"pattern":"^\\/_server-islands\\/([^/]+?)\\/?$","prerender":false,"isIndex":false,"fallbackRoutes":[],"route":"/_server-islands/[name]","origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[],"routeData":{"type":"endpoint","isIndex":false,"route":"/_image","pattern":"^\\/_image\\/?$","segments":[[{"content":"_image","dynamic":false,"spread":false}]],"params":[],"component":"node_modules/astro/dist/assets/endpoint/generic.js","pathname":"/_image","prerender":false,"fallbackRoutes":[],"origin":"internal","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.-BdLFpnZ.css"}],"routeData":{"route":"/admin","isIndex":false,"type":"page","pattern":"^\\/admin\\/?$","segments":[[{"content":"admin","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/admin.astro","pathname":"/admin","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.-BdLFpnZ.css"}],"routeData":{"route":"/error","isIndex":false,"type":"page","pattern":"^\\/error\\/?$","segments":[[{"content":"error","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/error.astro","pathname":"/error","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.-BdLFpnZ.css"}],"routeData":{"route":"/history","isIndex":false,"type":"page","pattern":"^\\/history\\/?$","segments":[[{"content":"history","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/history.astro","pathname":"/history","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.-BdLFpnZ.css"}],"routeData":{"route":"/login","isIndex":false,"type":"page","pattern":"^\\/login\\/?$","segments":[[{"content":"login","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/login.astro","pathname":"/login","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.-BdLFpnZ.css"}],"routeData":{"route":"/players","isIndex":false,"type":"page","pattern":"^\\/players\\/?$","segments":[[{"content":"players","dynamic":false,"spread":false}]],"params":[],"component":"src/pages/players.astro","pathname":"/players","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}},{"file":"","links":[],"scripts":[],"styles":[{"type":"external","src":"/_astro/admin.-BdLFpnZ.css"}],"routeData":{"route":"/","isIndex":true,"type":"page","pattern":"^\\/$","segments":[],"params":[],"component":"src/pages/index.astro","pathname":"/","prerender":false,"fallbackRoutes":[],"distURL":[],"origin":"project","_meta":{"trailingSlash":"ignore"}}}],"base":"/","trailingSlash":"ignore","compressHTML":true,"componentMetadata":[["/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/admin.astro",{"propagation":"none","containsHead":true}],["/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/error.astro",{"propagation":"none","containsHead":true}],["/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/history.astro",{"propagation":"none","containsHead":true}],["/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/index.astro",{"propagation":"none","containsHead":true}],["/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/login.astro",{"propagation":"none","containsHead":true}],["/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/players.astro",{"propagation":"none","containsHead":true}]],"renderers":[],"clientDirectives":[["idle","(()=>{var l=(n,t)=>{let i=async()=>{await(await n())()},e=typeof t.value==\"object\"?t.value:void 0,s={timeout:e==null?void 0:e.timeout};\"requestIdleCallback\"in window?window.requestIdleCallback(i,s):setTimeout(i,s.timeout||200)};(self.Astro||(self.Astro={})).idle=l;window.dispatchEvent(new Event(\"astro:idle\"));})();"],["load","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).load=e;window.dispatchEvent(new Event(\"astro:load\"));})();"],["media","(()=>{var n=(a,t)=>{let i=async()=>{await(await a())()};if(t.value){let e=matchMedia(t.value);e.matches?i():e.addEventListener(\"change\",i,{once:!0})}};(self.Astro||(self.Astro={})).media=n;window.dispatchEvent(new Event(\"astro:media\"));})();"],["only","(()=>{var e=async t=>{await(await t())()};(self.Astro||(self.Astro={})).only=e;window.dispatchEvent(new Event(\"astro:only\"));})();"],["visible","(()=>{var a=(s,i,o)=>{let r=async()=>{await(await s())()},t=typeof i.value==\"object\"?i.value:void 0,c={rootMargin:t==null?void 0:t.rootMargin},n=new IntersectionObserver(e=>{for(let l of e)if(l.isIntersecting){n.disconnect(),r();break}},c);for(let e of o.children)n.observe(e)};(self.Astro||(self.Astro={})).visible=a;window.dispatchEvent(new Event(\"astro:visible\"));})();"]],"entryModules":{"\u0000noop-middleware":"_noop-middleware.mjs","\u0000noop-actions":"_noop-actions.mjs","\u0000@astro-page:src/pages/admin@_@astro":"pages/admin.astro.mjs","\u0000@astro-page:src/pages/error@_@astro":"pages/error.astro.mjs","\u0000@astro-page:src/pages/history@_@astro":"pages/history.astro.mjs","\u0000@astro-page:src/pages/login@_@astro":"pages/login.astro.mjs","\u0000@astro-page:src/pages/players@_@astro":"pages/players.astro.mjs","\u0000@astro-page:src/pages/index@_@astro":"pages/index.astro.mjs","\u0000@astrojs-ssr-virtual-entry":"entry.mjs","\u0000@astro-renderers":"renderers.mjs","\u0000@astro-page:node_modules/astro/dist/assets/endpoint/generic@_@js":"pages/_image.astro.mjs","\u0000@astrojs-ssr-adapter":"_@astrojs-ssr-adapter.mjs","\u0000@astrojs-manifest":"manifest_Ciip3vKw.mjs","/home/agus/Documents/Projects/padel-global-score/front-padel/node_modules/astro/dist/assets/services/sharp.js":"chunks/sharp_BykjOuBd.mjs","/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/react/FormLogin.jsx":"_astro/FormLogin.BCigBTaP.js","/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/react/FormCreateMatch":"_astro/FormCreateMatch.BOqU9sN8.js","/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/react/FormFinishMatch.jsx":"_astro/FormFinishMatch.CZtPTWJ2.js","/home/agus/Documents/Projects/padel-global-score/front-padel/src/components/react/BoxHistory":"_astro/BoxHistory.DOfBLlcC.js","@astrojs/react/client.js":"_astro/client.B_PwMJWB.js","/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/admin.astro?astro&type=script&index=0&lang.ts":"_astro/admin.astro_astro_type_script_index_0_lang.BoGHZcGb.js","astro:scripts/before-hydration.js":""},"inlinedScripts":[["/home/agus/Documents/Projects/padel-global-score/front-padel/src/pages/admin.astro?astro&type=script&index=0&lang.ts","const o=document.getElementById(\"logOutBTN\");o.addEventListener(\"click\",t);function t(){document.cookie=\"token=; expires=Thu, 01 Jan 1970 00:00:00 UTC; path=/;\",window.location.href=\"/login\"}"]],"assets":["/_astro/admin.-BdLFpnZ.css","/favicon.ico","/fede.png","/papusax.png","/rappa.png","/stagol.png","/teamA.webp","/teamB.webp","/_astro/BoxHistory.DOfBLlcC.js","/_astro/FormCreateMatch.BOqU9sN8.js","/_astro/FormFinishMatch.CZtPTWJ2.js","/_astro/FormLogin.BCigBTaP.js","/_astro/client.B_PwMJWB.js","/_astro/index.Be8AcK8B.js","/_astro/jsx-runtime.D_zvdyIk.js"],"buildFormat":"directory","checkOrigin":true,"allowedDomains":[],"serverIslandNameMap":[],"key":"CHZ6McnuU+3i/AjJkQAvfhy1e89ZEN9/UbgaIOkJULs="});
if (manifest.sessionConfig) manifest.sessionConfig.driverModule = null;

export { manifest };
