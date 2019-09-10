import { validationResult } from 'express-validator';
import getValidator from '../validation';
import {
    status
  } from '../utils'
export default (validationName) => {
  const rules = getValidator(validationName);
  return [
    ...rules,
    (req, res, next) => {
      const errors = validationResult(req);
      let resErrorMsg = {};
      errors.array().forEach((error) => {
        resErrorMsg = error.msg;
      });
      if (!errors.isEmpty()) {
        return res.status(status.bad).json({ error: resErrorMsg });
      }
      return next();
    }
  ];
};