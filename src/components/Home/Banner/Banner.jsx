import React, { useEffect, useState } from 'react';
import { KeyRound, User, Sparkles } from 'lucide-react';

const Banner = () => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [items, setItems] = useState([]);

    useEffect(() => {
        fetch('servicesItems.json')
            .then(res => res.json())
            .then(data => {
                setItems(data.servicesItems);
            });
    }, [])

    return (
        <div className="min-h-screen bg-[#0a0a0f] relative overflow-hidden">
            {/* Grid Background */}
            <div
                className="absolute inset-0"
                style={{
                    backgroundImage: `linear-gradient(#ffffff15 1px, transparent 1px),
                           linear-gradient(90deg, #ffffff15 1px, transparent 1px)`,
                    backgroundSize: '50px 50px'
                }}
            />

            {/* Glowing triangles */}
            <div className="absolute top-1/4 left-1/4 w-8 h-8 bg-yellow-500/20 rotate-45 blur-lg" />
            <div className="absolute bottom-1/4 right-1/4 w-8 h-8 bg-yellow-500/20 rotate-45 blur-lg" />
            <div className="absolute top-1/2 right-1/3 w-8 h-8 bg-yellow-500/20 rotate-45 blur-lg" />

            {/* Additional Shapes */}
            <div className="absolute top-10 left-10 w-10 h-10 bg-yellow-400/30 rotate-12 blur-md" />
            <div className="absolute bottom-10 right-10 w-10 h-10 bg-yellow-400/30 rotate-30 blur-md" />
            <div className="absolute top-20 right-1/4 w-12 h-12 bg-yellow-500/25 rotate-60 blur-lg" />
            <div className="absolute bottom-1/3 left-1/5 w-12 h-12 bg-yellow-500/25 rotate-75 blur-xl" />
            <div className="absolute top-1/6 right-1/6 w-8 h-8 bg-yellow-300/20 rotate-90 blur-md" />
            <div className="absolute bottom-1/5 left-1/3 w-14 h-14 bg-yellow-400/30 rotate-15 blur-lg" />
            <div className="absolute top-1/5 right-1/5 w-10 h-10 bg-yellow-500/25 rotate-45 blur-md" />

            {/* More 10 Elements */}
            <div className="absolute top-16 left-1/6 w-9 h-9 bg-yellow-400/25 rotate-20 blur-lg" />
            <div className="absolute bottom-16 right-1/6 w-9 h-9 bg-yellow-500/30 rotate-35 blur-lg" />
            <div className="absolute top-1/3 left-1/3 w-11 h-11 bg-yellow-300/20 rotate-50 blur-md" />
            <div className="absolute bottom-1/2 right-1/3 w-11 h-11 bg-yellow-400/30 rotate-65 blur-md" />
            <div className="absolute top-1/5 left-1/2 w-13 h-13 bg-yellow-500/25 rotate-80 blur-xl" />
            <div className="absolute bottom-1/5 right-1/2 w-13 h-13 bg-yellow-400/30 rotate-95 blur-xl" />
            <div className="absolute top-5 left-5 w-7 h-7 bg-yellow-500/20 rotate-110 blur-md" />
            <div className="absolute bottom-5 right-5 w-7 h-7 bg-yellow-300/20 rotate-125 blur-md" />
            <div className="absolute top-1/2 left-1/4 w-9 h-9 bg-yellow-500/20 rotate-140 blur-lg" />
            <div className="absolute bottom-1/4 right-1/5 w-9 h-9 bg-yellow-400/25 rotate-155 blur-lg" />



            <div className="relative z-10 container mx-auto px-4 py-16">
                <div className="max-w-4xl mx-auto text-center mb-16">
                    <h1 className="text-3xl md:text-5xl sm:text-2xl font-bold text-white mb-6">
                        The Best & Cheapest Panel for All Your<br />
                        Social Media Growth Needs
                    </h1>
                    <div className="text-gray-300 text-lg max-w-3xl mx-auto">
                        <ul className='flex justify-center items-center flex-wrap gap-3'>
                            {
                                items.map((item, idx) => <li key={idx} className='flex items-center gap-2'><Sparkles className='text-orange-400' /><a href={item.link}>{item.name}</a></li>)
                            }
                        </ul>
                    </div>
                </div>

                <div className="max-w-md mx-auto bg-[#1a1a1f]/80 backdrop-blur-sm rounded-2xl p-8 shadow-[0_4px_20px_rgba(255,120,0,0.6)] border border-gray-800">
                    <div className="space-y-6">
                        <div>
                            <label htmlFor="username" className="block text-sm font-medium text-gray-300 mb-2">
                                Username
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <User className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="text"
                                    id="username"
                                    value={username}
                                    onChange={(e) => setUsername(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800/50 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="Enter your username"
                                />
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="block text-sm font-medium text-gray-300 mb-2">
                                Password
                            </label>
                            <div className="relative">
                                <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
                                    <KeyRound className="h-5 w-5 text-gray-400" />
                                </div>
                                <input
                                    type="password"
                                    id="password"
                                    value={password}
                                    onChange={(e) => setPassword(e.target.value)}
                                    className="block w-full pl-10 pr-3 py-2 border border-gray-700 rounded-md bg-gray-800/50 text-gray-300 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-yellow-500 focus:border-transparent"
                                    placeholder="••••••••"
                                />
                            </div>
                        </div>

                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <input
                                    id="remember-me"
                                    type="checkbox"
                                    className="h-4 w-4 rounded border-gray-700 bg-gray-800 text-yellow-500 focus:ring-yellow-500"
                                />
                                <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-300">
                                    Remember me
                                </label>
                            </div>
                            <a href="#" className="text-sm text-yellow-500 hover:text-yellow-400">
                                Forgot password?
                            </a>
                        </div>

                        <button
                            type="submit"
                            className="w-full py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-gray-900 bg-yellow-500 hover:bg-yellow-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-yellow-500"
                        >
                            Sign in
                        </button>

                        <div className="text-center text-sm">
                            <span className="text-gray-400">Do not have an account? </span>
                            <a href="#" className="text-yellow-500 hover:text-yellow-400">
                                Sign up
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Banner;