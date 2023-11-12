import { IInput } from 'shared/ui/InputUI'

export const LOGIN_FORM: Array<IInput> = [
  {
    id: 'emailInput',
    type: 'text',
    name: 'email',
    placeholder: 'Email',
    onChange: (event: React.SyntheticEvent): void => {},
    value: ''
  },

  {
    id: 'passwordInput',
    type: 'password',
    name: 'password',
    placeholder: 'Password',
    onChange: (event: React.SyntheticEvent): void => {},
    value: ''
  }
]
