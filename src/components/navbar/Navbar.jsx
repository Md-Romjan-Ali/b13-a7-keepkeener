import React from 'react';
import { IoHomeOutline } from 'react-icons/io5';
import { RiTimeLine } from 'react-icons/ri';
import { TfiStatsUp } from 'react-icons/tfi';
import { NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div>
           <div className='flex justify-between items-center px-5 md:px-20 py-5 shadow-md'>
            <h1 className='text-2xl font-bold text-[#1F2937]'>Keen<span className='text-[#244D3F]'>Keeper</span></h1>
            <div className='flex items-center'>
                <NavLink to={'/'} end className={ ({isActive})=> isActive ? 'text-white': 'text-[#64748B]'}>
                    <button className={`btn text-[16px] font-semibold  flex items-center gap-1 `}>
                    <IoHomeOutline className='' size={25}/>
                    Home
                      </button>
                    </NavLink>
                <NavLink to={'/timeline'} className={ ({isActive})=> isActive ? 'text-white': 'text-[#64748B]'}>
                    <button className={`btn text-[16px] font-semibold  flex items-center gap-1 `}>
                    <RiTimeLine className='' size={25}/>
                    Timeline
                      </button>
                    </NavLink>
                    
                <NavLink to={'/stats'} className={ ({isActive})=> isActive ? 'text-white': 'text-[#64748B]'}>
                    <button className={`btn text-[16px] font-semibold  flex items-center gap-1 `}>
                    <TfiStatsUp className='' size={25}/>
                    Stats
                      </button>
                    </NavLink>
            </div>
           </div>
        </div>
    );
};
                   
export default Navbar;