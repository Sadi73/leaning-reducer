import React, { useContext, useState } from 'react';
import Header from './Header';
import addIcon from '../assets/addIcon.svg';
import CardContainer from './CardContainer';
import { DataContext } from '../App';
import AddTaskModal from './AddTaskModal';

const MainContainer = () => {

    const [addTaskModalVisible, setAddTaskModalVisible] = useState(false);

    const { allProjects } = useContext(DataContext);

    return (
        <main className="flex-1 overflow-y-auto overflow-x-hidden">

            {addTaskModalVisible && <AddTaskModal onClose={() => setAddTaskModalVisible(false)} />}

            <Header />

            <div className="mx-auto max-w-7xl p-6 bg-black min-h-screen">
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

                {Object.entries(allProjects)?.length > 0 ? <CardContainer /> : <p className='text-white text-center font-bold'>No Data Available</p>}


            </div>
        </main>
    );
};

export default MainContainer;