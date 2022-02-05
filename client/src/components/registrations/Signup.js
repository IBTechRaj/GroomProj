import React, { useState } from 'react';
import axios from 'axios';

const Signup = () => {

  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [passwordConfirmation, setPasswordConfirmation] = useState('')

  const signupData = {
    "email": email,
    "password": password,
  }


  const handleSubmit = async (event) => {
    event.preventDefault();
    if (password === passwordConfirmation) {
      console.log('signing up')
      try {
        const res = await axios.post('http://localhost:3001/users ', signupData);
        const { jwt, user } = res.data;
        console.log('res', res, user);
        if (jwt) {
          localStorage.setItem('token', jwt);
          console.log('j', jwt)

        }
      }
      catch (error) {
        console.log('no');
      }
    }
    else {
      console.log('Passwords should match')
    }
  }

  return (
    <div className="container-fluid text-dark bg-light h-100">
      <div className="w-100 ">
        <h1>Sign Up</h1>
      </div>
      <form onSubmit={handleSubmit}>
        <label className="justify-left w-100 px-5">
          Email
          <input
            className="form-control"
            placeholder="email"
            type="text"
            name="email"
            value={email}
            onChange={event => {
              setEmail(event.target.value)
            }}
          />
          Password
          <input
            className="form-control"
            placeholder="password"
            type="password"
            name="password"
            value={password}
            onChange={event => {
              setPassword(event.target.value)
            }}
          />
          Confirm Password
          <input
            className="form-control"
            placeholder="password confirmation"
            type="password"
            name="passwordConfirmation"
            value={passwordConfirmation}
            onChange={event => {
              setPasswordConfirmation(event.target.value)
            }}
          />
        </label>

        <label className="justify-left w-100 px-5">
          {' '}
          <input className="w-100 btn btn-custom" type="submit" />
        </label>
      </form>
    </div>
  );
}

export default Signup
