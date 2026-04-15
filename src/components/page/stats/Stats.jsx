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
    <div className='flex justify-center bg-[#F8FAFC]'>

       <div className='max-w-300 mx-auto'>
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
      <Legend/>
    </PieChart>
       </div>
    </div>
   
  );
};

export default Stats;
