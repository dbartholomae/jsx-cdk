import { Construct } from "constructs";

/** @internal */
export const cdkConstructType = "cdkConstruct" as const;

/** @internal */
interface CdkBaseElement<Type, Props extends {} = {}> {
  type: Type;
  props: Props;
  key: string | number | null;
}

/** @internal */
export type CdkFunctionElement<ComponentProps = {}> = CdkBaseElement<
  Component<ComponentProps>,
  ComponentProps & { children?: CdkNode[] }
>;

/** @internal */
type CdkConstructElement = CdkBaseElement<
  typeof cdkConstructType,
  { children: Construct }
>;

/** @internal */
type CdkElement = CdkFunctionElement | CdkConstructElement;

/** Nil types that get ignored. */
export type CdkNil = false | null | undefined;

/** Internal representation of constructs. */
export type CdkNode = CdkElement | CdkNil;

export type CdkChildren = CdkElement | CdkChildren[];

/** A functional component that creates constructs. */
export type Component<ComponentProps = unknown> = (
  props: ComponentProps,
  context: { scope: Construct }
) => CdkConstructElement;

/** @internal */
/* eslint-disable-next-line @typescript-eslint/no-unused-vars */
declare global {
  /* eslint-disable-next-line @typescript-eslint/no-namespace */
  namespace JSX {
    /* eslint-disable-next-line @typescript-eslint/no-unused-vars */
    interface IntrinsicElements {
      cdkConstruct: {
        /* eslint-disable-next-line @typescript-eslint/no-explicit-any */
        children?: Construct;
      };
    }
  }
}
