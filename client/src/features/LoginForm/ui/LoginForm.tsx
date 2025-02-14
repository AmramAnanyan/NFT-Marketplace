import ButtonUI from 'shared/ui/ButtonUI';
import InputUi from 'shared/ui/InputUI';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { LOGIN_FORM } from '../constants';
import useForm from 'shared/hooks/useForm';
import { useEffect } from 'react';

const LoginForm = () => {
  const { formData, errors, handleChange, handleSubmit } = useForm();
  useEffect(() => {
    if (!errors) {
      console.log('dispatch for login');
    }
  }, [errors]);

  return (
    <div className={styles.container}>
      <p>Login</p>
      <form onSubmit={handleSubmit}>
        {LOGIN_FORM.map((input) => {
          return (
            <InputUi
              key={input.id}
              {...input}
              value={formData[input.name || '']}
              onChange={handleChange}
            />
          );
        })}
        <div className={styles.socialLoginContainer}>sign in with google</div>
        <ButtonUI
          text='Sign In'
          isLoading={false}
          onClick={function (): void {
            throw new Error('Function not implemented.');
          }}
        />
        <Link className={styles.registrationLink} to={'/sign-up'}>
          Registration
        </Link>
      </form>
    </div>
  );
};

export default LoginForm;
