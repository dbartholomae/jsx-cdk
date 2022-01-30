/* @jsx h */
import h, { CdkNode } from "..";
import { Stack as CdkStack, StackProps as CdkStackProps } from "aws-cdk-lib";
import { Construct } from "constructs";

interface StackProps extends CdkStackProps {
  key: string;
  children: CdkNode | CdkNode[];
}

interface Context {
  scope: Construct;
}

export function Stack(props: StackProps, { scope }: Context) {
  const stack = new CdkStack(scope, props.key, props);
  return <cdkConstruct>{stack}</cdkConstruct>;
}
