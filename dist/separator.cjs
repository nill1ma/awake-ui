"use strict";
"use client";
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

// src/separator/index.tsx
var separator_exports = {};
__export(separator_exports, {
  Separator: () => Separator
});
module.exports = __toCommonJS(separator_exports);
var import_separator = require("@base-ui/react/separator");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Separator({ orientation = "horizontal", className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_separator.Separator, { orientation, className: (0, import_clsx.clsx)("woken-separator", className), ...props });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Separator
});
//# sourceMappingURL=separator.cjs.map