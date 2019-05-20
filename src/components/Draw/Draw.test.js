
import React from 'react';
import { shallow } from 'enzyme';
import Draw from './Draw';

describe('<Draw />', () => {
  let wrapper;
  let mockProps;
  beforeEach(() => {
    mockProps = {};
    wrapper = shallow(<Draw {...mockProps} />);
  });

  it('should render whithout explode', () => {
    expect(wrapper.length).toBe(1);
  });
});
