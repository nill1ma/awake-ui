"use client";
import {
  Button
} from "./chunk-X4DR53Q7.js";

// src/pagination/index.tsx
import { clsx } from "clsx";
import { jsx, jsxs } from "react/jsx-runtime";
function Pagination({
  currentPage,
  totalPages,
  onPageChange,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    "nav",
    {
      "aria-label": "Pagina\xE7\xE3o",
      className: clsx("awake-pagination", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            disabled: currentPage <= 1,
            onClick: () => onPageChange(currentPage - 1),
            "aria-label": "P\xE1gina anterior",
            children: "Previous"
          }
        ),
        /* @__PURE__ */ jsxs("span", { className: "awake-pagination-info", children: [
          "Page ",
          currentPage,
          " of ",
          totalPages
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "secondary",
            disabled: currentPage >= totalPages,
            onClick: () => onPageChange(currentPage + 1),
            "aria-label": "Pr\xF3xima p\xE1gina",
            children: "Next"
          }
        )
      ]
    }
  );
}
export {
  Pagination
};
//# sourceMappingURL=pagination.js.map