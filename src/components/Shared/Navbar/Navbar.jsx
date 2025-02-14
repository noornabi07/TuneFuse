import React, { useState } from 'react';
import { Menu, X, Music2 } from 'lucide-react';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="fixed w-full bg-white z-50">
            <div className="max-w-7xl mx-auto px-4 py-2 sm:px-6 lg:px-8">
                <div className="flex items-center justify-between h-16">
                    {/* Logo and brand */}
                    <div className="flex-shrink-0 flex items-center group cursor-pointer">
                        <Music2 className="h-10 w-10 font-bold text-orange-400 transform group-hover:scale-110 group-hover:rotate-12 transition-all duration-300 ease-out" />
                        <span className="ml-2 text-xl font-extrabold text-orange-400 relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-cyan-500 after:transition-all after:duration-300 group-hover:after:w-full">
                            TuneFuse
                        </span>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {['Services', 'Blog', 'API', 'About Us', 'Contact Us'].map((item) => (
                            <a
                                key={item}
                                href="#"
                                className="relative text-gray-600 font-semibold hover:text-orange-400 transition-colors text-xl duration-300 group py-2"
                            >
                                <span>{item}</span>
                                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-white transition-all duration-300 ease-out group-hover:w-full"></span>
                            </a>
                        ))}
                    </div>

                    {/* Desktop Right Section */}
                    <div className="hidden md:flex items-center space-x-6">
                        <a href="#" className='text-gray-600 text-xl font-semibold hover:text-orange-400 transition-colors duration-300'>Sign in</a>
                        <a href="#" className='text-gray-900 text-xl font-bold bg-orange-400 py-1 px-4 rounded-2xl hover:bg-orange-500 transition-colors duration-300'>Sign Up</a>
                    </div>

                    {/* Mobile menu button */}
                    <div className="md:hidden">
                        <button
                            onClick={toggleMenu}
                            className="text-gray-300 hover:text-white transition-colors p-2 rounded-lg hover:bg-orange-400"
                        >
                            {isOpen ? (
                                <X className="h-6 w-6 transform rotate-0 hover:rotate-180 transition-transform duration-300" />
                            ) : (
                                <Menu className="h-6 w-6 transform hover:scale-110 transition-transform duration-300" />
                            )}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            <div
                className={`${isOpen
                    ? 'translate-x-0 opacity-100'
                    : '-translate-x-full opacity-0'
                    } md:hidden fixed top-16 left-0 right-0 bg-gradient-to-r from-purple-900 to-indigo-900 transition-all duration-300 ease-in-out backdrop-blur-sm bg-opacity-95`}
            >
                <div className="px-4 pt-2 pb-3 space-y-1">
                    {['Services', 'Blog', 'API', 'About Us', 'Contact Us'].map((item) => (
                        <a
                            key={item}
                            href="#"
                            className="block px-3 py-2 text-base font-medium text-gray-300 hover:text-white hover:bg-purple-800/50 rounded-md transition-all duration-300 transform hover:translate-x-2"
                        >
                            {item}
                        </a>
                    ))}
                </div>
                <div className="px-4 py-3 border-t border-purple-800/50 backdrop-blur-sm">
                    <div className="flex items-center justify-around">
                        <a href="#" className='text-xl font-semibold text-white transition-colors duration-300'>Sign in</a>
                        <a href="#" className='text-white text-xl font-semibold'>Sign Up</a>
                    </div>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;