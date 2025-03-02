import { body } from 'express-validator';
export const searchValidation = [
  body('searchTerm').not().isEmpty().isLength({ min: 2, max: 150 })
];
