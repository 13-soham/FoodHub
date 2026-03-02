import { useContext, useState } from 'react';
import categories from '../Categoey';
import Card from '../components/Card';
import { food_items } from '../food';
import { filterContext } from '../context/DataContext';


const BottomPage = () => {
  const { Search, AllFood, setAllFood } = useContext(filterContext);

  function filterHandler(category) {
    if (category === "All") {
      setAllFood(food_items);
    }
    else {
      let newList = food_items.filter((elem) => elem.food_category == category);
      setAllFood(newList);
    }
  }
  return (
    <div className='min-h-screen w-full px-4 md:px-10'>
      {!Search ? (
        <div className='flex flex-wrap items-center justify-center md:justify-between mt-10 gap-4 md:gap-0'>
          {categories.map((elem, id) => {
            return (
              <div key={id} className='h-32 w-32 md:h-50 md:w-50 bg-amber-100 flex flex-col items-center justify-center gap-3 md:gap-7 text-sm md:text-xl text-gray-700 font-bold font-[poppins] rounded-xl shadow-xl cursor-pointer hover:bg-amber-200 transition-all duration-150' onClick={() => filterHandler(elem.name)}>
                <span className="text-3xl md:text-5xl">{elem.image}</span>
                {elem.name}
              </div>
            )
          })}
        </div>
      ) : null}

      <div className='flex flex-wrap items-center justify-center md:justify-start gap-3 mt-10'>
        {AllFood.length > 0 ? (
          AllFood.map((elem, id) => (
            <Card key={id}
              image={elem.food_image}
              name={elem.food_name}
              type={elem.food_type}
              id={elem.id}
              price={elem.price}
            />
          ))
        ) : (
          <div className="flex flex-col items-center justify-center w-full py-20 animate-fade-in">
            <div className="bg-amber-100 px-8 py-10 rounded-full mb-6 shadow-xl">
              <span className="text-9xl">🍽️</span>
            </div>
            <h2 className="text-3xl md:text-3xl font-extrabold text-red-700 font-[poppins] mb-2">
              No Food Found
            </h2>
            <p className="text-gray-500 text-center max-w-xs md:max-w-md px-4 font-[poppins]">
              We couldn't find any dishes matching your choice. Try selecting another category!
            </p>
            <button
              onClick={() => filterHandler("All")}
              className="mt-6 px-6 py-2 text-2xl bg-amber-400 hover:bg-amber-500 text-white font-bold rounded-lg transition-all shadow-md active:scale-95 cursor-pointer"
            >
              Show All Food
            </button>
          </div>
        )}
      </div>
    </div>
  )
}

export default BottomPage;
