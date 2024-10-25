import React from 'react';

const MenuItem = ({ item }) => {
    return (
        <li>
            <a href="#" className="flex items-center text-white">
                <img src={item?.icon} className='h-6 w-6 mr-2' />
                {item?.title}
            </a>
        </li>
    );
};

export default MenuItem;