import { useEffect, useState } from 'react'
import { Items } from '../API/ItemApi';
import { MdOutlineSkipPrevious } from "react-icons/md";
import { MdOutlineSkipNext } from "react-icons/md";
import { useNavigate } from 'react-router-dom';

const RestaurantPage = () => {
  const navigate = useNavigate();
  const [Data, setData] = useState([]);
  const [CurrPage, setCurrPage] = useState(1);
  useEffect(() => {
    async function fetchData() {
      let list = await Items();
      if (list) {
        setData(list);
      }
    }
    fetchData();
  }, []);

  let maxPerPage = 12;
  let lastPage = CurrPage * maxPerPage;
  let firstPage = lastPage - maxPerPage;
  let currData = Data.slice(firstPage, lastPage);

  let list = [];
  let totalPage = Math.ceil(Data.length / maxPerPage);
  for (let i = 1; i <= totalPage; i++) {
    list.push(i);
  }

  return (
    <div className='min-h-screen w-full bg-amber-50 px-4 md:px-10 py-5'>
      <button onClick={() => navigate(-1)} className='w-full md:w-auto mt-2 px-4 py-2 md:px-5 md:py-3 text-sm md:text-xl text-amber-50 bg-red-600 rounded-xl cursor-pointer active:scale-95 transition-all duration-150 hover:bg-red-700'>go back</button>

      <div className='min-h-10 w-full md:w-100 md:px-2 flex flex-wrap items-center justify-center md:justify-between mx-auto my-6 gap-2'>
        <button disabled={CurrPage == 1} className="disabled:opacity-30">
          <MdOutlineSkipPrevious onClick={() => setCurrPage(CurrPage - 1)} className='text-3xl md:text-xl text-gray-800 cursor-pointer' />
        </button>
        <div className="flex gap-2">
          {list.map((e) => (
            <button key={e} onClick={() => setCurrPage(e)} className={`px-3 py-2 rounded-lg text-gray-800 cursor-pointer text-sm md:text-base ${CurrPage === e ? "bg-amber-300" : "bg-amber-200 "}`}>{e}</button>
          ))}
        </div>
        <button disabled={CurrPage == totalPage} className="disabled:opacity-30">
          <MdOutlineSkipNext onClick={() => setCurrPage(CurrPage + 1)} className='text-3xl md:text-xl text-gray-800 cursor-pointer' />
        </button>
      </div>

      <div className='flex flex-wrap justify-center md:justify-start gap-7 md:mx-5'>
        {currData.map((elem) => {
          return <div key={elem.itemID} className="w-full md:w-auto">
            <div className='h-auto md:h-70 w-full md:w-80 bg-amber-100 hover:bg-amber-200 border shadow-xl border-red-600 flex flex-col gap-1 p-3 rounded-xl relative'>
              <div className='h-48 md:h-7/11 w-full bg-red-300 overflow-hidden rounded-xl'>
                <img src={elem.imageUrl} alt="" className='h-full w-full object-cover' />
              </div>
              <h1 className='md:absolute md:bottom-[37%] text-lg md:text-xl font-[poppins] text-gray-800 md:text-white/90 font-bold px-2 mt-2 md:mt-0'>{elem.restaurantName}</h1>
              <div className='flex flex-col gap-1 mt-1'>
                <div className='flex items-center justify-between'>
                  <h2 className='text-base md:text-lg text-indigo-600 font-bold font-[montserrat]'>{elem.itemName}</h2>
                  <h2 className='text-base md:text-lg text-red-600 font-bold font-[montserrat] shrink-0'>Rs. <span>{elem.itemPrice}</span> /-</h2>
                </div>
                <p className='text-sm text-gray-600 line-clamp-2'>{elem.itemDescription}</p>
              </div>
            </div>
          </div>
        })}
      </div>
    </div>
  )
}

export default RestaurantPage;