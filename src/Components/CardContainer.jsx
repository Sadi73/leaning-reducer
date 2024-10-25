import React, { useContext } from 'react';

import CategoryContainer from './CategoryContainer';
import { DataContext } from '../App';

const CardContainer = () => {
    const {allProjects} = useContext(DataContext);

    return (
        <div className="-mx-2 mb-6 flex flex-wrap">
            {Object.entries(allProjects).map(([title, data], index) =>
                <CategoryContainer key={index} title={title} data={data} />
            )}
        </div>
    );
};

export default CardContainer;