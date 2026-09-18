import * as react from 'react';
import { ComponentProps } from 'react';
import { Tooltip as Tooltip$1 } from '@base-ui/react/tooltip';

declare function Provider(props: ComponentProps<typeof Tooltip$1.Provider>): react.JSX.Element;
declare function Root(props: ComponentProps<typeof Tooltip$1.Root>): react.JSX.Element;
declare function Trigger(props: ComponentProps<typeof Tooltip$1.Trigger>): react.JSX.Element;
declare function Positioner(props: ComponentProps<typeof Tooltip$1.Positioner>): react.JSX.Element;
declare function Portal(props: ComponentProps<typeof Tooltip$1.Portal>): react.JSX.Element;
declare function Popup(props: ComponentProps<typeof Tooltip$1.Popup>): react.JSX.Element;
declare function Arrow(props: ComponentProps<typeof Tooltip$1.Arrow>): react.JSX.Element;
declare function Viewport(props: ComponentProps<typeof Tooltip$1.Viewport>): react.JSX.Element;
declare const Tooltip: {
    Provider: typeof Provider;
    Root: typeof Root;
    Trigger: typeof Trigger;
    Positioner: typeof Positioner;
    Portal: typeof Portal;
    Popup: typeof Popup;
    Arrow: typeof Arrow;
    Viewport: typeof Viewport;
};

export { Tooltip };
