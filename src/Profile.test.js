import React from "react";
import { mount } from "enzyme";
import Profile from "./Profile";

describe("<Profile/>", () => {
  it("matches snapshot", () => {
    const wrapper = mount(<Profile username="jeongwonHan" name="한정원" />);
    expect(wrapper).toMatchSnapshot();
  });
  it("renders username and name", () => {
    const wrapper = mount(<Profile username="jeongwonHan" name="한정원" />);
    expect(wrapper.props().username).toBe("jeongwonHan");
    expect(wrapper.props().name).toBe("한정원");

    const boldElement = wrapper.find("b");
    expect(boldElement.contains("jeongwonHan")).toBe(true);
    const spanElement = wrapper.find("span");
    expect(spanElement.text()).toBe("한정원");
  });
});
