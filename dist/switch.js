"use client";

// src/switch/index.tsx
import { Switch as BaseUISwitch } from "@base-ui/react/switch";
import { jsx } from "react/jsx-runtime";
function Switch({
  checked = false,
  onCheckedChange,
  disabled = false,
  className,
  ...props
}) {
  return (
    // <label className="flex items-center gap-2 text-sm font-normal text-neutral-950 dark:text-white">
    /* @__PURE__ */ jsx(
      BaseUISwitch.Root,
      {
        defaultChecked: true,
        className: "switch-root",
        children: /* @__PURE__ */ jsx(BaseUISwitch.Thumb, { className: "switch-thumb" })
      }
    )
  );
}
export {
  Switch
};
//# sourceMappingURL=switch.js.map