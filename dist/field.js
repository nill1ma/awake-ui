"use client";

// src/field/index.tsx
import { Field as BaseUIField } from "@base-ui/react/field";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseUIField.Root, { ...props, className: clsx("field-root", props.className) });
}
function Label(props) {
  return /* @__PURE__ */ jsx(BaseUIField.Label, { ...props, className: clsx("field-label", props.className) });
}
function Control(props) {
  return /* @__PURE__ */ jsx(BaseUIField.Control, { ...props, className: clsx("field-control", props.className) });
}
var Field = { Root, Label, Control };
export {
  Field
};
//# sourceMappingURL=field.js.map