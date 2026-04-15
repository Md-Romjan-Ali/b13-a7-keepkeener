import React from 'react';
import { FaInstagram } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import { RiFacebookBoxFill, RiInstagramFill } from 'react-icons/ri';

const Footer = () => {
    return (
        <div className='bg-[#244D3F]'>
           <div className='max-w-300 mx-auto pt-20  text-center'>
<h1 className='text-6xl font-semibold text-white mb-4 '>KeenKeeper</h1>
<p className='text-gray-300 text-[16px] mb-8'>Your personal shelf of meaningful connections. Browse, tend, and nurture the relationships that matter most.</p>
    <h1 className='text-white text-xl font-medium mb-4'>Social Links</h1>
    {/* footer icon */}
    <div className='flex gap-3 justify-center flex-wrap items-center pb-10'>
       <div className='bg-white w-20 h-20 rounded-full flex justify-center items-center'>
<RiInstagramFill size={40}/>
</div> 
       <div className='bg-white w-20 h-20 rounded-full flex justify-center items-center'>
<RiFacebookBoxFill size={40}/>
</div> 
       <div className='bg-white w-20 h-20 rounded-full flex justify-center items-center'>
<FaXTwitter size={40}/>
</div> 
    </div>
<div className='border-t-2 border-gray-500 py-[30px] flex flex-wrap md:justify-between items-center gap-5 justify-center'>
    <p className='text-[16px] text-[#FAFAFA]'>© 2026 KeenKeeper. All rights reserved.</p>
    <ul className='flex items-center gap-10 text-[16px] text-[#FAFAFA]'>
        <li>Privacy Policy</li>
        <li>Terms of Service</li>
        <li>Cookies</li>
    </ul>
</div>
           </div>
        </div>
    );
};

export default Footer;