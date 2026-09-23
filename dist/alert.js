// src/alert/index.tsx
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Alert({ children, variant = "info", className }) {
  return /* @__PURE__ */ jsx("div", { className: clsx("awake-alert", `awake-alert--${variant}`, className), children });
}
export {
  Alert
};
//# sourceMappingURL=alert.js.map