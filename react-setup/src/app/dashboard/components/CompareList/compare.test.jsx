import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAtrr } from "../../../utils/testingUtils";
import CompareList from "./index";
configure({ adapter: new Adapter() });

const setUp = (props = {}) => {
  const component = shallow(<CompareList {...props} />);
  return component;
};

describe("Compare Component Loaded", () => {
  let component;
  beforeEach(() => {
    component = setUp({ career: {} });
  });

  it("Should render without errors", () => {
    const wrapper = findByTestAtrr(component, "compare-obj");
    expect(wrapper.length).toBe(1);
  });
});
