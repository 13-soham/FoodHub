import { TbMichelinStarGreen } from "react-icons/tb";
import { GiChickenOven } from "react-icons/gi";

const Card = ({image, name, price, type}) => {
    return (
        <div className="my-5 mx-3">
            <div className="h-[50vh] w-[21vw] bg-amber-50 rounded-xl flex flex-col gap-3 px-3 py-5 shadow-xl hover:bg-amber-100">
                <div className="h-3/5 w-full overflow-hidden shrink-0 rounded-xl">
                    <img src={image} alt="" className="h-full w-full object-cover" />
                </div>
                <div className="h-2/5 flex flex-col gap-2">
                    <div className="text-2xl font-semibold">{name}</div>
                    <div className="flex items-center justify-between">
                        <div className="text-xl">Rs <span className="font-bold">{price}</span>/-</div>
                        <div className="flex gap-1 items-center">
                            {type === "veg" ? (
                                <>
                                    <TbMichelinStarGreen className="text-xl text-green-600"/> <span className="text-xl">{type}</span>
                                </>
                            ) : (
                                <>
                                    <GiChickenOven className="text-xl text-amber-400"/> <span className="text-xl">{type}</span>
                                </>
                            ) }
                        </div>
                    </div>
                    <button className="px-4 py-2 md:px-5 md:py-3 text-sm text-amber-50 md:text-xl bg-red-600 rounded-xl cursor-pointer active:scale-95 transition-all duration-150 hover:bg-red-700">Add to Dish</button>
                </div>
            </div>
        </div>
    )
}

export default Card;