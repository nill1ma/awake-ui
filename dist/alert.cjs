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

// src/alert/index.tsx
var alert_exports = {};
__export(alert_exports, {
  Alert: () => Alert
});
module.exports = __toCommonJS(alert_exports);
var import_jsx_runtime = require("react/jsx-runtime");
function Alert({ children, variant = "info" }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: `alert alert--${variant}`, children });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Alert
});
//# sourceMappingURL=alert.cjs.map