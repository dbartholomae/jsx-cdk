/**
 * @packageDocumentation
 * @internal
 */
import { Component, CdkNode, CdkChildren } from "./model";

export function createElement(
  component: Component,
  attributes: Record<string, unknown> | null,
  ...children: CdkChildren[]
): CdkNode;
export function createElement(
  typeOrComponent: string | Component,
  attributes: Record<string, unknown> | null,
  ...children: CdkChildren[] | Promise<CdkChildren>[]
): CdkNode {
  if (typeof typeOrComponent === "function") {
    return createComponentElement(
      typeOrComponent as Component,
      attributes,
      children as CdkNode[]
    );
  }

  throw new TypeError(
    `Unsupported lower-case element '${typeOrComponent}' encountered, please make sure all your components start with an upper-case letter and are functions.`
  );
}

function createComponentElement(
  component: Component,
  attributes: Record<string, unknown> | null,
  children: CdkNode[]
): CdkNode {
  return {
    type: component,
    props: {
      ...(attributes ?? {}),
      children: children.length <= 1 ? children[0] : children,
    },
    key: null,
  };
}
