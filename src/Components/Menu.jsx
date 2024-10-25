import React from 'react';
import MenuItem from './MenuItem';

import dashboardIcon from '../assets/dashboardIcon.svg';
import projectIcon from '../assets/projectIcon.svg';
import contactIcon from '../assets/contactIcon.svg';
import kanbanIcon from '../assets/kanbanIcon.svg';
import calendarIcon from '../assets/calendarIcon.svg';
import messageIcon2 from '../assets/messageIcon2.svg';
import settingsIcon from '../assets/settingsIcon.svg';

const menuItems = [
    { id: 1, title: 'Dashboard', icon: dashboardIcon },
    { id: 2, title: 'Projects', icon: projectIcon },
    { id: 3, title: 'Contact', icon: contactIcon },
    { id: 4, title: 'Kanban', icon: kanbanIcon },
    { id: 5, title: 'Calendar', icon: calendarIcon },
    { id: 6, title: 'Messages', icon: messageIcon2 },
    { id: 7, title: 'Settings', icon: settingsIcon },
];

const Menu = () => {
    return (
        <nav>
            <ul className="space-y-4">
                {menuItems.map(item =>
                    <MenuItem key={item?.id} item={item} />
                )}
            </ul>
        </nav>
    );
};

export default Menu;