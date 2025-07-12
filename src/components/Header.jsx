import React from 'react'
import { NavLink } from 'react-router-dom';
import logo from '../assets/Logo-desktop.png'
import { BellIcon, MagnifyingGlassIcon } from '@radix-ui/react-icons';

const getNavLinkClass = ({ isActive }) =>
    `px-4 py-1 mt-2 mb-2 ml-2 mr-2 rounded-md transition-colors ${isActive ? 'bg-[#1A1A1A] text-white' : 'hover:bg-gray-800'
    }`;
function Header() {
    return (
        <header className='w-full fixed  bg-opacity-60 text-white'>
            <div className='flex justify-between items-center py-2 pr-20 pl-20'>
                <div>
                    <img src={logo} alt="" className='w-[160px]' />
                </div>
                <div className='flex bg-[#0F0F0F] border-2 border-[#1A1A1A] rounded-lg text-[#BFBFBF]'>
                    <NavLink className={getNavLinkClass} to='/'>Home</ NavLink>
                    <NavLink className={getNavLinkClass} to='/movies-and-shows'>Movies & Shows</NavLink>
                    <NavLink className={getNavLinkClass} to='/support'>Support</NavLink>
                    <NavLink className={getNavLinkClass} to='/subscription'>Subscriptions</NavLink>
                </div>
                <div className='flex gap-5 items-center'>
                    <MagnifyingGlassIcon style={{ width: '24px', height: '24px' }}/>
                    <BellIcon  style={{ width: '24px', height: '24px' }}/>
                </div>
            </div>
        </header>
    )
}

export default Header
