import React from "react";
import { shallow, configure } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import { findByTestAtrr } from "../../../utils/testingUtils";
import Listing from "./index";

configure({ adapter: new Adapter() });

const setUp = (Component, props = {}) => {
  const component = shallow(<Component {...props} />);
  return component;
};

describe("Listing Component Load", () => {
  it("Listing Should render without errors", () => {
    let component = setUp(Listing, { onHandleChange: jest.fn() });
    const wrapper = findByTestAtrr(component, "Listing");
    expect(wrapper.length).toBe(1);
  });
});
