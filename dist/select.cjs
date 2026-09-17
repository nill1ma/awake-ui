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

// src/select/index.tsx
var select_exports = {};
__export(select_exports, {
  Select: () => Select
});
module.exports = __toCommonJS(select_exports);
var import_select = require("@base-ui/react/select");
var import_clsx = require("clsx");
var import_jsx_runtime = require("react/jsx-runtime");
function Root(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Root, { ...props });
}
function Label(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Label, { ...props, className: (0, import_clsx.clsx)("select-label", props.className) });
}
function Trigger(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Trigger, { ...props, className: (0, import_clsx.clsx)("select-trigger", props.className) });
}
function Value(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Value, { ...props, className: (0, import_clsx.clsx)("select-value", props.className) });
}
function Icon(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Icon, { ...props, className: (0, import_clsx.clsx)("select-icon", props.className) });
}
function Portal(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Portal, { ...props });
}
function Positioner(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Positioner, { ...props, className: (0, import_clsx.clsx)("select-positioner", props.className) });
}
function Popup(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Popup, { ...props, className: (0, import_clsx.clsx)("select-popup", props.className) });
}
function List(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.List, { ...props, className: (0, import_clsx.clsx)("select-list", props.className) });
}
function Item(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Item, { ...props, className: (0, import_clsx.clsx)("select-item", props.className) });
}
function ItemText(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.ItemText, { ...props, className: (0, import_clsx.clsx)("select-item-text", props.className) });
}
function ItemIndicator(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.ItemIndicator, { ...props, className: (0, import_clsx.clsx)("select-item-indicator", props.className) });
}
function Backdrop(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Backdrop, { ...props, className: (0, import_clsx.clsx)("select-backdrop", props.className) });
}
function Arrow(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Arrow, { ...props, className: (0, import_clsx.clsx)("select-arrow", props.className) });
}
function ScrollUpArrow(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.ScrollUpArrow, { ...props, className: (0, import_clsx.clsx)("select-scroll-arrow", props.className) });
}
function ScrollDownArrow(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.ScrollDownArrow, { ...props, className: (0, import_clsx.clsx)("select-scroll-arrow", props.className) });
}
function Separator(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Separator, { ...props, className: (0, import_clsx.clsx)("select-separator", props.className) });
}
function Group(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.Group, { ...props, className: (0, import_clsx.clsx)("select-group", props.className) });
}
function GroupLabel(props) {
  return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(import_select.Select.GroupLabel, { ...props, className: (0, import_clsx.clsx)("select-group-label", props.className) });
}
var Select = {
  Root,
  Label,
  Trigger,
  Value,
  Icon,
  Portal,
  Positioner,
  Popup,
  List,
  Item,
  ItemText,
  ItemIndicator,
  Backdrop,
  Arrow,
  ScrollUpArrow,
  ScrollDownArrow,
  Separator,
  Group,
  GroupLabel
};
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  Select
});
//# sourceMappingURL=select.cjs.map