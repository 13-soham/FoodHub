import foodImage1 from '../assets/chicken.png';
import foodImage2 from '../assets/chowmin.png';
import foodImage3 from '../assets/nuggets.png';
import foodImage4 from '../assets/burger.png';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';
import { RxCross1 } from "react-icons/rx";
import { useContext } from 'react';
import { filterContext } from '../context/DataContext';
import MiniCard from '../components/MiniCard';

const HomePage = () => {
  const { SideBar, setSideBar } = useContext(filterContext);
  return (
    <div className='w-full min-h-screen bg-red-600 text-white overflow-x-hidden relative'>
      <NavBar />
      <div className='mt-32 md:mt-55'>
        <SearchBar />
      </div>
      <div className='min-h-[40vh] md:h-[50vh] w-full grid grid-cols-2 md:grid-cols-4 gap-4 px-6 md:px-10 mt-10 pb-10'>
        <div className='flex items-center justify-center'>
          <img src={foodImage1} alt="" className='h-auto w-full md:-translate-x-10 drop-shadow-xl object-contain' />
        </div>

        <div className='flex items-center justify-center'>
          <img src={foodImage4} alt="" className='h-auto w-full drop-shadow-xl object-contain' />
        </div>

        <div className='flex items-center justify-center'>
          <img src={foodImage3} alt="" className='h-auto w-full drop-shadow-xl object-contain' />
        </div>

        <div className='flex items-center justify-center'>
          <img src={foodImage2} alt="" className='h-auto w-full scale-110 drop-shadow-xl object-contain' />
        </div>

        <div className={`h-screen w-full md:w-[32vw] bg-amber-100 fixed top-0 right-0 z-[100] px-5 py-7 transition-transform duration-300 ${SideBar ? "translate-x-0" : "translate-x-full"} flex flex-col gap-3 shadow-2xl overflow-y-auto`}>
          <div className='flex items-center justify-between text-red-700 mb-4'>
            <h1 className='font-bold text-2xl font-[poppins]'>Order Items</h1>
            <div className='p-2 hover:bg-red-100 rounded-full cursor-pointer transition-colors' onClick={()=>setSideBar(false)}>
                <RxCross1 className='text-2xl font-bold'/>
            </div>
          </div>
          <div className='flex flex-col gap-4'>
             <MiniCard/>
          </div>
        </div>
      </div>
    </div>
  )
}

export default HomePage;
