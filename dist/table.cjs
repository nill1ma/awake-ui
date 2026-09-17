"use strict";
"use client";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
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
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/table/index.tsx
var table_exports = {};
__export(table_exports, {
  Body: () => Body,
  Cell: () => Cell,
  Head: () => Head,
  HeaderCell: () => HeaderCell,
  Root: () => Root,
  Row: () => Row
});
module.exports = __toCommonJS(table_exports);
var import_clsx = __toESM(require("clsx"), 1);
var import_jsx_runtime = require("react/jsx-runtime");
function Root({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "table-wrapper", children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("table", { className: (0, import_clsx.default)("woken-table", className), ...props }) });
}
function Head({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("thead", { className: (0, import_clsx.default)("table-head", className), ...props });
}
function Body({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tbody", { className: (0, import_clsx.default)("table-body", className), ...props });
}
function Row({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("tr", { className: (0, import_clsx.default)("table-row", className), ...props });
}
function HeaderCell({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("th", { className: (0, import_clsx.default)("table-header-cell", className), ...props });
}
function Cell({ className, ...props }) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("td", { className: (0, import_clsx.default)("table-cell", className), ...props });
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Body,
  Cell,
  Head,
  HeaderCell,
  Root,
  Row
});
//# sourceMappingURL=table.cjs.map