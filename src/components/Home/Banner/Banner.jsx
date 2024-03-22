import React from 'react';
import { Link } from 'react-router-dom';
import leftImg from '../../../assets/banner/left.png'
import rightImg from '../../../assets/banner/Social tree-bro.png'
import Container from '../../Shared/Container/Container';

const Banner = () => {
    return (
        <div className='text-center -mt-5 bg-slate-200'>
            <Container>
                <div className='text-center w-full md:w-1/2 mx-auto pt-3 md:pt-5 lg:pt-10'>
                    <h2 className='text-2xl md:text-4xl lg:text-7xl font-bold'>Turn your audience <br /> into assets</h2>
                    <p className='text-md md:text-lg w-full md:w-2/3 mx-auto mt-2 md:mt-8 text-gray-500 font-semibold'>Experience the power of the best social services  provider in world. Boost your social presence with TuneFuse, the truly affordable choice.</p>
                    <Link to='/login'><button className='py-2 md:py-4 px-4 md:px-8 bg-teal-300 mt-5 hover:bg-teal-600 hover:duration-200 hover:text-white text-black font-semibold text-lg font-serif rounded-xl'>Get Started</button></Link>
                </div>
                <div className='lg:grid mt-3 lg:grid-cols-2 justify-center items-center lg:gap-10'>
                    <div>
                        <img src={leftImg} alt="" />
                    </div>
                    <div>
                        <img src={rightImg} alt="" />
                    </div>
                </div>
            </Container>
        </div>
    );
};

export default Banner;