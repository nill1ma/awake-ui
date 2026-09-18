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

// src/tooltip/index.tsx
var tooltip_exports = {};
__export(tooltip_exports, {
  Tooltip: () => Tooltip
});
module.exports = __toCommonJS(tooltip_exports);
var import_tooltip = require("@base-ui/react/tooltip");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Provider(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.Tooltip.Provider, { ...props });
}
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.Tooltip.Root, { ...props });
}
function Trigger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.Tooltip.Trigger, { ...props, className: (0, import_clsx.clsx)("tooltip-trigger", props.className) });
}
function Positioner(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.Tooltip.Positioner, { ...props, className: (0, import_clsx.clsx)("tooltip-positioner", props.className) });
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.Tooltip.Portal, { ...props });
}
function Popup(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.Tooltip.Popup, { ...props, className: (0, import_clsx.clsx)("tooltip-popup", props.className) });
}
function Arrow(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.Tooltip.Arrow, { ...props, className: (0, import_clsx.clsx)("tooltip-arrow", props.className) });
}
function Viewport(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_tooltip.Tooltip.Viewport, { ...props });
}
var Tooltip = {
  Provider,
  Root,
  Trigger,
  Positioner,
  Portal,
  Popup,
  Arrow,
  Viewport
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Tooltip
});
//# sourceMappingURL=tooltip.cjs.map