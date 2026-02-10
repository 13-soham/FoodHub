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
import { useSelector } from 'react-redux';

const HomePage = () => {
  const { SideBar, setSideBar } = useContext(filterContext);
  const elements = useSelector((state) => state.cart.item);

  let subtotal = elements.reduce((sum, elem) => {
    return sum += elem.qty * elem.price;
  }, 0);

  let delivary_fee = subtotal == 0 ? 0 :
    subtotal > 0 && subtotal < 1000 ? 50 :
      subtotal <= 2000 ? 100 : 150;


  let taxes = Math.floor(subtotal * 0.7 / 10);

  let total = subtotal + delivary_fee + taxes;

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

        <div className={`h-screen w-full md:w-[32vw] bg-amber-100 fixed top-0 right-0 z-50 px-5 py-7 transition-transform duration-300 ${SideBar ? "translate-x-0" : "translate-x-full"} flex flex-col gap-3 shadow-2xl overflow-y-auto`}>
          <div className='flex items-center justify-between text-red-700 mb-4'>
            <h1 className='font-bold text-2xl font-[poppins]'>Order Items</h1>
            <div className='p-2 hover:bg-red-100 rounded-full cursor-pointer transition-colors' onClick={() => setSideBar(false)}>
              <RxCross1 className='text-2xl font-bold' />
            </div>
          </div>
          {elements.length > 0 ? (
            <>
              <div className='flex flex-col gap-4'>
                {elements.map((elem) => (
                  <MiniCard key={elem.id} id={elem.id} image={elem.image} name={elem.name} price={elem.price} qty={elem.qty} />
                ))}

                <div className='w-6/7 flex flex-col border-t-2 border-b-2 border-black gap-2 mx-auto py-2 mt-2'>
                  <div className='flex items-center justify-between px-2 text-black'>
                    <h2 className='text-black text-lg'>subtotal</h2>
                    <h2 className='text-black text-lg'>Rs. <span className='text-lg text-amber-400'>{subtotal}</span> /-</h2>
                  </div>
                  <div className='flex items-center justify-between px-2 text-black'>
                    <h2 className='text-black text-lg'>delivary fee</h2>
                    <h2 className='text-black text-lg'>Rs. <span className='text-lg text-amber-400'>{delivary_fee}</span> /-</h2>
                  </div>
                  <div className='flex items-center justify-between px-2 text-black'>
                    <h2 className='text-black text-lg'>taxes</h2>
                    <h2 className='text-black text-lg'>Rs. <span className='text-lg text-amber-400'>{taxes}</span> /-</h2>
                  </div>
                </div>

                <div className='w-6/7 flex flex-col gap-2 mx-auto py-2'>
                  <div className='flex items-center justify-between px-2 text-black'>
                    <h2 className='text-gray-800 font-bold text-xl'>Total</h2>
                    <h2 className='text-gray-800 font-bold text-xl'>Rs. <span className='text-lg text-red-700'>{total}</span> /-</h2>
                  </div>

                  <button className='w-full mt-2 px-4 py-2 md:px-5 md:py-3 text-sm md:text-xl text-amber-50 bg-red-600 rounded-xl cursor-pointer active:scale-95 transition-all duration-150 hover:bg-red-700'>Place Order</button>
                </div>
              </div>
            </>
          ) : (
            <div className='w-fit mt-3 bg-amber-200 flex items-center justify-center p-3 mx-30 rounded-full'>
              <h1 className='text-2xl text-red-900 font-bold font-[poppins]'>empty cart !</h1>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default HomePage;
