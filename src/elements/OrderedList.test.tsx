/* @jsx MD */
import MD, { Component, render } from "..";

import { OrderedList, Text } from ".";

type Props = { children: string };
describe("OrderedList", () => {
  it("wraps each child with a linebreak and a continuosly increasing number", async () => {
    expect(
      await render(
        <OrderedList>
          {"a"}
          {"b"}
          {"c"}
        </OrderedList>
      )
    ).toBe(`1. a
2. b
3. c
`);
  });

  it("wraps nested components", async () => {
    const TestComponent: Component<Props> = ({ children }) => (
      <Text>{children}</Text>
    );

    expect(
      await render(
        <OrderedList>
          <TestComponent>a</TestComponent>
          <TestComponent>b</TestComponent>
          <TestComponent>c</TestComponent>
        </OrderedList>
      )
    ).toBe(`1. a
2. b
3. c
`);
  });
});
