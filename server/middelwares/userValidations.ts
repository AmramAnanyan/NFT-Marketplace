import { body } from 'express-validator';

export const registeration = [
  body('email').isEmail().withMessage('Wrong Email type'),
  body('password')
    .isLength({ min: 5 })
    .withMessage('Password must be more than 5 charachter'),
  body('avatarUrl').optional().isURL().withMessage('Wrong url type')
];
export const login = [
  body('email').isEmail().withMessage('Wrong Email type'),
  body('password')
    .isLength({ min: 5 })
    .withMessage('Password must be more than 5 charachter')
];
