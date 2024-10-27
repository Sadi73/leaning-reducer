import React from 'react';
import filterIcon from '../assets/filterIcon.svg';
import Card from './Card';
import { chooseColor } from '../utills/Essentials';

const CategoryContainer = ({ title, data, handleClickEdit, handleDelete }) => {

    return (
        <div className="mb-4 w-full px-2 sm:w-1/2 md:w-1/4">
            <div className={`rounded-lg p-4 bg-${chooseColor(title)}`}>
                <div className="mb-2 flex items-center justify-between">
                    <h3 className="text-lg font-semibold text-white">{title} ({data?.length})</h3>
                    <img src={filterIcon} />
                </div>

                <div>
                    {data?.length > 0 ? data.map(item =>
                        <Card
                            key={item?.id}
                            cardItem={item}
                            handleClickEdit={handleClickEdit}
                            handleDelete={handleDelete}
                        />
                    ) :
                        <div className="mb-4 rounded-lg bg-gray-800 p-4">
                            <p className='text-white text-center font-bold'>No Item Found</p>
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default CategoryContainer;