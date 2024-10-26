import { createContext, useState } from "react";
import MainContainer from "./Components/MainContainer"
import SidebarContainer from "./Components/SidebarContainer"
import { dummyData } from "../public/data";

export const DataContext = createContext({});

function App() {

  const [allProjects, setAllProjects] = useState({
    'To-Do': [],
    'On Progress': [],
    'Done': [],
    'Revise': [],

  })
  // const [allProjects, setAllProjects] = useState({...dummyData})


  return (
    <DataContext.Provider value={{ allProjects, setAllProjects }}>
      <div className="flex h-screen">
        <SidebarContainer />
        <MainContainer />
      </div>
    </DataContext.Provider>
  )
}

export default App
