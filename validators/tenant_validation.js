const Validator = require('validator');
const isEmpty = require('./isEmpty');

module.exports = function validateTenantInput(data) {
  let errors = {};

  data.name = !isEmpty(data.name) ? data.name : '';
  data.pan = !isEmpty(data.pan) ? data.pan : '';
  data.aadhar = !isEmpty(data.aadhar) ? data.aadhar : '';
  data.address = !isEmpty(data.address) ? data.address : '';

  if (Validator.isEmpty(data.name)) {
    errors.name = 'Name field is required';
  }

  if (Validator.isEmpty(data.pan)) {
    errors.pan = 'Pan field is required';
  }

  if (Validator.isEmpty(data.aadhar)) {
    errors.aadhar = 'Aadhar field is required';
  }

  if (Validator.isEmpty(data.address)) {
    errors.address = 'Address field is required';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};