import React from 'react';

const Baner = () => {
    return (
        <div>
                 <div className='text-center'>
           <h1 className='text-5xl font-bold text-[#1F2937] mb-4'>Friends to keep close in your life</h1>
          <p className='text-[16px] mb-8 text-[#64748B]'>Your personal shelf of meaningful connections. Browse, tend, and nurture the
relationships that matter most.</p>
<div className='flex justify-center pb-10'>
    <button className='flex items-center font-semibold text-[16px] text-white btn bg-[#244D3F]'>
    Add a Friend
</button>
</div>
       </div>
       {/* home card */}
       <div className='grid pb-10 border-b border-gray-300 gap-5 sm:grid-cols-2 md:grid-cols-4 '>
        <div className='bg-white shadow-md  py-8 space-y-2 text-center'>
            <h1 className='text-[#244D3F] text-[32px] font-semibold'>10</h1>
<p className='text-[#64748B] text-[18px]'>Total Friends</p>
        </div>
        <div className='bg-white shadow-md  py-8 space-y-2 text-center'>
            <h1 className='text-[#244D3F] text-[32px] font-semibold'>3</h1>
<p className='text-[#64748B] text-[18px]'>On Track</p>
        </div>
        <div className='bg-white shadow-md  py-8 space-y-2 text-center'>
            <h1 className='text-[#244D3F] text-[32px] font-semibold'>6</h1>
<p className='text-[#64748B] text-[18px]'>Need Attention</p>
        </div>
        <div className='bg-white shadow-md  py-8 space-y-2 text-center'>
            <h1 className='text-[#244D3F] text-[32px] font-semibold'>12</h1>
<p className='text-[#64748B] text-[18px]'>Interactions This Month</p>
        </div>
       </div>
        </div>
    );
};

export default Baner;