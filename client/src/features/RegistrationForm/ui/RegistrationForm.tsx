import ButtonUI from 'shared/ui/ButtonUI'
import InputUi from 'shared/ui/InputUI'
import styles from './index.module.scss'
import { Link } from 'react-router-dom'
import { REGISTRATION_FORM } from '../constants'

import useForm from 'shared/hooks/useForm'
import { useEffect } from 'react'

const RegistrationForm = () => {
  const { errors, formData, handleChange, handleSubmit } = useForm()
  useEffect(() => {
    if (!errors) {
      console.log('dispatch register form data')
    }
  }, [errors])
  return (
    <div className={styles.container}>
      <p>Registration</p>
      <form onSubmit={handleSubmit}>
        {REGISTRATION_FORM.map((input) => {
          return (
            <InputUi
              key={input.id}
              {...input}
              value={formData[input.name || ''] || ''}
              onChange={handleChange}
            />
          )
        })}
        <div className={styles.socialLoginContainer}>sign up with google</div>
        <ButtonUI text='Registration' isLoading={false} type='submit' />
        <Link className={styles.loginLink} to={'/sign-in'}>
          Login
        </Link>
      </form>
    </div>
  )
}

export default RegistrationForm
