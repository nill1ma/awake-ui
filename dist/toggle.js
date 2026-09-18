"use client";

// src/toggle/index.tsx
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Toggle({
  checked = false,
  onCheckedChange,
  disabled = false,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      disabled,
      onClick: () => onCheckedChange?.(!checked),
      className: clsx(
        "toggle-switch",
        checked && "toggle-switch--checked",
        disabled && "toggle-switch--disabled",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx("span", { className: "toggle-switch-thumb" })
    }
  );
}
export {
  Toggle
};
//# sourceMappingURL=toggle.js.map