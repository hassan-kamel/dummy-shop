import React from 'react';
import { Link } from 'react-router-dom';
import { Button, Input, TypoOne } from '../atoms';
import Anchor from '../atoms/Anchor';

const Register = () => {
  return (
    <div className='center'>
      <Input type='text' placeholder='Name' required />
      <Input type='email' placeholder='Email' required />
      <Input type='password' placeholder='Password' required />
      <Input type='file' required />
      <Button type='submit'>Sign up</Button>
      <TypoOne>
        have an account ?{' '}
        <Anchor>
          <Link to={'/login'} className='reset'>
            log in
          </Link>
        </Anchor>
      </TypoOne>
    </div>
  );
};

export default Register;
