import React from 'react';
import filterIcon from '../Assets/filterIcon.svg';
import editIcon from '../Assets/editIcon.svg';
import deleteIcon from '../Assets/deleteIcon.svg';
import CardHolder from './CardHolder';

const CategoryContainer = ({ allProjects }) => {


    return (
        <div className="-mx-2 mb-6 flex flex-wrap">

            {
                Object.entries(allProjects).map((item, index) =>
                    <CardHolder
                        key={index}
                        data={item}
                    />
                )
            }

        </div>
    );
};

export default CategoryContainer;