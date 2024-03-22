import React from 'react';
import avatar from '../../../assets/user.png'

const Avatar = () => {
    return (
        <div>
            <img src={avatar} className='rounded-full w-[32px] h-[32px]' alt="" />
        </div>
    );
};

export default Avatar;