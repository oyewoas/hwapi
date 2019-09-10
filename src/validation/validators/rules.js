import { check, query } from 'express-validator';

// add validation rules here.

export const queryValidator = [
  query('tag', 'Tags parameter is required')
    .exists()
    .not()
    .isEmpty()
    .isString()
    .bail(),
  query('sortBy', 'sortBy parameter is invalid')
    .optional({checkFalsy: true})
    .isIn(['id', 'likes', 'reads', 'popularity'])
    .bail(),
  query('direction', 'direction parameter is invalid')
    .optional({checkFalsy: true})
    .isIn(['asc', 'desc'])
    .bail(),
];
