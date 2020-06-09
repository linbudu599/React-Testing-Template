import React from 'react';
import Enzyme, { render, shallow, mount } from 'enzyme';
import App from '../components/App';
import Adapter from 'enzyme-adapter-react-16';

Enzyme.configure({ adapter: new Adapter() });

describe('App Test Suites', () => {
  it('should render error handler UI', () => {
    const wrapper = mount(<App />);
    expect(wrapper.find('p.p').text()).toBe('1');
    // expect(wrapper).toThrowError();
    // expect(wrapper.find('p.error').exists()).toBeTruthy();
    // expect(wrapper.text()).toBe('Error');
  });
});
