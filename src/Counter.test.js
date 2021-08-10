import React from "react";
import { shallow } from "enzyme";
import Counter from "./Counter";

describe("<Counter/>", () => {
  it("matches snapshot", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper).toMatchSnapshot();
  });
  it("has initial number", () => {
    const wrapper = shallow(<Counter />);
    expect(wrapper.state().number).toBe(0);
  });
  it("increase", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleIncrease();
    expect(wrapper.state().number).toBe(1);
  });
  it("decrease", () => {
    const wrapper = shallow(<Counter />);
    wrapper.instance().handleDecrease();
    expect(wrapper.state().number).toBe(-1);
  });
  //shallow 는 컴포넌트 내부에 다른 리액트 컴포넌트가 있다면 렌더링 하지 않음
});
