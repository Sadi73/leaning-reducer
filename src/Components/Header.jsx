import React from 'react';
import menuIcon from '../Assets/menuIcon.svg';
import bellIcon from '../Assets/bellIcon.svg';
import messageIcon2 from '../Assets/messageIcon2.svg';

const Header = () => {
    return (
        <header className="flex items-center justify-between bg-gray-800 p-4">
            <button className="lg:hidden">
                <img src={menuIcon} className='h-6' />
            </button>

            <div className="mx-4 flex-1">
                <input
                    type="text"
                    placeholder="Search here"
                    className="w-full max-w-xl rounded-full bg-gray-700 px-4 py-2 text-white focus:outline-none"
                />
            </div>

            <div className="flex items-center">
                <button className="relative mr-4">
                    <img src={bellIcon} className='h-6' />
                    <span
                        className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"
                    ></span>
                </button>

                <button className="relative mr-4">
                    <img src={messageIcon2} className='h-6' />
                    <span
                        className="absolute right-0 top-0 h-2 w-2 rounded-full bg-red-500"
                    ></span>
                </button>
            </div>
        </header>
    );
};

export default Header;