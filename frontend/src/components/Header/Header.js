import React from 'react';
import {NavLink} from "react-router-dom";
import './Header.css';

const Header = () => {
  return (
    <div className='Header'>
      <h3>MyChat</h3>
      <div>
        <NavLink to='/'>MainPage</NavLink>
        <NavLink to='/messages'>Messages</NavLink>
      </div>
    </div>
  );
};

export default Header;