import React from 'react'
import { BsList } from 'react-icons/bs'
import { FiSmartphone } from 'react-icons/fi'
import { IoPerson } from 'react-icons/io5'
import { RxCross1 } from 'react-icons/rx';
import { Link } from 'react-router-dom';

const HeaderTop = ({toggle, setToggle}) => {
  return (
    <div className='header-top'>
        <div className='header-top-menu' onClick={() => setToggle(prev => !prev)} >
            {toggle ? <RxCross1 className='list-icon'/> : <BsList className='list-icon'/>}
        </div>
        <div className='header-top-phone'>
            <FiSmartphone className='phone-icon'/>
            +201115603479
        </div>
        <div className='header-top-text'>
            Welcome To Book Store
        </div>
        <Link to="/login" className='header-top-link'>
            <IoPerson className='login-icon'/>
            Login
        </Link>
    </div>
  );
};

export default HeaderTop;