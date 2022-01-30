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
  const newNode = node.type(props, { scope });
  if (newNode.type !== cdkConstructType) {
    compileNode(newNode, scope);
  }
  if (!children) {
    return;
  }
  children.forEach((node) => compileNode(node, newNode.props.children));
}

export function attachToApp(node: CdkNode, app: App) {
  compileNode(node, app);
}
