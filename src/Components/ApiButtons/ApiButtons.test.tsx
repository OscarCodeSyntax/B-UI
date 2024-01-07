import React from "react";
import ApiButtons from "./ApiButtons";
import renderer from "react-test-renderer";
import { fireEvent, render, screen } from "@testing-library/react";

describe("Api Buttons ", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly", () => {
    const ApiButtonsWrapper = renderer.create(<ApiButtons />).toJSON();
    expect(ApiButtonsWrapper).toMatchSnapshot();
  });

  it("renders 5 buttons elements", () => {
    const testRenderer = renderer.create(<ApiButtons />);
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType("button").length).toEqual(5);
  });

  it("has all the correct text", () => {
    render(<ApiButtons />);
    expect(screen.getByText("Create")).toBeTruthy();
    expect(screen.getByText("Delete By Id")).toBeTruthy();
    expect(screen.getByText("Update")).toBeTruthy();
    expect(screen.getByText("Find By Id")).toBeTruthy();
    expect(screen.getByText("Find All")).toBeTruthy();
  });

  it("display value should change after each click", () => {
    render(<ApiButtons />);
    expect(screen.getByText("Null")).toBeTruthy();

    fireEvent.click(screen.queryByText("Create"));
    expect(screen.findByText('create reached : "create"')).toBeTruthy();

    fireEvent.click(screen.queryByText("Delete By Id"));
    expect(screen.findByText("Deleted")).toBeTruthy();

    fireEvent.click(screen.queryByText("Find All"));
    expect(screen.findByText("Found All")).toBeTruthy();

    fireEvent.click(screen.queryByText("Find By Id"));
    expect(screen.findByText("get by Id reached : 1")).toBeTruthy();

    fireEvent.click(screen.queryByText("Update"));
    expect(screen.findByText("Updated")).toBeTruthy();
  });
});
