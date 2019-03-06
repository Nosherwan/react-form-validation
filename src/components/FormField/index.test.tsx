import * as React from 'react';
import { shallow } from 'enzyme';
import { FormField } from './index';

describe('FormField', () => {
  it('should render correctly in "debug" mode', () => {
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
});
