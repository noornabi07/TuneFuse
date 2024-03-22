import React from 'react';
import { GiAbstract096 } from "react-icons/gi";
import { Link } from 'react-router-dom';

const Logo = () => {
    return (
        <Link to='/' className="flex items-center gap-4">
            <GiAbstract096 className='text-teal-300 font-bold text-3xl'></GiAbstract096>
            <h2 className='text-2xl font-bold font-serif text-teal-300'>TuneFuse</h2>
        </Link>
    );
};

export default Logo;