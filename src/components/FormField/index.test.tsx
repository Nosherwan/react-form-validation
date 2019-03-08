import * as React from 'react';
import { shallow } from 'enzyme';
import { FormField, IFormField } from './index';

/**
 * function that returns common FormField props
 * to test the component
 *
 * @param {*} [changeHandler=(e: any) => e] a changehandler to track calls
 * @returns {IFormField} props
 */
function getFormFieldProps(changeHandler = (e: any) => e): IFormField {
  return {
    label: 'First Name',
    innerRef: (ref: any) => ref,
    name: 'firstName',
    value: '',
    error: '',
    changeHandler
  };
}

describe('FormField', () => {

  it('should render correctly', () => {
    const props = getFormFieldProps();
    const component = shallow(<FormField {...props} />);
    expect(component).toMatchSnapshot();
  });

  it('should have input & label', () => {
    const props = getFormFieldProps();
    const component = shallow<FormField>(<FormField {...props} />);
    expect(component.find('input')).toHaveLength(1);
    expect(component.find('label').text()).toEqual('First Name');
  });

  it('input should call change handler on change', () => {

    //uses fake timers to test functionality
    jest.useFakeTimers();

    //mock callback to test functionality
    const callback = jest.fn((e: any) => e);

    const props = getFormFieldProps(callback);
    const component = shallow(<FormField {...props} />);
    const field = component.find('input');

    // simulate a change (type) event on input
    field.simulate('change', {
      target: {
        value: 'hello 🌏'
      },
      persist: () => true
    });
    // run all pending timers in this case pending setTimeout
    jest.runAllTimers();

    expect(callback).toBeCalled();

    // check correct arguments passed to callback
    const args = callback.mock.calls[0][0]
    expect(args.target.value).toEqual('hello 🌏');

  });
});
