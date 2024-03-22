import React from 'react';
import Logo from './Logo';
import MenuDropdown from './MenuDropdown';
import Container from '../Container/Container';
import ProfileMenu from './ProfileMenu';


const Navbar = () => {
    return (
        <div className='bg-black w-full fixed z-10 shadow-sm'>
            <div className='py-4'>
                <Container>
                    <div className='flex justify-between items-center gap-3 md:gap-3 flex-row'>
                        <Logo></Logo>
                        <MenuDropdown></MenuDropdown>
                        <ProfileMenu></ProfileMenu>
                    </div>
                </Container>
            </div>
        </div>
    );
};

export default Navbar;