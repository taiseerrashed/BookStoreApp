import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = ({toggle, setToggle}) => {
  return (
    <nav className='navbar' style={{left: toggle && "0"}}>
        <ul className='navbar-links'>
            <li onClick={() => setToggle(false)} ><Link to="/" className='navbar-link'>Home</Link></li>
            <li onClick={() => setToggle(false)} ><Link to="/authors" className='navbar-link'>Authors</Link></li>
            <li onClick={() => setToggle(false)} ><Link to="/about" className='navbar-link'>About Us</Link></li>
            <li onClick={() => setToggle(false)} ><Link to="/contact" className='navbar-link'>Contact Us</Link></li>
            <li onClick={() => setToggle(false)} ><Link to="/register" className='navbar-link'>Register</Link></li>
        </ul>
    </nav>
  );
};

export default Navbar;