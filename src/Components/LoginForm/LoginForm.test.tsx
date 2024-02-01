import React from "react";
import LoginForm from "./LoginForm";

import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";

describe("LoginForm  ", () => {
  it("renders correctly", () => {
    const ApiButtonsWrapper = renderer.create(<LoginForm />).toJSON();
    expect(ApiButtonsWrapper).toMatchSnapshot();
  });

  it("renders all expected elements", () => {
    const testRenderer = renderer.create(<LoginForm />);
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType("input").length).toEqual(3);
    expect(testInstance.findAllByType("label").length).toEqual(3);
    expect(testInstance.findAllByType("h1").length).toEqual(1);
  });

  it("has all the correct text", () => {
    render(<LoginForm />);
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByText("Username")).toBeTruthy();
    expect(screen.getByText("Password")).toBeTruthy();
    expect(screen.getByLabelText("Submit button")).toBeTruthy();
  });
});
