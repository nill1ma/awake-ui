"use client";

// src/dialog/index.tsx
import { Dialog as BaseUIDialog } from "@base-ui/react/dialog";
import { clsx } from "clsx";
import { jsx } from "react/jsx-runtime";
function Root(props) {
  return /* @__PURE__ */ jsx(BaseUIDialog.Root, { ...props });
}
function Trigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUIDialog.Trigger, { className: clsx("woken-dialog-trigger", className), ...props });
}
function Backdrop({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUIDialog.Backdrop, { className: clsx("woken-dialog-backdrop", className), ...props });
}
function Popup({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUIDialog.Popup, { className: clsx("woken-dialog-popup", className), ...props });
}
function Title({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUIDialog.Title, { className: clsx("woken-dialog-title", className), ...props });
}
function Description({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUIDialog.Description, { className: clsx("woken-dialog-description", className), ...props });
}
function Close({ className, ...props }) {
  return /* @__PURE__ */ jsx(BaseUIDialog.Close, { className: clsx("woken-dialog-close", className), ...props });
}
var Dialog = {
  Root,
  Trigger,
  Portal: BaseUIDialog.Portal,
  // não precisa de estilo próprio, só reexporta
  Backdrop,
  Popup,
  Title,
  Description,
  Close
};
export {
  Dialog
};
//# sourceMappingURL=dialog.js.map