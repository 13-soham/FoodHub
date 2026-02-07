import logo from "../assets/foodhub.png"
import { RiShoppingBag3Line } from "react-icons/ri";

const NavBar = () => {
  return (
    // Changed px-40 to px-6 on mobile, kept md:px-40 for desktop
    // Adjusted py-20 to py-10 on mobile for better screen real estate
    <div className='h-10 w-full flex items-center justify-between px-6 md:px-40 py-10 md:py-20 fixed top-0 left-0 z-50 backdrop-blur-md'>
      <div className="flex gap-3 md:gap-5 items-center">
        <div className='h-12 w-12 md:h-20 md:w-20 bg-amber-100 overflow-hidden flex items-center justify-center p-2 rounded-xl'>
          <img src={logo} alt="lol" className='h-auto w-full' />
        </div>
        {/* Adjusted text size for mobile */}
        <h1 className="text-2xl md:text-4xl font-[montserrat] font-extrabold tracking-tight text-amber-100">FoodHub</h1>
      </div>
      
      <div className="flex gap-4 md:gap-7 items-center justify-between">
        {/* Hidden text links on mobile to prevent clutter; visible on md: (medium screens) */}
        <h1 className="hidden md:block text-amber-100 text-xl">About us</h1>
        <h1 className="hidden md:block text-amber-100 text-xl">Location</h1>
        
        {/* Smaller padding for the button on mobile */}
        <button className="px-4 py-2 md:px-7 md:py-4 text-sm md:text-xl bg-black rounded-xl cursor-pointer active:scale-95 transition-all duration-150">Sign in</button>
        
        {/* Adjusted icon container size for mobile */}
        <div className="h-12 w-12 md:h-17 md:w-17 bg-amber-100 overflow-hidden flex items-center justify-center p-2 rounded-xl cursor-pointer shadow-xl relative">
          <span className="absolute top-0 right-1 md:right-2 text-sm md:text-xl text-red-600 font-extrabold">0</span>
          <RiShoppingBag3Line className="h-full w-full p-2 md:p-3 text-red-600" />
        </div>
      </div>
    </div>
  )
}

export default NavBar;
