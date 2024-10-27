import React, { useContext, useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import { DataContext } from '../App';
import AddTaskModal from './AddTaskModal';
import ButtonContainer from './ButtonContainer';

const MainContainer = () => {

    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);
    const [editItem, setEditItem] = useState(null);

    const { allProjects, setAllProjects } = useContext(DataContext);

    const handleClickEdit = (item) => {
        setEditItem(item)
        setAddTaskModalVisible(true);
    };

    const handleDelete = (itemId, category) => {
        setAllProjects(previousValue => ({
            ...previousValue,
            [category]: previousValue[category].filter(item => item?.id !== itemId)
        }))
    };

    return (
        <main className="flex-1 overflow-y-auto overflow-x-hidden">

            {addTaskModalVisible &&
                <AddTaskModal
                    onClose={() => {
                        setEditItem(null);
                        setAddTaskModalVisible(false);
                    }}
                    itemToEdit={editItem}
                />}

            <Header />

            <div className="mx-auto max-w-7xl p-6 bg-black min-h-screen">
                <ButtonContainer
                    setAddTaskModalVisible={setAddTaskModalVisible}
                />

                {Object.entries(allProjects)?.length > 0 ?
                    <CardContainer
                        handleClickEdit={handleClickEdit}
                        handleDelete={handleDelete}
                    /> : <p className='text-white text-center font-bold'>No Data Available</p>}


            </div>
        </main>
    );
};

export default MainContainer;