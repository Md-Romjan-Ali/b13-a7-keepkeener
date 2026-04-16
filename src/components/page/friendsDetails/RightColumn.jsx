import React, { useContext } from 'react';
import { LuPhoneCall } from 'react-icons/lu';
import { MdOutlineTextsms } from 'react-icons/md';
import { RiVidiconLine } from 'react-icons/ri';

import { toast } from 'react-toastify';
import { FriendsContext } from '../../context/FriendContext';

const RightColumn = ({friendDetails}) => {
const {timeline,setTimeline}=useContext(FriendsContext)

   const call={
    callText:'Meetup',
    callImg:'https://i.ibb.co.com/tfLvgy1/call.png',
    name:friendDetails.name,
    callName:friendDetails.name,
    callDate:new Date().toLocaleDateString()
   }
   const text={
    textText:'Text',
     textImg:'https://i.ibb.co.com/yBSmPdmT/text.png',
    name:friendDetails.name,
    textName:friendDetails.name,
    textDate:new Date().toLocaleDateString()
   }
   const video={
    vidioText:'Video',
     vidioImg:'https://i.ibb.co.com/C36C1yHj/video.png',
    name:friendDetails.name,
    vidioName:friendDetails.name,
    vidioDate:new Date().toLocaleDateString()
   }
  
   const callHandle=()=>{
    setTimeline([...timeline,call])
    toast.success(`Meetup With ${friendDetails.name}`,
        {position:'top-center'}
    )
   }
   const textHandle=()=>{
    setTimeline([...timeline,text])
     toast.success(`Text With ${friendDetails.name}`,
        {position:'top-center'})
   }
   const videoHandle=()=>{
    setTimeline([...timeline,video])
     toast.success(`Video With ${friendDetails.name}`,
        {position:'top-center'})
   }
   console.log(timeline,'timeline');
    return (
        <div className='space-y-8'>
           <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
              <div className='bg-white rounded-md shadow-md  py-8 space-y-2 text-center'>
            <h1 className='text-[#244D3F] text-[32px] font-semibold'>{friendDetails.days_since_contact}</h1>
<p className='text-[#64748B] text-[18px]'>Days Since Contact</p>
        </div>
              <div className='bg-white rounded-md shadow-md  py-8 space-y-2 text-center'>
            <h1 className='text-[#244D3F] text-[32px] font-semibold'>{friendDetails.goal}</h1>
<p className='text-[#64748B] text-[18px]'>Goal (Days)</p>
        </div>
              <div className='bg-white rounded-md shadow-md  py-8 space-y-2 text-center'>
            <h1 className='text-[#244D3F] text-[32px] font-semibold'>{friendDetails.next_due_date}</h1>
<p className='text-[#64748B] text-[18px]'>Next Due</p>
        </div>
           </div>
           {/* second sections */}
           <div className='bg-white py-8 shadow-xl rounded-xl space-y-4 flex justify-between px-8'>
            <div>
<h1 className='text-[#244D3F] text-xl font-semibold'>Relationship Goal</h1>
<p className='text-[#64748B] text-[18px]'>Connect every <span className='text-[18px] font-bold text-[#1F2937]'>{friendDetails.goal} days</span></p>
            </div>
            <button className='btn btn-ghost font-medium text-[14px] text-[#1F2937]'>Edit</button>
           </div>
           {/* third section */}
           <div className='bg-white py-8 shadow-xl rounded-xl space-y-4  px-8'>
            <h1 className='text-[#244D3F] text-xl font-semibold '>Relationship Goal</h1>
            <div className='grid grid-cols-1 sm:grid-cols-3 gap-6'>
                {/* call */}
<div onClick={callHandle} className='text-center bg-[#E9E9E9] py-4 rounded-md shadow-md'>
<LuPhoneCall size={25} className='mx-auto mb-2'/>
<p className='text-[#1F2937] text-[18px]'>Call</p>
</div>
{/* text */}
<div onClick={textHandle} className='text-center bg-[#E9E9E9] py-4 rounded-md shadow-md'>

<MdOutlineTextsms size={25} className='mx-auto mb-2'/>
<p className='text-[#1F2937] text-[18px]'>Text</p>
</div>
{/* vidio */}
<div onClick={videoHandle} className='text-center bg-[#E9E9E9] py-4 rounded-md shadow-md'>
<RiVidiconLine size={25} className='mx-auto mb-2'/>
<p className='text-[#1F2937] text-[18px]'>Vidio</p>
</div>
            </div>
           </div>
        </div>
    );
};

export default RightColumn;
