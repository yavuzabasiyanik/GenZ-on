import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { login } from '../../../store/session';
import mypic from '../../../images/GenZlogo.png';
import './Loginform.css'

const LoginForm = () => {
  const [errors, setErrors] = useState([]);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const user = useSelector(state => state.session.user);
  const dispatch = useDispatch();

  const onLogin = async (e) => {
    e.preventDefault();
    const data = await dispatch(login(email, password));
    if (data) {
      setErrors(data);
    }
  };

  const updateEmail = (e) => {
    setEmail(e.target.value);
  };

  const updatePassword = (e) => {
    setPassword(e.target.value);
  };

  if (user) {
    return <Redirect to='/' />;
  }

  return (
    <>
      <div className='login-big-div'>
        <img width='80' src={mypic} alt='cool' ></img>
        <div className='loginform'>
          <div className='realForm'>

            <h1 className='signin'>Sign-In</h1>

            <div>
                <div className='signinerrors'>
                  {errors.map((error, ind) => (
                    <div key={ind}>{error}</div>
                  ))}
                </div>
              <form onSubmit={onLogin}>
                <div className='username-thingy-signin'>
                  <label className='labelusername' htmlFor='email'>Username</label>
                  <input
                    className='input-thingy-singin'
                    name='email'
                    type='text'
                    value={email}
                    onChange={updateEmail}
                  />
                </div>
                <div className='username-thingy-signin'>
                  <label className='labelusername' htmlFor='password'>Password</label>
                  <input
                    className='input-thingy-singin'
                    name='password'
                    type='password'
                    value={password}
                    onChange={updatePassword}
                  />
                  <button className='submitsigninform' type='submit'>Sign In</button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

    </>

  );
};

export default LoginForm;
