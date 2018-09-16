const emailRegExp = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

export function validateField (name: string, value: string) {
  switch (name) {
    case 'firstName':
      return (value && value.length > 3) ? '' : 'Please enter a valid first name';
    case 'lastName':
      return (value && value.length > 3) ? '' : 'Please enter a valid last name';
    case 'email':
      return value && emailRegExp.test(value) ? '' : 'Please enter a valid email address';
    default:
      return false;
  }
};

export function validateForm (validation: any) {
  const touched: any[] = [];
  const array = Object.keys(validation).map((key:any)=> validation[key]);
  const result =
    array.filter((field: any) => {
      if (field.touched) touched.push(field.touched)
      return !!field.error
    })
  return (result.length === 0 && touched.length > 0)
}