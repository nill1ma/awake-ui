// src/loading/index.tsx
import { clsx } from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
function Loading() {
  return /* @__PURE__ */ jsx("div", { className: clsx("loading-container"), children: /* @__PURE__ */ jsxs("div", { className: clsx("loading-dots"), children: [
    /* @__PURE__ */ jsx("span", { className: clsx("dot") }),
    /* @__PURE__ */ jsx("span", { className: clsx("dot") }),
    /* @__PURE__ */ jsx("span", { className: clsx("dot") })
  ] }) });
}
export {
  Loading
};
//# sourceMappingURL=loading.js.map