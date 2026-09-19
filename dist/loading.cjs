"use strict";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/loading/index.tsx
var loading_exports = {};
__export(loading_exports, {
  Loading: () => Loading
});
module.exports = __toCommonJS(loading_exports);
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Loading() {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: (0, import_clsx.clsx)("awake-loading-container"), children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { className: (0, import_clsx.clsx)("awake-loading-dots"), children: [
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_clsx.clsx)("awake-loading-dot") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_clsx.clsx)("awake-loading-dot") }),
    /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: (0, import_clsx.clsx)("awake-loading-dot") })
  ] }) });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Loading
});
//# sourceMappingURL=loading.cjs.map