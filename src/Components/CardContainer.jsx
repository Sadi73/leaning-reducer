import React from 'react';

import { dummyData } from '../../public/data';
import CategoryContainer from './CategoryContainer';

const CardContainer = () => {
    const allProjects = dummyData;

    return (
        <div className="-mx-2 mb-6 flex flex-wrap">
            {Object.entries(allProjects).map(([title, data], index) =>
                <CategoryContainer key={index} title={title} data={data} />
            )}
        </div>
    );
};

export default CardContainer;