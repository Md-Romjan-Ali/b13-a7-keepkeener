import React from 'react';
import { IoHomeOutline, IoMenuSharp } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    const links=<div className='md:flex items-center'>
                <NavLink to={'/'} end className={ ({isActive})=> isActive ? 'lg:text-white text-black bg-[#244D3F]': 'text-[#64748B]'}>
                    <button className={`text-[16px] px-3 py-2 rounded-xl font-semibold flex items-center gap-1 `}>
                    <IoHomeOutline className='' size={25}/>
                    Home
                      </button>
                    </NavLink>
                <NavLink to={'/timeline'} className={ ({isActive})=> isActive ? 'lg:text-white text-black bg-[#244D3F]': 'text-[#64748B]'}>
                    <button className={`text-[16px] font-semibold px-3 py-2 rounded-xl flex items-center gap-1 `}>
                    <RiTimeLine className='' size={25}/>
                    Timeline
                      </button>
                    </NavLink>
                    
                <NavLink to={'/stats'} className={ ({isActive})=> isActive ? 'lg:text-white text-black bg-[#244D3F]': 'text-[#64748B]'}>
                    <button className={`px-3 py-2 rounded-xl text-[16px] font-semibold  flex items-center gap-1 `}>
                    <TfiStatsUp className='' size={25}/>
                    Stats
                      </button>
                    </NavLink>
            </div>
    return (
        <div className='max-w-380 mx-auto'>
          
           <div className="flex justify-between items-center px-5 md:px-20 py-5">
  <div className="navbar-start">
    <div className="dropdown">
      <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
       <IoMenuSharp size={30}/>
      </div>
      <ul
        tabIndex="-1"
        className=" dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 ">
       {links}
      </ul>
    </div>
<h1 className='text-2xl font-bold text-[#1F2937]'>Keen<span className='text-[#244D3F]'>Keeper</span></h1>
  </div>
  <div className="navbar-end hidden lg:flex">
    <ul className="menu menu-horizontal px-1">
     {links}
    </ul>
  </div>
  
</div>
        </div>
    );
};
                   
export default Navbar;