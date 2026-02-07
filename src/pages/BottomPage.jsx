import categories from '../Categoey';

const BottomPage = () => {
  return (
    <div className='min-h-screen w-full px-7'>
      <div className='flex flex-wrap items-center justify-between mt-10'>
        {categories.map((elem, id) => {
          return <div key={id} className='h-50 w-50 bg-amber-100 flex flex-col items-center justify-center gap-7 text-xl text-gray-700 font-bold font-[poppins] rounded-xl shadow-xl cursor-pointer hover:bg-amber-200 transition-all duration-150'>
            {elem.image}
            {elem.name}
          </div>
        })}
      </div>
    </div>
  )
}

export default BottomPage;