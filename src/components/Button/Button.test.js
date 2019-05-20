
import React from 'react';
import { shallow } from 'enzyme';
import Button from './Button';

describe('<Button />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<Button {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
