import React, { useContext } from 'react';
import { Cell, Legend, Pie, PieChart, Tooltip } from 'recharts';
import { FriendsContext } from '../../context/FriendContext';
import { BiColor } from 'react-icons/bi';

const Stats = () => {
    const {timeline}=useContext(FriendsContext)
    console.log(timeline);
    const text=timeline.filter(time=>time.textText=='Text')
    const call=timeline.filter(time=>time.callText=='Meetup')
    const video=timeline.filter(time=>time.vidioText=='Vidio')
    console.log(text,call,video);
  const data = [
    { name: 'Text', uv: text.length },
    { name: 'Call', uv: call.length },
    { name: 'Video', uv: video.length},
  ];
const COLORS = ['#3B82F6', '#22C55E', '#EF4444'];
  return (
    <div className=' bg-[#F8FAFC] py-20'>
<div className='max-w-300 mx-auto'>
    <h1 className='text-[#1F2937] font-bold text-5xl mb-6'>Friendship Analytics</h1>
       <div className=' bg-white shadow-md rounded-xl'>
        <p className='text-[#244D3F] font-medium text-xl pt-8 px-8'>By Interaction Type</p>
        <div className='flex justify-center p-8'>
            <PieChart width={400} height={400}>
            
      <Pie
        data={data}
        dataKey="uv"
      
        isAnimationActive={true}
      >
       {data.map((entry,index)=>(
        <Cell key={index} fill={COLORS[index]}/>
       ))}
       </Pie>
      <Tooltip />
      <Legend />
    </PieChart>
        </div>
          
       </div>
</div>
    </div>
   
  );
};

export default Stats;
