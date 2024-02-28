import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { AiOutlineShopping } from 'react-icons/ai';
import { logo } from '../public/assets';
import { Cart } from './';
import { useStateContext } from '../context/StateContext';

const Navbar = () => {
  const { showCart, setShowCart, totalQuantities } = useStateContext();

  return (
    <div className="navbar-container">
      <Link href="/">
        <a className="logo" style={{ fontSize: '36px', position: 'relative' }}>
          <Image src={logo} alt='logo' width={45} height={45}/>
          <span style={{ position: 'absolute', top: '-1px' }}>Store</span>
        </a>
      </Link>

      <button type="button" className="cart-icon" onClick={() => setShowCart(true)}>
        <AiOutlineShopping />
        <span className="cart-item-qty">{totalQuantities}</span>
      </button>

      {showCart && <Cart />}
    </div>
  );
};

export default Navbar;
