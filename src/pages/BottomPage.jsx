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
        {AllFood.map((elem, id) => (
          <Card key={id}
            image={elem.food_image}
            name={elem.food_name}
            type={elem.food_type}
            id={elem.id}
            price={elem.price}
          />
        ))}
      </div>
    </div>
  )
}

export default BottomPage;