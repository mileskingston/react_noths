import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('Product', () => {
  function setup(props, children) {
    const wrapper = shallow(<Button {...props}>{children}</Button>);
    return {
      props,
      wrapper
    };
  }

  describe('render', () => {
    it('is displayed', () => {
      const { wrapper } = setup(null, 'primary');
      expect(wrapper.find('.button').length).toBe(1);
    });
  });

  describe('click event', () => {
    it('is called once', () => {
      const mockCall = jest.fn();
      const { wrapper } = setup({
        onClick: mockCall
      }, 'Add Product');
      const button = wrapper.find('button');
      button.simulate('click');
      expect(mockCall).toHaveBeenCalledTimes(1);
    });
  });
});