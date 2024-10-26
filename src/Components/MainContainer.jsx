import React, { useContext, useState } from 'react';
import Header from './Header';
import CardContainer from './CardContainer';
import { DataContext } from '../App';
import AddTaskModal from './AddTaskModal';
import ButtonContainer from './ButtonContainer';

const MainContainer = () => {

    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);

    const { allProjects } = useContext(DataContext);

    return (
        <main className="flex-1 overflow-y-auto overflow-x-hidden">

            {addTaskModalVisible && <AddTaskModal onClose={() => setAddTaskModalVisible(false)} />}

            <Header />

            <div className="mx-auto max-w-7xl p-6 bg-black min-h-screen">
                <ButtonContainer
                    setAddTaskModalVisible={setAddTaskModalVisible}
                />

                {Object.entries(allProjects)?.length > 0 ? <CardContainer /> : <p className='text-white text-center font-bold'>No Data Available</p>}


            </div>
        </main>
    );
};

export default MainContainer;