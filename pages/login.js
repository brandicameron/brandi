import styles from './../styles/login/Login.module.css';
import style from './../styles/shared/Buttons.module.css';
import { useEffect } from 'react';
import { useRouter } from 'next/router';
import { useState } from 'react';
import { useLogin } from '../hooks/useLogin';
import { useUser } from '../hooks/useUser';

export default function Login() {
  const router = useRouter();
  const [inputValues, setInputValues] = useState({ email: '', password: '' });
  const { loginUser, errorMessage } = useLogin();
  const { loggedIn } = useUser();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValues({ ...inputValues, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    loginUser(inputValues.email, inputValues.password);
  };

  useEffect(() => {
    if (loggedIn) {
      router.push('/resources');
    }
  }, [loggedIn]);

  return (
    <section className={styles.login}>
      <form onSubmit={handleSubmit}>
        <h1>Login</h1>
        <input
          type='email'
          name='email'
          placeholder='Email'
          value={inputValues.email}
          onInput={handleInputChange}
        />
        <input
          type='password'
          name='password'
          placeholder='Password'
          value={inputValues.password}
          onInput={handleInputChange}
        />
        <button type='submit' className={`${style.btn}`}>
          <span className={style.btnShadow}></span>
          <span className={style.btnFront}>Login</span>
        </button>
        {errorMessage && <p>{errorMessage}</p>}
      </form>
    </section>
  );
}
