import {
    queryValidator
  } from './validators/rules';
  
  const getValidator = (validationName) => {
    const rules = {
     queryValidator
    };
  
    return rules[validationName];
  };
  
  export default getValidator;