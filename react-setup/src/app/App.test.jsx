import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAtrr } from "./utils/testingUtils";
import App from "./app";
configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<App {...props} />);
  return component;
};

describe("App Component Load", () => {
  let component;
  beforeEach(() => {
    component = setUp();
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "App");
    expect(wrapper.length).toBe(1);
  });
});
