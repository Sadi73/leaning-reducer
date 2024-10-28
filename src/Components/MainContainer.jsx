import React from 'react';
import Header from './Header';
import addIcon from '../Assets/addIcon.svg';

import CategoryContainer from './CategoryContainer';

const MainContainer = ({allProjects}) => {
    return (
        <main className="flex-1 overflow-y-auto overflow-x-hidden">
            <Header />

            <div className="mx-auto max-w-7xl p-6">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold">Projectify</h2>
                    <div className="flex space-x-2">
                        <button
                            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                        >
                            <img src={addIcon} className='h-6' />
                            Add
                        </button>
                    </div>
                </div>

                <CategoryContainer allProjects={allProjects}/>
            </div>
        </main>
    );
};

export default MainContainer;