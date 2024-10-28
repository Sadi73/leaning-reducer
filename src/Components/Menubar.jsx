import React from 'react';
import dashboard from '../Assets/dashboard.svg';
import projectIcon from '../Assets/projectIcon.svg';
import contactIcon from '../Assets/contactIcon.svg';
import kanbanIcon from '../Assets/kanbanIcon.svg';
import calendarIcon from '../Assets/calendarIcon.svg';
import messageIcon from '../Assets/messageIcon.svg';
import settingsIcon from '../Assets/settingsIcon.svg';

const menuItems = [
    { id: 1, title: 'Dashboard', icon: dashboard },
    { id: 2, title: 'Projects', icon: projectIcon },
    { id: 3, title: 'Contact', icon: contactIcon },
    { id: 4, title: 'Kanban', icon: kanbanIcon },
    { id: 5, title: 'Calendar', icon: calendarIcon },
    { id: 6, title: 'Messages', icon: messageIcon },
    { id: 7, title: 'Settings', icon: settingsIcon },
]

const Menubar = () => {
    return (
        <nav>
            <ul className="space-y-4">
                {menuItems.map(item =>
                    <li key={item?.id}>
                        <a href="#" className="flex items-center">
                            <img src={item?.icon} className='h-6 w-6 mr-2' />
                            {item?.title}</a>
                    </li>
                )}
            </ul>
        </nav>
    );
};

export default Menubar;