import * as React from 'react';
import { shallow } from 'enzyme';
import { Profile, IProfile } from './index';
import { FormField } from '../FormField/index';

function getProfileProps(): IProfile {
  return {
    profile: {get: () => ''},
    getUser: () => true,
    updateUser: () => true,
  };
}

describe('Profile', () => {

  it('should render correctly', () => {
    const props = getProfileProps();
    const component = shallow(<Profile {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should have 3 FormField child components', () => {
    const props = getProfileProps();
    const component = shallow(<Profile {...props} />);
    expect(component.find(FormField)).toHaveLength(3);
  });

});
