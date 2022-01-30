import { App } from "aws-cdk-lib";
import { Construct } from "constructs";
import { cdkConstructType, CdkNode } from "./model";

/** @internal */
function compileNode(node: CdkNode, scope: Construct) {
  if (!node) {
    return;
  }
  if (node.type === cdkConstructType) {
    return;
  }
  const { children, ...props } = node.props;
  const {
    props: { children: newScope },
  } = node.type(props, { scope });
  if (!children) {
    return;
  }
  children.forEach((node) => compileNode(node, newScope));
}

export function attachToApp(node: CdkNode, app: App) {
  compileNode(node, app);
}
