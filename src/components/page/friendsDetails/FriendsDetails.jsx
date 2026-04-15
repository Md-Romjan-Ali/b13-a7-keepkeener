import React, { useContext } from 'react';
import { useParams } from 'react-router';
import { FriendsContext } from '../../context/FriendContext';
import { RotateLoader } from 'react-spinners';
import LeftColumn from './LeftColumn';
import RightColumn from '../RightColumn';

const FriendsDetails = () => {
    const {id}=useParams()
    const {friends,loading}=useContext(FriendsContext)
    const friendDetails=friends.find(friend=>friend.id==id)
    console.log(friendDetails);
    return (
        <div className='bg-[#F8FAFC] pt-20 pb-32'>
           <div className='max-w-300 mx-auto'>
              {
loading ? <div className='flex justify-center my-[30%]'><RotateLoader color='red'/></div>
 :
           <div className='grid grid-cols-1 md:grid-cols-3 items-center gap-6'>
            <div className='col-span-1'>
                   <LeftColumn friendDetails={friendDetails}></LeftColumn>
            </div>
          <div className='md:col-span-2'>
             <RightColumn friendDetails={friendDetails}></RightColumn>
          </div>
            

           </div>       
           

          }
           </div>
        </div>
        
    );
};

export default FriendsDetails;