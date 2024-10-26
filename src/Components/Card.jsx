import React from 'react';
import deleteIcon from '../assets/deleteIcon.svg';
import editIcon from '../assets/editIcon.svg';
import { chooseColor } from '../utills/Essentials';

const Card = ({ cardItem, handleClickEdit }) => {

    return (
        <div className="mb-4 rounded-lg bg-gray-800 p-4">
            <div className="flex justify-between">
                <h4 className={`mb-2 flex-1 font-semibold text-${chooseColor(cardItem?.category)}`}>
                    {cardItem?.title}
                </h4>

                <div className="flex gap-2">
                    <img src={deleteIcon} className='h-4' />
                    <img src={editIcon} className='h-4' onClick={() => handleClickEdit(cardItem)} />

                </div>
            </div>
            <p className="mb-2 text-sm text-zinc-200">
                {cardItem?.description}
            </p>

            <p className="mt-6 text-xs text-zinc-400">{cardItem?.date}</p>
        </div>
    );
};

export default Card;