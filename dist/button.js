"use client";

// src/button/index.tsx
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Button({ children, variant = "primary", className, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: clsx("woken-button", `woken-button--${variant}`, className),
      children
    }
  );
}
export {
  Button
};
//# sourceMappingURL=button.js.map