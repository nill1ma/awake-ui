// src/button/index.tsx
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Button({ children, variant = "primary", className, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      className: clsx("awake-button", `awake-button--${variant}`, className),
      children
    }
  );
}

export {
  Button
};
//# sourceMappingURL=chunk-X4DR53Q7.js.map