import { useContext } from "react";
import logo from "../assets/foodhub.png"
import { RiShoppingBag3Line } from "react-icons/ri";
import { filterContext } from "../context/DataContext";
import { useSelector } from "react-redux";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  const { setSideBar } = useContext(filterContext);
  const elements = useSelector((state) => state.cart.item);
  return (
    <div className='h-16 md:h-20 w-full flex items-center justify-between px-4 md:px-40 py-8 md:py-20 fixed top-0 left-0 z-50 backdrop-blur-md bg-red-600/50'>
      <div className="flex gap-2 md:gap-5 items-center">
        <NavLink to="/" className="flex items-center gap-2">
          <div className='h-10 w-10 md:h-20 md:w-20 bg-amber-100 overflow-hidden flex items-center justify-center p-1 md:p-2 rounded-xl'>
            <img src={logo} alt="lol" className='h-auto w-full' />
          </div>
          <h1 className="text-xl md:text-4xl font-[montserrat] font-extrabold tracking-tight text-amber-100">FoodHub</h1>
        </NavLink>
      </div>
      
      <div className="flex gap-3 md:gap-7 items-center">
        <NavLink to="/restaurant">
          <h1 className="text-xs md:text-xl text-amber-100 font-semibold cursor-pointer hover:text-white transition-colors">Restaurant</h1>
        </NavLink>
        <NavLink to="/about">
          <h1 className="text-xs md:text-xl text-amber-100 font-semibold cursor-pointer hover:text-white transition-colors">About</h1>
        </NavLink>
        
        <button className="hidden sm:block px-3 py-2 md:px-7 md:py-4 text-xs md:text-xl bg-black text-white rounded-xl cursor-pointer active:scale-95 transition-all duration-150">Sign in</button>
        
        <div className="h-10 w-10 md:h-17 md:w-17 bg-amber-100 overflow-hidden flex items-center justify-center p-1 md:p-2 rounded-xl cursor-pointer shadow-xl relative" onClick={() => setSideBar(true)}>
          <span className="absolute -top-1 -right-1 md:top-0 md:right-2 text-xs md:text-xl text-red-600 font-extrabold bg-white md:bg-transparent px-1 rounded-full">{elements.length}</span>
          <RiShoppingBag3Line className="h-full w-full p-1 md:p-3 text-red-600" />
        </div>
      </div>
    </div>
  )
}

export default NavBar;