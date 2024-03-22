import { AiOutlineMenu } from 'react-icons/ai'
import { useCallback, useState } from 'react'
import { Link } from 'react-router-dom'
import Avatar from './Avatar'

const ProfileMenu = () => {
    const [isOpen, setIsOpen] = useState(false)
    const user = false;

    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])


    return (
        <div className='relative'>
            <div className='flex flex-row items-center gap-3'>
                <div className='flex items-center gap-5 pr-10 md:pr-20'>
                    <Link className='text-white hidden lg:block'>Login</Link>
                    <Link className='py-2 px-4 rounded-xl bg-teal-300 hidden lg:block text-black font-bold'>Sign up</Link>
                </div>
                <div
                    onClick={toggleOpen}
                    className='p-4 md:py-1 md:px-2 border-[1px] border-teal-300 flex flex-row items-center gap-3 rounded-full cursor-pointer hover:shadow-md transition'
                >
                    <AiOutlineMenu className='text-teal-300' />
                    <div className='hidden md:block'>
                        <Avatar></Avatar>
                    </div>
                </div>
            </div>
            {isOpen && (
                <div className='absolute rounded-xl shadow-md w-[40vw] text-center md:w-[14vw] bg-black text-teal-300 overflow-hidden right-0 top-12 text-sm'>
                    <div className='flex flex-col cursor-pointer'>
                        <Link
                            to='/'
                            className='block md:hidden px-4 py-3 hover:text-white transition font-semibold'
                        >
                            Home
                        </Link>
                        {user ? (
                            <>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    New Order
                                </Link>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Orders
                                </Link>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Services
                                </Link>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Add Funds
                                </Link>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Ticket
                                </Link>
                                <div
                                    onClick={() => {
                                        setRole(null)
                                        logOut()
                                    }}
                                    className='px-4 py-3 hover:text-white transition font-semibold cursor-pointer'
                                >
                                    Logout
                                </div>
                            </>
                        ) : (
                            <>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    New Order
                                </Link>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Orders
                                </Link>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Services
                                </Link>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Add Funds
                                </Link>
                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Ticket
                                </Link>

                                <Link
                                    to='/login'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Login
                                </Link>
                                <Link
                                    to='/signup'
                                    className='px-4 py-3 hover:text-white transition font-semibold'
                                >
                                    Sign Up
                                </Link>
                            </>
                        )}
                    </div>
                </div>
            )}
        </div>
    )
}

export default ProfileMenu;