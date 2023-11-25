import { IInput } from 'shared/ui/InputUI'

export interface IRegistrationForm {
  name: string
  surname: string
  email: string
  userDate: Date
  password: string
}
export const REGISTRATION_FORM: Array<IInput> = [
  {
    id: 'nameInput',
    type: 'text',
    name: 'name',
    placeholder: 'Name',
    onChange: (event: React.SyntheticEvent): void => {},
    value: ''
  },
  {
    id: 'surnameInput',
    type: 'text',
    name: 'surname',
    placeholder: 'Surname',
    onChange: (event: React.SyntheticEvent): void => {},
    value: ''
  },
  {
    id: 'emailInput',
    type: 'text',
    name: 'email',
    placeholder: 'Email',
    onChange: (event: React.SyntheticEvent): void => {},
    value: ''
  },
  {
    id: 'dateInput',
    type: 'date',
    name: 'date',
    placeholder: 'Birthday Date',
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
