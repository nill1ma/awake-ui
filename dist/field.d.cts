import * as react from 'react';
import { ComponentProps } from 'react';
import { Field as Field$1 } from '@base-ui/react/field';

declare function Root(props: ComponentProps<typeof Field$1.Root>): react.JSX.Element;
declare function Label(props: ComponentProps<typeof Field$1.Label>): react.JSX.Element;
declare function Control(props: ComponentProps<typeof Field$1.Control>): react.JSX.Element;
declare const Field: {
    Root: typeof Root;
    Label: typeof Label;
    Control: typeof Control;
};

export { Field };
