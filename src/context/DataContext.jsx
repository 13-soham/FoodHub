import { createContext, useState } from 'react'
import { food_items } from '../food';
export const filterContext = createContext();

const DataContext = ({ children }) => {
    const [Search, setSearch] = useState("");
    const [AllFood, setAllFood] = useState(food_items);
    const [SideBar, setSideBar] = useState(false)

    const data = {
        Search,
        setSearch,
        AllFood,
        setAllFood,
        SideBar,
        setSideBar
    };
  return (
    <div>
        <filterContext.Provider value={data}>
            { children } 
        </filterContext.Provider>
    </div>
  )
}

export default DataContext;