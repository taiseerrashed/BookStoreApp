import React, { useContext } from 'react'
import { BsCart } from 'react-icons/bs'
import { IoIosSearch } from 'react-icons/io'
import { IoBookOutline } from 'react-icons/io5'
import { Link } from 'react-router-dom';
import CartContext from '../../context/CartContext';

const HeaderMiddle = () => {
  const { cartItemsLength } = useContext(CartContext)
  return (
    <div className='header-middle'>
        <Link to="/" className='header-middle-logo'>
            <b>Book</b>
            <IoBookOutline className='book-icon'/>
            <b>Store</b>
        </Link>
        <div className='header-middle-search-box'>
            <input className='header-middle-search-input' type='search' placeholder='Search in book store...' />
            <IoIosSearch className='search-icon'/>
        </div>
        <Link to="/cart" className='header-middle-cart-wrapper'>
            {cartItemsLength > 0 &&
                <b className='cart-notification'>{cartItemsLength}</b>
            }
            <BsCart className='cart-icon'/>
        </Link>
    </div>
  );
};

export default HeaderMiddle