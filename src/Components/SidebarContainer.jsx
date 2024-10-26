import React from 'react';
import Menu from './Menu';
import AsideHeader from './AsideHeader';

const SidebarContainer = () => {
    return (
        <aside className="hidden w-64 bg-gray-800 p-6 lg:block">
            <AsideHeader />
            <Menu />
        </aside>
    );
};

export default SidebarContainer;