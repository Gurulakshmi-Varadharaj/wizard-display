import React from 'react';
import { Link } from 'react-router-dom';

const Signin = () => {
  return(
    <nav className='navBar'>
      <ul>
        <li><Link to='/'>Sign Out</Link></li>
      </ul>
    </nav>
  );
};

export default Signin;