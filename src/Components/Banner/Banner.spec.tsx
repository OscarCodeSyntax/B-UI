import React from "react";
import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import Banner from "./Banner";

describe("Banner ", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly", () => {
    const BannerWrapper = renderer.create(<Banner />).toJSON();
    expect(BannerWrapper).toMatchSnapshot();
  });

  it("renders 4 div element", () => {
    const testRenderer = renderer.create(<Banner />);
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType("div").length).toEqual(7);
  });

  it("has all the correct text", () => {
    render(<Banner />);
    expect(screen.getByText("B//APP")).toBeTruthy();
    expect(screen.getByText("Basic UI and DataService")).toBeTruthy();
  });
});
