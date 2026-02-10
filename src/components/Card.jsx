import { TbMichelinStarGreen } from "react-icons/tb";
import { GiChickenOven } from "react-icons/gi";
import { useDispatch, useSelector } from 'react-redux'
import { addItem } from "../redux/features/AddtoCart";

const Card = ({ image, name, price, type, id }) => {
    let dispatch = useDispatch();
    return (
        <div className="my-5 mx-3">
            <div className="h-auto md:h-[50vh] w-full md:w-[21vw] bg-amber-50 rounded-xl flex flex-col gap-3 px-3 py-5 shadow-xl hover:bg-amber-100 transition-colors">
                <div className="h-48 md:h-3/5 w-full overflow-hidden shrink-0 rounded-xl">
                    <img src={image} alt="" className="h-full w-full object-cover" />
                </div>

                <div className="h-auto md:h-2/5 flex flex-col gap-2">
                    <div className="text-xl md:text-2xl font-semibold text-gray-800">{name}</div>
                    <div className="flex items-center justify-between">
                        <div className="text-lg md:text-xl text-gray-700">Rs <span className="font-bold">{price}</span>/-</div>
                        <div className="flex gap-1 items-center">
                            {type === "veg" ? (
                                <>
                                    <TbMichelinStarGreen className="text-xl text-green-600" />
                                    <span className="text-lg md:text-xl text-gray-700 capitalize">{type}</span>
                                </>
                            ) : (
                                <>
                                    <GiChickenOven className="text-xl text-amber-500" />
                                    <span className="text-lg md:text-xl text-gray-700 capitalize">{type}</span>
                                </>
                            )}
                        </div>
                    </div>
                    <button onClick={()=> dispatch(addItem({ id, image, name, price, qty : 1 })) } className="w-full mt-2 px-4 py-2 md:px-5 md:py-3 text-sm md:text-xl text-amber-50 bg-red-600 rounded-xl cursor-pointer active:scale-95 transition-all duration-150 hover:bg-red-700">
                        Add to Dish
                    </button>
                </div>
            </div>
        </div>
    )
}

export default Card;
