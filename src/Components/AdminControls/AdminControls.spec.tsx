import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import AdminControls from "./AdminControls";

describe("Admin Controls ", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly", () => {
    const AdminControlsWrapper = renderer.create(<AdminControls />).toJSON();
    expect(AdminControlsWrapper).toMatchSnapshot();
  });

  it("renders  1 input element", () => {
    const testRenderer = renderer.create(<AdminControls />);
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType("input").length).toEqual(1);
  });

  it("renders  1 button element", () => {
    const testRenderer = renderer.create(<AdminControls />);
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType("button").length).toEqual(1);
  });

  it("has all the correct text", () => {
    render(<AdminControls />);
    expect(screen.getByText("Username to delete")).toBeTruthy();
    expect(screen.getByText("Delete User")).toBeTruthy();
  });
});
