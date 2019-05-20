
import React from 'react';
import { shallow } from 'enzyme';
import Logo from './Logo';

describe('<Logo />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<Logo {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
