import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('App', () => {
  beforeEach(() => {
    container = shallow(<App />)  
  })

  it('renders container', () => {
    console.log(container);
    expect(container.find('.product').length).toEqual(1);
  });
});