"use client";

// src/select/index.tsx
import { Select as BaseUISelect } from "@base-ui/react/select";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Root, { ...props });
}
function Label(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Label, { ...props, className: clsx("select-label", props.className) });
}
function Trigger(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Trigger, { ...props, className: clsx("select-trigger", props.className) });
}
function Value(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Value, { ...props, className: clsx("select-value", props.className) });
}
function Icon(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Icon, { ...props, className: clsx("select-icon", props.className) });
}
function Portal(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Portal, { ...props });
}
function Positioner(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Positioner, { ...props, className: clsx("select-positioner", props.className) });
}
function Popup(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Popup, { ...props, className: clsx("select-popup", props.className) });
}
function List(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.List, { ...props, className: clsx("select-list", props.className) });
}
function Item(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Item, { ...props, className: clsx("select-item", props.className) });
}
function ItemText(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.ItemText, { ...props, className: clsx("select-item-text", props.className) });
}
function ItemIndicator(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.ItemIndicator, { ...props, className: clsx("select-item-indicator", props.className) });
}
function Backdrop(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Backdrop, { ...props, className: clsx("select-backdrop", props.className) });
}
function Arrow(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Arrow, { ...props, className: clsx("select-arrow", props.className) });
}
function ScrollUpArrow(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.ScrollUpArrow, { ...props, className: clsx("select-scroll-arrow", props.className) });
}
function ScrollDownArrow(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.ScrollDownArrow, { ...props, className: clsx("select-scroll-arrow", props.className) });
}
function Separator(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Separator, { ...props, className: clsx("select-separator", props.className) });
}
function Group(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.Group, { ...props, className: clsx("select-group", props.className) });
}
function GroupLabel(props) {
  return /* @__PURE__ */ jsx(BaseUISelect.GroupLabel, { ...props, className: clsx("select-group-label", props.className) });
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