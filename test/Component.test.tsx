import React from "react";
import Enzyme, { render, shallow, mount } from "enzyme";
import Adapter from "enzyme-adapter-react-16";
import MyComponent from "../src/components/Component";
import { commonFunc, asyncFunc, data } from "../src/util";

Enzyme.configure({ adapter: new Adapter() });

describe("Common Component Test", () => {
  const commonFuncMock = jest.fn(commonFunc);
  const asyncFuncMock = jest.fn(asyncFunc);
  const conditionalFuncMock = jest.fn(() => true);

  asyncFuncMock.mockResolvedValue(7);

  const injectProps = {
    commonProp: 599,
    commonFunc: commonFuncMock,
    asyncFunc: asyncFuncMock,
    conditionalFunc: conditionalFuncMock,
  };

  it("should invoke function from props when rendering", () => {
    const wrapper = mount(<MyComponent {...injectProps} />);
    expect(commonFuncMock).toBeCalledWith("budu");
    expect(asyncFuncMock).toBeCalledWith("budu");
  });

  it("should use property from props", () => {
    const wrapper = shallow(<MyComponent {...injectProps} />);

    expect(wrapper.find("p.common-prop").text()).toBe(
      String(injectProps.commonProp)
    );
  });

  it("should render common-func button and be able to invoke commonFunc ", () => {
    const wrapper = shallow(<MyComponent {...injectProps} />);
    const commonFuncBtn = wrapper.find("button.common-func");
    expect(commonFuncBtn.text()).toBe("Invoke Common Function");
    commonFuncBtn.simulate("click");
    expect(commonFuncMock).toBeCalledWith("linbudu");
    expect(commonFuncMock.mock.results[0].value).toBe(false);
  });

  it("should render async-func button and be able to invoke asyncFunc ", async () => {
    expect.assertions(2);
    const wrapper = shallow(<MyComponent {...injectProps} />);
    const asyncFuncBtn = wrapper.find("button.async-func");
    expect(asyncFuncBtn.text()).toBe("Invoke Async Function");
    asyncFuncBtn.simulate("click");
    expect(asyncFuncMock).toBeCalledWith("linbudu");
    // TODO: deal with outside async method
    // expect(asyncFuncMock.mock.results[0].value).toBe(7);
  });

  it("should render inside-func button and be able to invoke insideFunc ", async () => {
    const wrapper = mount(<MyComponent {...injectProps} />);
    const insideFuncBtn = wrapper.find("button.inside-func");
    const count = wrapper.find("p.count");
    expect(insideFuncBtn.text()).toBe("Invoke Inside Function");
    expect(count.text()).toBe("0");
    insideFuncBtn.simulate("click");
    expect(count.text()).toBe("1");
    insideFuncBtn.simulate("click");
    expect(count.text()).toBe("2");
  });

  it("should render items correctly", () => {
    const wrapper = mount(<MyComponent {...injectProps} />);
    const infoElements = wrapper.find("p.info");
    expect(infoElements.length).toBe(3);
    for (let i = 0; i < infoElements.length; i++) {
      const infoItem = Object.values(data[i]);
      expect(infoElements.at(i).text()).toBe(infoItem.join(","));
    }
  });

  it("should render conditional DOM only when conditionalFunc return true", () => {
    conditionalFuncMock.mockReturnValueOnce(true);
    const wrapper = mount(<MyComponent {...injectProps} />);
    expect(typeof wrapper.prop("conditionalFunc")).toBe("function");
    const conditionalEle = wrapper.find("p.conditional");
    expect(conditionalEle.text()).toBe("Conditional Function");

    // PUZZLE: 重新渲染wrapper会使得mockValueOnce重新计算
    conditionalFuncMock.mockReturnValue(false);
    const wrapperFalse = mount(<MyComponent {...injectProps} />);
    expect(wrapperFalse.exists("p.conditional")).toBeFalsy();
  });

  it("should fetch remote data and render to DOM", () => {
    const wrapper = mount(<MyComponent {...injectProps} />);
    // TODO: remoteData test details?
    const dataElement = wrapper.find("p.remote");

    expect(dataElement.exists()).toBeTruthy();

    expect(dataElement.text()).toBe("Loading");
  });

  it("should set props correctly", () => {
    const wrapper = mount(
      <MyComponent {...injectProps} propsToBeSet={"INIT"} />
    );

    const setPropsEle = wrapper.find("p.set-prop");
    expect(setPropsEle.text()).toBe("INIT");

    wrapper.setProps({ ...injectProps, propsToBeSet: "MODIFIED" });
    expect(setPropsEle.text()).toBe("MODIFIED");
  });

  it("should set method correctly", () => {
    const wrapper = mount(
      <MyComponent {...injectProps} methodTobeSet={() => true} />
    );

    const setMethodEle = wrapper.find("p.set-method");
    expect(setMethodEle.text()).toBe("INIT");

    wrapper.setProps({ methodTobeSet: () => false });
    expect(setMethodEle.text()).toBe("MODIFIED");
  });

  // it("should run asyncFunc correctly", async () => {
  //   expect(await asyncFunc("linbudu")).toBe(7);
  // });
});
