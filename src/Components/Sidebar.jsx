import React from 'react';
import logo from '../Assets/lws-logo-en.svg'
import Menubar from './Menubar';


const Sidebar = () => {
    return (
        <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
            <div className="mb-8 flex items-center">
                <div
                    className="flex items-center justify-center rounded-full text-xl font-bold"
                >
                    <img
                        src={logo}
                        className="mx-auto h-10 text-center"
                    />
                </div>
            </div>

            <button className="mb-8 w-full rounded-md bg-green-500 py-2 text-white">
                + New Project
            </button>

            <Menubar />
        </aside>
    );
};

export default Sidebar;