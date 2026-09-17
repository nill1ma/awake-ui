// src/button/index.tsx
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Button({ children, variant = "primary", className, onClick, ...props }) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      ...props,
      onClick,
      className: clsx("awake-button", `awake-button--${variant}`, className),
      children
    }
  );
}

export {
  Button
};
//# sourceMappingURL=chunk-MN4SY234.js.map