"use client";

// src/tooltip/index.tsx
import { Tooltip as BaseUITooltip } from "@base-ui/react/tooltip";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Provider(props) {
  return /* @__PURE__ */ jsx(BaseUITooltip.Provider, { ...props });
}
function Root(props) {
  return /* @__PURE__ */ jsx(BaseUITooltip.Root, { ...props });
}
function Trigger(props) {
  return /* @__PURE__ */ jsx(BaseUITooltip.Trigger, { ...props, className: clsx("awake-tooltip-trigger", props.className) });
}
function Positioner(props) {
  return /* @__PURE__ */ jsx(BaseUITooltip.Positioner, { ...props, className: clsx("awake-tooltip-positioner", props.className) });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseUITooltip.Portal, { ...props });
}
function Popup(props) {
  return /* @__PURE__ */ jsx(BaseUITooltip.Popup, { ...props, className: clsx("awake-tooltip-popup", props.className) });
}
function Arrow(props) {
  return /* @__PURE__ */ jsx(BaseUITooltip.Arrow, { ...props, className: clsx("awake-tooltip-arrow", props.className) });
}
function Viewport(props) {
  return /* @__PURE__ */ jsx(BaseUITooltip.Viewport, { ...props });
}
var Tooltip = {
  Provider,
  Root,
  Trigger,
  Positioner,
  Portal,
  Popup,
  Arrow,
  Viewport
};
export {
  Tooltip
};
//# sourceMappingURL=tooltip.js.map