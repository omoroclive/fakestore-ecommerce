import React from 'react';
import logo from '../assets/logo.jpg';
import SendIcon from '@mui/icons-material/Send';
import FacebookIcon from '@mui/icons-material/Facebook';
import { Instagram, Twitter, YouTube } from '@mui/icons-material';

function Footer() {
  const handleTwitterClick = () => {
    window.open('https://www.instagram.com/omoroclive');
  };

  const handleFacebookClick = () => {
    window.open('https://www.facebook.com/omoro.clive.5');
  };

  const handleYoutubeClick = () => {
    window.open('https://youtube.com/@cliveomoro1244');
  };

  const handleInstagramClick = () => {
    window.open('https://www.instagram.com/omoroclive');
  };

  const headingStyle = 'font-bold m-2 text-xl';
  const iconStyle = 'bg-blue-500 rounded w-10 h-10 cursor-pointer';

  return (
    <footer className='bg-black border-white border-b-2 text-white capitalize m-4'>
      <div className='container mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4'>
        <div className='flex flex-col items-center md:items-start'>
          <div className='flex items-center'>
            <img src={logo} alt='logo' className='w-8 h-8' />
            <h1 className={`ml-2 ${headingStyle}`}>Oasis</h1>
          </div>
          <p className='mt-2 text-justify md:text-left'>
            Know more about Oasis Shop which offers amazing products.
          </p>
          <div className='flex gap-2 mt-2 justify-center md:justify-start'>
            <FacebookIcon className={iconStyle} onClick={handleFacebookClick} />
            <Instagram className={iconStyle} onClick={handleInstagramClick} />
            <Twitter className={iconStyle} onClick={handleTwitterClick} />
            <YouTube className={iconStyle} onClick={handleYoutubeClick} />
          </div>
        </div>
        <div className='md:flex-1 md:flex-row md:flex'>
          <div className='md:mr-4'>
            <h1 className={headingStyle}>shop</h1>
            <div className='p-2'>
              <p>accessories</p>
              <p>clothes</p>
              <p>electronics</p>
              <p>home appliances</p>
              <p>new arrivals</p>
            </div>
          </div>
          <div className='md:mt-4 md:flex-1'>
            <h1 className={headingStyle}>your account</h1>
            <div className='p-2'>
              <p>profile</p>
              <p>orders</p>
              <p>addresses</p>
              <p>account details</p>
              <p>payment options</p>
            </div>
          </div>
        </div>
        <div className='flex-1 mt-4 md:mt-0'>
          <h1 className={headingStyle}>subscribe to our newsletter</h1>
          <div className='border-2 border-solid flex justify-between pr-2 items-center rounded-md hover:border-slate-400 hover:outline-none'>
            <input
              className='outline-none p-2 w-full md:w-56 lg:w-full bg-gray-100 focus:bg-white border-0 focus:border-blue-500 rounded-md transition-colors'
              type='name'
              placeholder='Enter Email'
            />
            <SendIcon className='bg-blue-500 p-2 cursor-pointer' />
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;



