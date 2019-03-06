import * as React from 'react';
import { shallow } from 'enzyme';
import { FormField } from './index';

describe('FormField', () => {
  it('should render correctly', () => {
    const props = {
      label:'First Name',
      innerRef: (ref: any) => ref,
      name: 'firstName',
      value: '',
      error: '',
      changeHandler: () => {
        return;
      }
    };

    const component = shallow(<FormField {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should have input & label', () => {
    const props = {
      label:'First Name',
      innerRef: (ref: any) => ref,
      name: 'firstName',
      value: '',
      error: '',
      changeHandler: () => {
        return;
      }
    };

    const component = shallow<FormField>(<FormField {...props} />);
    expect(component.find('input')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('First Name');
  });
});
