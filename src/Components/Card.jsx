import React from 'react';
import editIcon from '../Assets/editIcon.svg';
import deleteIcon from '../Assets/deleteIcon.svg';

const Card = ({ eachData, category }) => {
    return (
        <div className="mb-4 rounded-lg bg-gray-800 p-4">
            <div className="flex justify-between">
                <h4 className={`mb-2 flex-1 font-semibold ${category === 'To-Do' ? 'text-indigo-600' : category === 'On Progress' ? 'text-yellow-500' : category === 'Done' ? 'text-teal-500' : 'text-rose-500'}`}>
                    {eachData?.title}
                </h4>

                <div className="flex gap-2">
                    <img src={deleteIcon} className='h-6' />
                    <img src={editIcon} className='h-6' />

                </div>
            </div>
            <p className="mb-2 text-sm text-zinc-200">
                {eachData?.description}
            </p>

            <p className="mt-6 text-xs text-zinc-400">{eachData?.date}</p>
        </div>
    );
};

export default Card;