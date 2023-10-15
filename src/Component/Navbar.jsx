import React, { useContext, useState } from 'react';
import logo from '../assets/logo.jpg';
import SearchBox from './SearchBox';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { ProductContext } from '../Context/product-context'; 

const Navbar = () => {
    const { cartItems } = useContext(ProductContext); 
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setIsMenuOpen(prevState => !prevState);
    };

    const cartItemCount = Object.values(cartItems).reduce((total, count) => total + count, 0);

    return (
        <div className='navbar w-full shadow-xl sticky bg-white py-3 z-50 top-0'>
            <div className='container flex items-center justify-between mx-auto'>

                <Link to={'/'}>
                    <div className='logo flex items-center gap-2'>
                        <img src={logo} alt='logo' className='w-10 h-10' />
                        <h1 className='font-bold text-black text-xl'>Oasis</h1>
                    </div>
                </Link>

                <div className='lg:hidden'>
                    <button 
                        onClick={handleMenuToggle}
                        className='block text-gray-700 hover:text-black focus:outline-none'>
                        <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                            {isMenuOpen ? (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M6 18L18 6M6 6l12 12' />
                            ) : (
                                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M4 6h16M4 12h16m-7 6h7' />
                            )}
                        </svg>
                    </button>
                </div>

                <div className=' lg:flex-1 lg:ml-6 lg:text-center'>
                    <SearchBox />
                </div>

                <div className='hidden lg:flex items-center gap-4'>
                    <Link to="/profile" className='text-gray-700 hover:text-black'>
                        <PermIdentityIcon style={{ fontSize: '28px' }} />
                    </Link>
                    <Link to="/cart" className='text-gray-700 hover:text-black relative'>
                        <ShoppingCartIcon style={{ fontSize: '28px' }} />
                        {cartItemCount > 0 && <span className='ml-1 text-sm font-semibold'>{cartItemCount}</span>}
                    </Link>
                </div>

            </div>
            {isMenuOpen && (
                <div className='lg:hidden mt-2 flex flex-col items-center'>
                    <Link to="/profile" className='text-gray-700 hover:text-black py-2'>
                        Profile
                    </Link>
                    <Link to="/cart" className='text-gray-700 hover:text-black py-2'>
                        <ShoppingCartIcon style={{ fontSize: '24px' }} />
                        {cartItemCount > 0 && <span className='ml-1 text-sm font-semibold'>{cartItemCount}</span>}
                    </Link>
                </div>
            )}
        </div>
    );
}

export default Navbar;
