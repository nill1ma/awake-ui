"use client";

// src/separator/index.tsx
import { Separator as BaseUISeparator } from "@base-ui/react/separator";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Separator({ orientation = "horizontal", className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUISeparator, { orientation, className: clsx("woken-separator", className), ...props });
}
export {
  Separator
};
//# sourceMappingURL=separator.js.map