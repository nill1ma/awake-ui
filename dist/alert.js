// src/alert/index.tsx
import { jsx } from "react/jsx-runtime";
function Alert({ children, variant = "info" }) {
  return /* @__PURE__ */ jsx("div", { className: `alert alert-${variant}`, children });
}
export {
  Alert
};
//# sourceMappingURL=alert.js.map