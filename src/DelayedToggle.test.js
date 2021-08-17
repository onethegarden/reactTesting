import React from "react";
import DelayedToggle from "./DelayedToggle";
import {
  render,
  fireEvent,
  waitFor,
  waitForElementToBeRemoved,
  queryByText,
} from "@testing-library/react";

describe("<DelayedToggle />", () => {
  it("reveals text when toggle is ON", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await waitFor(() => getByText("야호!!"), { timeout: 3000 });
  });

  it("toggles text ON/OFF", async () => {
    const { getByText } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    const text = await waitFor(() => getByText("ON"));
    expect(text).toHaveTextContent("ON");
  });
  it("changes something when button is clicked", async () => {
    const { getByText, container } = render(<DelayedToggle />);
    const toggleButton = getByText("토글");
    fireEvent.click(toggleButton);
    await waitFor(() => expect(getByText("야호!!")).toBeInTheDocument());
  });
});
