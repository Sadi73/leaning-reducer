import React, { useReducer, useState } from 'react';
import Sidebar from './Components/Sidebar';
import MainContainer from './Components/MainContainer';

const initialData = {
  'To-Do': [
    {
      id: crypto.randomUUID(),
      title: 'Set up project',
      description: 'Initialize project repository and set up initial configurations.',
      date: '2024-10-28'
    },
    {
      id: crypto.randomUUID(),
      title: 'Design layout',
      description: 'Create wireframes and initial layout design for the project.',
      date: '2024-10-30'
    }
  ],
  'On Progress': [
    {
      id: crypto.randomUUID(),
      title: 'Develop authentication',
      description: 'Implement user authentication using JWT.',
      date: '2024-11-01'
    }
  ],
  'Done': [
    {
      id: crypto.randomUUID(),
      title: 'Gather requirements',
      description: 'Collect project requirements from stakeholders and finalize scope.',
      date: '2024-10-20'
    }
  ],
  'Revise': [
    {
      id: crypto.randomUUID(),
      title: 'Refactor components',
      description: 'Update components for improved performance and readability.',
      date: '2024-10-25'
    }
  ]
};


const App = () => {

  const [allProjects, setAllProjects] = useState(initialData)

  return (
    <div className="bg-gray-900 text-white">
      <div className="flex h-screen">
        <Sidebar />

        <MainContainer allProjects={allProjects} />
      </div>
    </div>
  );
};

export default App;