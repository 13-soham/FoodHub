import { useContext, useEffect, useState } from "react";
import { IoSearch } from "react-icons/io5";
import { filterContext } from "../context/DataContext";
import { food_items } from "../food"; 

const SearchBar = () => {
    const { Search, setSearch, setAllFood } = useContext(filterContext);
    useEffect(()=>{
        let newList = food_items.filter((elem)=> elem.food_name.toLowerCase().includes(Search) || elem.food_name.includes(Search));
        setAllFood(newList);
    },[Search]);

    return (
        <div className='flex flex-col items-center justify-between gap-5 px-4'>
            <h1 className='text-amber-100 text-xl md:text-3xl text-center font-[poppins] font-extrabold mb-2 leading-tight'>
                Taste meets speed. The ultimate shortcut to your favorite
                <br className="hidden md:block" />
                flavors. Only in FoodHub!
            </h1>
            
            <form onSubmit={(e)=> e.preventDefault()} className='w-full md:w-2/5 flex items-center gap-3'>
                <input 
                    type="text" 
                    placeholder="Search anything" 
                    className="p-4 h-12 md:h-15 w-full bg-amber-100 rounded-xl text-gray-800 text-lg md:text-xl outline-none shadow-2xl"
                    onChange={ (e)=> setSearch(e.target.value) }
                    value={Search}
                />
                <div className="h-12 w-16 md:h-15 md:w-20 bg-amber-100 flex items-center justify-center p-2 rounded-xl cursor-pointer shadow-2xl">
                    <IoSearch className="h-full w-full p-2 md:p-3 text-red-600" />
                </div>
            </form>
        </div>
    )
}

export default SearchBar;