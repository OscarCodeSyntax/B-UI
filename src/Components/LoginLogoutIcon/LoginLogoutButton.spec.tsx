import renderer from "react-test-renderer";
import { render, screen } from "@testing-library/react";
import LoginLogoutIcon from "./LoginLogoutIcon";

describe("LoginLogoutIcon ", () => {
  beforeEach(() => {
    jest.resetAllMocks();
  });

  it("renders correctly with true prop", () => {
    const LoginLogoutIconWrapper = renderer
      .create(LoginLogoutIcon("true"))
      .toJSON();
    expect(LoginLogoutIconWrapper).toMatchSnapshot();
  });

  it("renders correctly with false prop", () => {
    const LoginLogoutIconWrapper = renderer
      .create(LoginLogoutIcon("false"))
      .toJSON();
    expect(LoginLogoutIconWrapper).toMatchSnapshot();
  });

  it("renders correct link, icon and text when true", () => {
    const testRenderer = renderer.create(LoginLogoutIcon("true"));
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType("a").length).toEqual(1);
    expect(testInstance.findAllByType("svg").length).toEqual(1);
    expect(testInstance.findAllByType("div").length).toEqual(3);
  });

  it("renders correct link, icon and text when false", () => {
    const testRenderer = renderer.create(LoginLogoutIcon("false"));
    const testInstance = testRenderer.root;

    expect(testInstance.findAllByType("a").length).toEqual(1);
    expect(testInstance.findAllByType("svg").length).toEqual(1);
    expect(testInstance.findAllByType("div").length).toEqual(3);
  });

  it("has all the correct text when true", () => {
    render(LoginLogoutIcon("true"));
    expect(screen.getByText("Logout")).toBeTruthy();
    expect(screen.getByTestId("LogoutIcon")).toBeTruthy();
  });

  it("has all the correct text when true", () => {
    render(LoginLogoutIcon("false"));
    expect(screen.getByText("Login")).toBeTruthy();
    expect(screen.getByTestId("LoginIcon")).toBeTruthy();
  });
});
