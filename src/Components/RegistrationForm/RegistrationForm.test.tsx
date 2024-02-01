import React from "react";

import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import RegistrationForm from "./RegistrationForm";

describe("LoginForm  ", () => {
  it("renders correctly", () => {
    const ApiButtonsWrapper = renderer.create(<RegistrationForm />).toJSON();
    expect(ApiButtonsWrapper).toMatchSnapshot();
  });

  it("renders all expected elements", () => {
    const testRenderer = renderer.create(<RegistrationForm />);
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType("input").length).toEqual(4);
    expect(testInstance.findAllByType("label").length).toEqual(4);
    expect(testInstance.findAllByType("h1").length).toEqual(1);
  });

  it("has all the correct text", () => {
    render(<RegistrationForm />);
    expect(screen.getByText("Registration")).toBeTruthy();
    expect(screen.getByText("Username")).toBeTruthy();
    expect(screen.getByText("Password")).toBeTruthy();
    expect(screen.getByText("Email")).toBeTruthy();
    expect(screen.getByLabelText("Submit button")).toBeTruthy();
  });
});
