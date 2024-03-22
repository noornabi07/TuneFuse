import React from 'react';
import { FaShoppingCart, FaUsers } from "react-icons/fa";
import { GrBusinessService } from "react-icons/gr";
import { FaRankingStar } from "react-icons/fa6";
import Container from '../../Shared/Container/Container';
import CountUp from 'react-countup';

const Counting = () => {
    return (
        <div className=' bg-gray-800 p-10'>
            <Container>
                <div className='grid grid-cols-2 lg:grid-cols-4 text-teal-300 gap-10'>
                    <div>
                        <div className='border-2 w-20 py-4 rounded-full mx-auto text-center border-teal-300'><FaShoppingCart className='text-5xl mx-auto'></FaShoppingCart></div>
                        <h4 className='font-bold text-3xl mt-3'><CountUp delay={0.8} start={0} duration={4} end={`2030`}></CountUp></h4>
                        <p className='font-semibold text-lg mt-1'>Order Completed</p>
                    </div>
                    <div>
                        <div className='border-2 w-20 py-4 rounded-full mx-auto text-center border-teal-300'><FaUsers className='text-5xl mx-auto'></FaUsers></div>
                        <h4 className='font-bold text-3xl mt-3'><CountUp delay={0.8} start={0} duration={4} end={406}></CountUp></h4>
                        <p className='font-semibold text-lg  mt-1'>Registered Users</p>
                    </div>
                    <div>
                        <div className='border-2 w-20 py-4 rounded-full mx-auto text-center border-teal-300'><GrBusinessService className='text-5xl mx-auto'></GrBusinessService></div>
                        <h4 className='font-bold text-3xl mt-3'><CountUp delay={0.8} start={0} duration={4} end={250}></CountUp></h4>
                        <p className='font-semibold text-lg  mt-1'>Active Services</p>
                    </div>
                    <div>
                        <div className='border-2 w-20 py-4 rounded-full mx-auto text-center border-teal-300'><FaRankingStar className='text-5xl mx-auto'></FaRankingStar></div>
                        <h4 className='font-bold text-3xl mt-3'>#1</h4>
                        <p className='font-semibold text-lg  mt-1'>Top Rank World wide</p>
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Counting;