/* @jsx h */
import h from "..";
import {
  Queue as CdkQueue,
  QueueProps as CdkQueueProps,
} from "aws-cdk-lib/aws-sqs";
import { Construct } from "constructs";

interface QueueProps extends CdkQueueProps {
  key: string;
}

interface Context {
  scope: Construct;
}

export function Queue(props: QueueProps, { scope }: Context) {
  const queue = new CdkQueue(scope, props.key, props);
  return <cdkConstruct>{queue}</cdkConstruct>;
}
