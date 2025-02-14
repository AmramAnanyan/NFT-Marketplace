import ButtonUI from 'shared/ui/ButtonUI';
import InputUi from 'shared/ui/InputUI';
import styles from './index.module.scss';
import { Link } from 'react-router-dom';
import { REGISTRATION_FORM } from '../constants';

import useForm from 'shared/hooks/useForm';
import { useEffect } from 'react';
import ErrorField from 'shared/ui/InputError';
import { useAppDispatch } from 'shared/hooks/useAppDispatch';
import { userRegistrationAsync } from '../thunks';
import { toast } from 'shared/ui/Toast/utils';

const RegistrationForm = () => {
  const { errors, formData, handleChange, handleSubmit } = useForm();
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (!errors) {
      console.log('dispatch register form data');
    }
  }, [errors]);
  const handleRegistration = async () => {
    const data = await dispatch(userRegistrationAsync(formData)).unwrap();
    if (!data?.success) {
      console.log('data ===>> erorr', data);
      toast().error(data.message);
    }
  };

  return (
    <div className={styles.container}>
      <p>Registration</p>
      <form onSubmit={handleSubmit}>
        {REGISTRATION_FORM.map((input) => {
          return (
            <>
              <InputUi
                key={input.id}
                {...input}
                value={formData[input.name || ''] || ''}
                onChange={handleChange}
              />
              {errors && (
                <ErrorField
                  message={
                    errors[input.name || ''] && errors[input.name || '']?.msg
                  }
                ></ErrorField>
              )}
            </>
          );
        })}
        <div className={styles.socialLoginContainer}>Sign up with google</div>
        <ButtonUI
          text='Registration'
          isLoading={false}
          type='submit'
          onClick={handleRegistration}
        />
        <Link className={styles.loginLink} to={'/sign-in'}>
          Login
        </Link>
      </form>
    </div>
  );
};

export default RegistrationForm;
