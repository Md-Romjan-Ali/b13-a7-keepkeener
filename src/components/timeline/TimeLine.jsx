import React, { useContext } from 'react';
import { FriendsContext } from '../context/FriendContext';

const TimeLine = () => {
    const {timeline}=useContext(FriendsContext)
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
<div className='space-y-6'>
    {
        timeline.map((time,index)=><div key={index} className='bg-white rounded-md p-4 shadow-xl'>
            <div className='flex items-center gap-4'>
<img src={time.name===time.textName ? `${time.textImg}` :
time.name===time.callName ? `${time.callImg}`:
time.name===time.vidioName && `${time.vidioImg}`} alt="" />
              
            <div>
                <div className='flex items-center gap-1'>
                    {/* text */}
              <span className='font-medium text-[#244D3F] text-xl'>{time.name===time.textName && `${time.textText}`}
                  {time.name===time.callName && `${time.callText}`}
                  {time.name===time.vidioName && `${time.vidioText}`} </span>
{/* name */}
                <span className='text-[#64748B] text-[18px]'> With {time.name===time.textName && `${time.textName}`}
                  {time.name===time.callName && `${time.callName}`}
                  {time.name===time.vidioName && `${time.vidioName}`}</span>
            </div>
{/* date */}
                <span className='text-[#64748B] text-[18px] mt-1'>{time.name===time.textName && `${time.textDate}`}
                  {time.name===time.callName && `${time.callDate}`}
                  {time.name===time.vidioName && `${time.vidioDate}`}</span>
            </div>

            </div>
        </div>)
    }
</div>
           </div>
        </div>
    );
};

export default TimeLine;