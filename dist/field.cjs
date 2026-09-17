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

// src/field/index.tsx
var field_exports = {};
__export(field_exports, {
  Field: () => Field
});
module.exports = __toCommonJS(field_exports);
var import_field = require("@base-ui/react/field");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_field.Field.Root, { ...props, className: (0, import_clsx.clsx)("field-root", props.className) });
}
function Label(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_field.Field.Label, { ...props, className: (0, import_clsx.clsx)("field-label", props.className) });
}
function Control(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_field.Field.Control, { ...props, className: (0, import_clsx.clsx)("field-control", props.className) });
}
var Field = { Root, Label, Control };
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Field
});
//# sourceMappingURL=field.cjs.map