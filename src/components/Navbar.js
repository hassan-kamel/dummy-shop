import React, { forwardRef } from 'react';
import { Avatar, Flex, Logo, Navlink } from '../atoms';

const Navbar = forwardRef((props, ref) => {
  return (
    <nav ref={ref}>
      <Flex height='100%' justifay='space-between'>
        <div className='logo'>
          <Logo flex='1' src='./images/joker.png' />
        </div>
        <div className='links'>
          <Navlink>men</Navlink>
          <Navlink>women</Navlink>
          <Navlink>kids</Navlink>
        </div>
        <div className='avatar'>
          <Avatar flex='1' src='./images/avatar.jpg' />
        </div>
      </Flex>
    </nav>
  );
});

export default Navbar;
