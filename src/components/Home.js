import React from 'react';
import './Wizard.scss';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <nav className='navBar'>
      <ul>
        <li><Link to='/signin'>Sign in</Link></li>
        <li><Link to='/signup'>Sign up</Link></li>
      </ul>
    </nav>
  )
};

export default Home;