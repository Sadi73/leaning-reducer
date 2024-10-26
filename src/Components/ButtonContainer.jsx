import React from 'react';
import addIcon from '../assets/addIcon.svg';

const ButtonContainer = ({ setAddTaskModalVisible }) => {
    return (
        <div className="mb-6 flex items-center justify-between">
            <h2 className="text-2xl font-bold text-white">Projectify</h2>
            <div className="flex space-x-2">
                <button
                    className="flex items-center rounded-md bg-gray-700 px-4 py-2 text-white"
                    onClick={() => setAddTaskModalVisible(true)}
                >
                    <img src={addIcon} className='h-6 mr-2' />
                    Add
                </button>
            </div>
        </div>
    );
};

export default ButtonContainer;