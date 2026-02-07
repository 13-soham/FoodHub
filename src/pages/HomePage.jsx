import foodImage1 from '../assets/chicken.png';
import foodImage2 from '../assets/chowmin.png';
import foodImage3 from '../assets/nuggets.png';
import foodImage4 from '../assets/burger.png';
import NavBar from '../components/NavBar';
import SearchBar from '../components/SearchBar';

const HomePage = () => {
  return (
    <div className='w-full min-h-screen bg-red-600 text-white overflow-hidden relative'>
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
      </div>
    </div>
  )
}

export default HomePage;
