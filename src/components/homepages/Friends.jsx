import React, { useContext } from 'react';
import { FriendsContext } from '../context/FriendContext';
import { NavLink } from 'react-router';

const Friends = () => {
    const {friends}=useContext(FriendsContext)
console.log(friends);

    return (

       
            <div className=''>
            <h1 className='text-[#1F2937] font-semibold text-2xl mt-10 mb-4'>Your Friends</h1>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                 {
            friends.map(friend=>
            <NavLink key={friend.id} to={`/${friend.id}`}>
                <div className='text-center py-6 bg-white shadow-xl rounded-xl'>
                <img className='mx-auto h-20 w-20 rounded-full' src={friend.picture} alt="" />
                <h1 className='text-xl font-semibold text-[#1F2937] mt-3'>{friend.name}</h1>
                <p className='text-[#64748B] text-[16px] my-2'>{friend.days_since_contact}d ago</p>
                <div className='font-medium my-2 text-[16px]   flex items-center gap-2 justify-center'>
                    {friend.tags.map((tag,index)=><h1 key={index} className='w-30 px-4 py-2 bg-[#CBFADB] rounded-full'>
                        {tag}
                    </h1>)}
                </div>
<h1 className={`text-white font-medium text-[16px] ${friend.status==='overdue' ? 'bg-[#EF4444]': 'bg-[#244D3F]'} ${friend.status==='Almost due' && 'bg-[#EFAD44]'} rounded-full w-30 py-2 flex justify-center mx-auto`}>{friend.status}</h1>
            </div>
            </NavLink>)
            
          }
            </div>
         
        </div>
     
    );
};

export default Friends;