import React from "react";
import { fireEvent, render } from "@testing-library/react";
import TodoForm from "./TodoForm";

describe("<TodoForm/>", () => {
  const setup = (props = {}) => {
    const utils = render(<TodoForm {...props} />);
    const { getByText, getByPlaceholderText } = utils;
    const input = getByPlaceholderText("할 일을 입력하세요");
    const button = getByText("등록");
    return {
      ...utils,
      input,
      button,
    };
  };
  it("has input and a button", () => {
    const { input, button } = setup();
    expect(input).toBeTruthy();
    expect(button).toBeTruthy();
  });

  it("changes input", () => {
    const { input } = setup();
    fireEvent.change(input, {
      target: {
        value: "TDD배우기",
      },
    });
    expect(input).toHaveAttribute("value", "TDD배우기");
  });
  it("calls onInsert and clears input", () => {
    const onInsert = jest.fn(); //jest의 MOCK함수
    const { input, button } = setup({ onInsert });
    fireEvent.change(input, {
      target: {
        value: "TDD배우기",
      },
    });
    fireEvent.click(button);
    expect(onInsert).toBeCalledWith("TDD배우기"); //matcher를 사용해서 함수가 호출됐는지, 어떤 파라미터로 호출됐는지 확인 가능
    expect(input).toHaveAttribute("value", "");
  });
});
