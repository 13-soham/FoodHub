import { useState } from 'react';
import categories from '../Categoey';
import Card from '../components/Card';
import { food_items } from '../food';

const BottomPage = () => {
  const [AllFood, setAllFood] = useState(food_items);
  function filterHandler(category){
    if(category === "All"){
      setAllFood(food_items);
    }
    else{
      let newList = food_items.filter((elem)=> elem.food_category == category);
      setAllFood(newList);
    }
  }
  return (
    <div className='min-h-screen w-full px-10'>
      <div className='flex flex-wrap items-center justify-between mt-10'>
        {categories.map((elem, id) => {
          return <div key={id} className='h-50 w-50 bg-amber-100 flex flex-col items-center justify-center gap-7 text-xl text-gray-700 font-bold font-[poppins] rounded-xl shadow-xl cursor-pointer hover:bg-amber-200 transition-all duration-150' onClick={()=> filterHandler(elem.name)}>
            {elem.image}
            {elem.name}
          </div>
        })}
      </div>

      <div className='flex flex-wrap gap-3 mt-5'>
        {AllFood.map((elem, id)=>(
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