import React from 'react';
import Baner from './Baner';
import Friends from './Friends';

const Home = () => {
    return (
        <div className='bg-[#F8FAFC] pt-20'>
            <div className='max-w-300 mx-auto'>
                {/* home text */}
              <Baner></Baner>
<Friends></Friends>
       {/* friend card */}

            </div>
    
        </div>
    );
};

export default Home;