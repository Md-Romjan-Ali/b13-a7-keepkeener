import React from 'react';
import { GoArchive } from 'react-icons/go';
import { MdDelete, MdSnooze } from 'react-icons/md';
import { RiDeleteBin5Line, RiNotificationSnoozeLine } from 'react-icons/ri';

const LeftColumn = ({friendDetails}) => {
    return (
      <div>
        <div className='text-center py-6 bg-white shadow-xl rounded-xl'>
                <img className='mx-auto h-20 w-20 rounded-full' src={friendDetails.picture} alt="" />
                <h1 className='text-xl font-semibold text-[#1F2937] mt-3'>{friendDetails.name}</h1>
                <h1 className={`text-white font-medium text-[16px] ${friendDetails.status==='overdue' ? 'bg-[#EF4444]': 'bg-[#244D3F]'} ${friendDetails.status==='Almost due' && 'bg-[#EFAD44]'} rounded-full w-30 py-2 flex justify-center mx-auto`}>{friendDetails.status}</h1>
               
                <div className='font-medium my-2 text-[16px] flex items-center gap-2 justify-center italic'>
                    {friendDetails.tags.map((tag,index)=><h1 key={index} className='w-30 px-4 py-2 bg-[#CBFADB] rounded-full'>
                        {tag}
                    </h1>)
                  
                    
                    }
                </div>
<p className='text-[16px] text-[#64748B] font-medium my-3 italic'>{friendDetails.bio}</p>
<p className='text-[14px] text-[#64748B] '>Preferred: {friendDetails.email}</p>

            </div>
            <button className='text-[#1F2937] font-medium text-[16px] btn flex items-center gap-2 mt-4 bg-white rounded-xl shadow-xl w-full py-6 justify-center'>
<RiNotificationSnoozeLine size={25}/>
                Snooze 2 weeks
            </button>
            <button className='text-[#1F2937] font-medium text-[16px] btn flex items-center gap-2 mt-4 bg-white rounded-xl shadow-xl w-full py-6 justify-center'>
<GoArchive size={25}/>
                Archive
            </button>
            <button className='text-[#EF4444] font-medium text-[16px] btn flex items-center gap-2 mt-4 bg-white rounded-xl shadow-xl w-full py-6 justify-center'>
                <RiDeleteBin5Line  size={25} color='red'/>
Delete
            </button>
      </div>
    );
};

export default LeftColumn;