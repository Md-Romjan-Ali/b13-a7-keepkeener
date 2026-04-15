import React from 'react';

const TimeLine = () => {
    return (
        <div className='bg-[#F8FAFC]'>
           <div className='max-w-300 mx-auto py-20'>
            <h1 className='text-[#1F2937] font-bold text-5xl'>Timeline </h1>
         <div className="dropdown dropdown-bottom dropdown-center my-6">
  <div tabIndex={0} role="button" className="btn m-1 text-[18px] text-[#64748B]">Filter timeline ⬇️</div>
  <ul tabIndex="-1" className="dropdown-content menu bg-base-100 rounded-box z-1 w-30 p-2 shadow-sm">
    <li><a>Text</a></li>
    <li><a>Call</a></li>
    <li><a>Vidio</a></li>
  </ul>
</div>
           </div>
        </div>
    );
};

export default TimeLine;