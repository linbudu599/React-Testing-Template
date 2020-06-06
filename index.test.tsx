import React from "react";
import jest from "jest";
import Enzyme, { shallow } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import Comp from "./comp";

Enzyme.configure({ adapter: new Adapter() });

describe("Name of the group", () => {
  it("should ", () => {
    const wrapper = shallow(<Comp />);
    expect(wrapper.find("p").exists()).toEqual(true);
    expect(wrapper.find("p").text()).toBe("芜湖!");
  });
});
