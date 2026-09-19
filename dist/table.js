"use client";

// src/table/index.tsx
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: "awake-table-wrapper", children: /* @__PURE__ */ jsx("table", { className: clsx("awake-table", className), ...props }) });
}
function Head({ className, ...props }) {
  return /* @__PURE__ */ jsx("thead", { className: clsx("awake-table-head", className), ...props });
}
function Body({ className, ...props }) {
  return /* @__PURE__ */ jsx("tbody", { className: clsx("awake-table-body", className), ...props });
}
function Row({ className, ...props }) {
  return /* @__PURE__ */ jsx("tr", { className: clsx("awake-table-row", className), ...props });
}
function HeaderCell({ className, ...props }) {
  return /* @__PURE__ */ jsx("th", { className: clsx("awake-table-header-cell", className), ...props });
}
function Cell({ className, ...props }) {
  return /* @__PURE__ */ jsx("td", { className: clsx("awake-table-cell", className), ...props });
}
var Table = { Root, Head, Body, Row, HeaderCell, Cell };
export {
  Table
};
//# sourceMappingURL=table.js.map