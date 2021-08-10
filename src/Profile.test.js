import React from "react";
import { render } from "@testing-library/react";
import Profile from "./Profile";

describe("<Profile />", () => {
  it("matches snapshot", () => {
    const utils = render(<Profile username="jeongwonHan" name="한정원" />);
    expect(utils.container).toMatchSnapshot();
  });
  it("shows the props correctly", () => {
    const utils = render(<Profile username="jeongwonHan" name="한정원" />);
    utils.getByText("jeongwonHan");
    utils.getByText("한정원");
    utils.getByText(/한/);
  });
});
