import React from 'react';
import Header from './Header';
import addIcon from '../assets/addIcon.svg';
import CardContainer from './CardContainer';

const MainContainer = () => {
    return (
        <main className="flex-1 overflow-y-auto overflow-x-hidden">

            <Header />


            <div className="mx-auto max-w-7xl p-6 bg-black">
                <div className="mb-6 flex items-center justify-between">
                    <h2 className="text-2xl font-bold text-white">Projectify</h2>
                    <div className="flex space-x-2">
                        <button
                            className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                        >
                            <img src={addIcon} className='h-6 mr-2' />
                            Add
                        </button>
                    </div>
                </div>

                <CardContainer />
            </div>
        </main>
    );
};

export default MainContainer;