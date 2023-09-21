export const validateContactForm = (values) => {
  const errors = {};
  // first Name validation
  if (!values.firstName) {
    errors.firstName = 'Required';
  } else if (values.firstName.length < 2) {
    errors.firstName = 'First name must be at least 2 characters.';
  } else if (values.firstName.length > 15) {
    errors.firstName = 'First name must be 15 characters or less.';
  }

  if (!values.lastName) {
    errors.lastName = 'Required';
  } else if (values.lastName.length < 2) {
    errors.lastName = 'Last Name must be at least 2 characters.';
  } else if (values.lastName.length > 15) {
    errors.lastName = 'Last Name must be 15 characters or less';
  }


  const reg = /^\d+$/;
  if (!reg.test(values.phoneNum)) {
    errors.phoneNum = 'The phone number should contain only numbers.';
  }

  if (!values.email.includes('@')) {
    errors.email = 'Invalid email address. Email should contain a @';
  }

  return errors;
};
