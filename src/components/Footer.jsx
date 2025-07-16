import React from 'react';
import LinkedIn from '../assets/linkedin.png';
import Twitter from '../assets/twitter.png';
import facebook from '../assets/fb.png';

function Footer() {
  return (
    <div className='bg-[#0F0F0F] mt-10 px-4 md:px-10 lg:px-20 py-10'>
      <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 text-white'>
        <div className='flex flex-col'>
          <span className='pb-2'>Home</span>
          <span className='text-[#999999] font-light'>Categories</span>
          <span className='text-[#999999] font-light'>Devices</span>
          <span className='text-[#999999] font-light'>Pricing</span>
          <span className='text-[#999999] font-light'>FAQ</span>
        </div>
        <div className='flex flex-col'>
          <span className='pb-2'>Movies</span>
          <span className='text-[#999999] font-light'>Genres</span>
          <span className='text-[#999999] font-light'>Trending</span>
          <span className='text-[#999999] font-light'>New Release</span>
          <span className='text-[#999999] font-light'>Popular</span>
        </div>
        <div className='flex flex-col'>
          <span className='pb-2'>Shows</span>
          <span className='text-[#999999] font-light'>Genres</span>
          <span className='text-[#999999] font-light'>Trending</span>
          <span className='text-[#999999] font-light'>New Release</span>
          <span className='text-[#999999] font-light'>Popular</span>
        </div>
        <div className='flex flex-col'>
          <span className='pb-2'>Support</span>
          <span className='text-[#999999] font-light'>Contact Us</span>
        </div>
        <div className='flex flex-col'>
          <span className='pb-2'>Subscription</span>
          <span className='text-[#999999] font-light'>Plans</span>
          <span className='text-[#999999] font-light'>Features</span>
        </div>
        <div className='flex flex-col'>
          <span className='pb-4'>Connect With Us</span>
          <div className='flex gap-2'>
            <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#141414] border border-[#1F1F1F] rounded-md flex justify-center items-center'>
              <img src={Twitter} alt="twitter" className='w-[20px]' />
            </div>
            <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#141414] border border-[#1F1F1F] rounded-md flex justify-center items-center'>
              <img src={facebook} alt="facebook" className='w-[20px]' />
            </div>
            <div className='w-[40px] h-[40px] md:w-[50px] md:h-[50px] bg-[#141414] border border-[#1F1F1F] rounded-md flex justify-center items-center'>
              <img src={LinkedIn} alt="linkedin" className='w-[20px]' />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
