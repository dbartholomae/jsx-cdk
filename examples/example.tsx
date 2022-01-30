/* @jsx h */
import h, { attachToApp, Stack, Queue } from "jsx-cdk";
import { App, Duration, StackProps } from "aws-cdk-lib";

const CdkExampleStack = (props: StackProps) => {
  return (
    <Stack {...props}>
      <Queue key="CdkExampleQueue" visibilityTimeout={Duration.seconds(300)} />
    </Stack>
  );
};

void attachToApp(
  <CdkExampleStack
    env={{ account: "111111111", region: "eu-central-1" }}
    key="CdkExampleStack"
  />,
  new App()
);
