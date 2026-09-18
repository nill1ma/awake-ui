"use strict";
"use client";
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/toggle/index.tsx
var toggle_exports = {};
__export(toggle_exports, {
  Toggle: () => Toggle
});
module.exports = __toCommonJS(toggle_exports);
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Toggle({
  checked = false,
  onCheckedChange,
  disabled = false,
  className,
  ...props
}) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(
    "button",
    {
      type: "button",
      role: "switch",
      "aria-checked": checked,
      disabled,
      onClick: () => onCheckedChange?.(!checked),
      className: (0, import_clsx.clsx)(
        "toggle-switch",
        checked && "toggle-switch--checked",
        disabled && "toggle-switch--disabled",
        className
      ),
      ...props,
      children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "toggle-switch-thumb" })
    }
  );
}
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Toggle
});
//# sourceMappingURL=toggle.cjs.map