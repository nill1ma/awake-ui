"use client";

// src/table/index.tsx
import clsx from "clsx";
import { jsx } from "react/jsx-runtime";
function Root({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { className: "table-wrapper", children: /* @__PURE__ */ jsx("table", { className: clsx("woken-table", className), ...props }) });
}
function Head({ className, ...props }) {
  return /* @__PURE__ */ jsx("thead", { className: clsx("table-head", className), ...props });
}
function Body({ className, ...props }) {
  return /* @__PURE__ */ jsx("tbody", { className: clsx("table-body", className), ...props });
}
function Row({ className, ...props }) {
  return /* @__PURE__ */ jsx("tr", { className: clsx("table-row", className), ...props });
}
function HeaderCell({ className, ...props }) {
  return /* @__PURE__ */ jsx("th", { className: clsx("table-header-cell", className), ...props });
}
function Cell({ className, ...props }) {
  return /* @__PURE__ */ jsx("td", { className: clsx("table-cell", className), ...props });
}
export {
  Body,
  Cell,
  Head,
  HeaderCell,
  Root,
  Row
};
//# sourceMappingURL=table.js.map