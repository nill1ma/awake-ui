"use client";

// src/select/index.tsx
import { Select as BaseUISelect } from "@base-ui/react/select";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Root, { ...props });
}
function Label(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Label, { ...props, className: clsx("awake-select-label", props.className) });
}
function Trigger(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Trigger, { ...props, className: clsx("awake-select-trigger", props.className) });
}
function Value(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Value, { ...props, className: clsx("awake-select-value", props.className) });
}
function Icon(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Icon, { ...props, className: clsx("awake-select-icon", props.className) });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Portal, { ...props });
}
function Positioner(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Positioner, { ...props, className: clsx("awake-select-positioner", props.className) });
}
function Popup(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Popup, { ...props, className: clsx("awake-select-popup", props.className) });
}
function List(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.List, { ...props, className: clsx("awake-select-list", props.className) });
}
function Item(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Item, { ...props, className: clsx("awake-select-item", props.className) });
}
function ItemText(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.ItemText, { ...props, className: clsx("awake-select-item-text", props.className) });
}
function ItemIndicator(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.ItemIndicator, { ...props, className: clsx("awake-select-item-indicator", props.className) });
}
function Backdrop(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Backdrop, { ...props, className: clsx("awake-select-backdrop", props.className) });
}
function Arrow(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Arrow, { ...props, className: clsx("awake-select-arrow", props.className) });
}
function ScrollUpArrow(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.ScrollUpArrow, { ...props, className: clsx("awake-select-scroll-arrow", props.className) });
}
function ScrollDownArrow(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.ScrollDownArrow, { ...props, className: clsx("awake-select-scroll-arrow", props.className) });
}
function Separator(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Separator, { ...props, className: clsx("awake-select-separator", props.className) });
}
function Group(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Group, { ...props, className: clsx("awake-select-group", props.className) });
}
function GroupLabel(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.GroupLabel, { ...props, className: clsx("awake-select-group-label", props.className) });
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
export {
  Select
};
//# sourceMappingURL=select.js.map