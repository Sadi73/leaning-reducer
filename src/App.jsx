import { createContext, useState } from "react";
import { dummyData } from "../public/data"
import MainContainer from "./Components/MainContainer"
import SidebarContainer from "./Components/SidebarContainer"

export const DataContext = createContext({});

function App() {

  const [allProjects, setAllProjects] = useState({
    'To-Do': [],
    'On Progress': [],
    'Done': [],
    'Revise': [],

  })


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
