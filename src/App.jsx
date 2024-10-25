import { createContext } from "react";
import { dummyData } from "../public/data"
import MainContainer from "./Components/MainContainer"
import SidebarContainer from "./Components/SidebarContainer"

export const DataContext = createContext({});

function App() {

  const allProjects = dummyData;

  return (
    <DataContext.Provider value={{ allProjects }}>
      <div className="flex h-screen">
        <SidebarContainer />
        <MainContainer />
      </div>
    </DataContext.Provider>
  )
}

export default App
