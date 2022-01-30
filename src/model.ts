/** @internal */
interface CdkElement<Type, Props = unknown> {
  type: Type;
  props: Props;
  key: string | number | null;
}

/** @internal */
/* eslint-disable-next-line @typescript-eslint/no-explicit-any */
export type CdkFunctionElement<Props = any> = CdkElement<
  Component<Props>,
  Props
>;

/** Nil types that get ignored. */
export type CdkNil = false | null | undefined;

/** Internal representation of constructs. */
export type CdkNode<Props = unknown> = CdkFunctionElement<Props> | CdkNil;

/** Nested constructs type. */
export type CdkChildren = CdkNode | CdkChildren[];

/** Helper type for creating Elements that accept other constructs as children. */
export type PropsWithChildren<AdditionalProps = unknown> = AdditionalProps & {
  children?: CdkChildren;
};

/** A functional component that creates constructs. */
export type Component<ComponentProps = unknown> = (
  props: ComponentProps
) => CdkNode | null;
