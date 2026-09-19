"use client";

// src/switch/index.tsx
import { Switch as BaseUISwitch } from "@base-ui/react/switch";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Switch({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUISwitch.Root, { className: clsx("awake-switch-root", className), ...props, children: /* @__PURE__ */ jsx(BaseUISwitch.Thumb, { className: "awake-switch-thumb" }) });
}
export {
  Switch
};
//# sourceMappingURL=switch.js.map