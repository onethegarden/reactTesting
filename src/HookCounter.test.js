import React from "react";
import { mount } from "enzyme";
import HookCounter from "./HookCounter";

/*
 Hooks 를 사용하는 경우 꼭 shallow 가 아닌 mount 를 사용해야 한다.
useEffect Hook 은 shallow 에서 작동하지 않고, 버튼 엘리먼트에 연결되어있는 함수가 이전 함수를 가르키고 있기 때문에, 변경된 값이 아닌 이전 값을 리턴한다.
*/

describe("<HookCounter/>", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<HookCounter />);
    let plusButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "+1"
    );
    plusButton.simulate("click");
    plusButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("2");
  });
  it("decreases", () => {
    const wrapper = mount(<HookCounter />);
    let decreaseButton = wrapper.findWhere(
      (node) => node.type() === "button" && node.text() === "-1"
    );
    decreaseButton.simulate("click");
    decreaseButton.simulate("click");

    const number = wrapper.find("h2");

    expect(number.text()).toBe("-2");
  });
});
