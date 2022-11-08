import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, TypoOne } from '../atoms';
import Anchor from '../atoms/Anchor';

const Login = () => {
  return (
    <div className='center'>
      <Input type='email' placeholder='Email' required />
      <Input type='password' placeholder='Password' required />
      <Button type='submit'>Log in</Button>
      <TypoOne>
        Don't have an account ?
        <Link to={'/signup'} className='reset'>
          <Anchor>sign up</Anchor>
        </Link>
      </TypoOne>
    </div>
  );
};

export default Login;
