import React from "react";
import Enzyme, { render, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyComponent, { commonFunc, asyncFunc, data } from "./Component";

Enzyme.configure({ adapter: new Adapter() });

describe("Common Component Test", () => {
  const commonFuncMock = jest.fn(commonFunc);
  const asyncFuncMock = jest.fn(asyncFunc);

  asyncFuncMock.mockResolvedValue(7);

  const injectProps = {
    commonProp: 599,
    commonFunc: commonFuncMock,
    asyncFunc: asyncFuncMock,
  };

  it.skip("should invoke function from props when rendering", () => {
    const wrapper = shallow(<MyComponent {...injectProps} />);
    expect(commonFuncMock).toBeCalledWith("budu");
    expect(asyncFuncMock).toBeCalledWith("budu");
  });

  it.skip("should use property from props", () => {
    const wrapper = shallow(<MyComponent {...injectProps} />);

    expect(wrapper.find("p.common-prop").text()).toBe(
      Number(injectProps.commonProp)
    );
  });

  it.skip("should render common-func button and be able to invoke commonFunc ", () => {
    const wrapper = shallow(<MyComponent {...injectProps} />);
    const commonFuncBtn = wrapper.find("button.common-func");
    expect(commonFuncBtn.text()).toBe("Invoke Common Function");
    commonFuncBtn.simulate("click");
    expect(commonFuncMock).toBeCalledWith("linbudu");
    expect(commonFuncMock.mock.results[0].value).toBe(false);
  });

  it.skip("should render async-func button and be able to invoke asyncFunc ", async () => {
    expect.assertions(3);
    const wrapper = shallow(<MyComponent {...injectProps} />);
    const asyncFuncBtn = wrapper.find("button.async-func");
    expect(asyncFuncBtn.text()).toBe("Invoke Async Function");
    asyncFuncBtn.simulate("click");
    expect(asyncFuncMock).toBeCalledWith("linbudu");
    // TODO: deal with outside async method
    // expect(asyncFuncMock.mock.results[0].value).toBe(7);
  });

  it.skip("should render inside-func button and be able to invoke insideFunc ", async () => {
    const wrapper = mount(<MyComponent {...injectProps} />);
    const insideFuncBtn = wrapper.find("button.inside-func");
    const count = wrapper.find("p.count");
    expect(insideFuncBtn.text()).toBe("Invoke Inside Function");
    expect(count.text()).toBe("0");
    insideFuncBtn.simulate("click");
    expect(count.text()).toBe("1");
  });

  it.skip("should render items correctly", () => {
    const wrapper = mount(<MyComponent {...injectProps} />);
    const infoElements = wrapper.find("p.info");
    expect(infoElements.length).toBe(3);
    for (let i = 0; i < infoElements.length; i++) {
      const infoItem = Object.values(data[i]);
      expect(infoElements.at(i).text()).toBe(infoItem.join(","));
    }
  });
});
