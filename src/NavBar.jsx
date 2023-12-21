import React from 'react';
import { Link } from 'react-router-dom';

function NavBar() {
  return (
    <div className='navBar'>
        <Link to='/'>Home</Link>
        <Link to="/shop">Shop</Link>
        <Link to="/cart">Cart</Link>
    </div >
  )
}

export default NavBar