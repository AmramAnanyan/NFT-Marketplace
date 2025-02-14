import { body } from 'express-validator';

export const registration = [
  body('name').not().isEmpty(),
  body('email').isEmail().withMessage('Wrong Email type'),
  body('password')
    .isLength({ min: 5 })
    .withMessage('Password must be more than 5 character'),
  body('avatarUrl').optional().isURL().withMessage('Wrong url type')
];
export const login = [
  body('email').isEmail().withMessage('Wrong Email type'),
  body('password')
    .isLength({ min: 5 })
    .withMessage('Password must be more than 5 character')
];
