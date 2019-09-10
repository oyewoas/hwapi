import { check, query } from 'express-validator';

// add validation rules here.

/* regex description
the regex /^[A-Za-z\-']{2,250}$/
is made up of a single character set, between
[], with a quantifier {2,250}
A-Za-z => matches upper and lowercase alphabets
\-' => matches a - and a '
the last {2,250} is a quantifier specifying that the character been matched
should be > 1 and <= 250
the ^ and $ runs the match from the beginning and end of the string
*/

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
