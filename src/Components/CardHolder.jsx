import React from 'react';
import filterIcon from '../Assets/filterIcon.svg';
import Card from './Card';

const CardHolder = ({ data }) => {
    const [category, details] = data;

    return (
        <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className={`rounded-lg p-4 ${category === 'To-Do' ? 'bg-indigo-600' : category === 'On Progress' ? 'bg-yellow-500' : category === 'Done' ? 'bg-teal-500' : 'bg-rose-500'}`}>
                <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold">{category} (45)</h3>
                    <img src={filterIcon} className='h-6' />
                </div>

                <div>
                    {details.map((item, index) =>
                        <Card key={index} eachData={item} category={category} />)}
                </div>

            </div>
        </div>
    );
};

export default CardHolder;