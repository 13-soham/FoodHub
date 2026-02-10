import { useDispatch, useSelector } from "react-redux";
import image4 from "../assets/image4.avif";
import { RiDeleteBin6Line } from "react-icons/ri";
import { addItem, addQty, deleteItem, deleteQty } from "../redux/features/AddtoCart";

const MiniCard = ({ id, image, name, price, qty }) => {
    const dispatch = useDispatch();

    function deleteHandler(id){
        dispatch(deleteItem(id));
    }
  return (
    <div className='h-35 w-full bg-red-700 flex rounded-md shadow-xl p-2'>
        <div className='h-full w-3/4 flex'>
            <div className='h-full w-3/5 p-1 '>
                <img src={image} alt="lol" className="h-full w-full object-cover rounded-md"/>
            </div>
            <div className='h-full w-2/5 flex flex-col items-start justify-between p-2'>
                <h1 className="text-lg">{name}</h1>
                <div className="h-2/5 w-4/5 flex items-center justify-center gap-2 bg-amber-100 rounded-md border border-red-700 text-black">
                    <button onClick={()=> dispatch(deleteQty(id))} className="w-1/4 text-2xl cursor-pointer p-2 active:scale-95 transition-all duration-100">-</button>
                    <span className="h-full w-2/4 bg-slate-200 flex items-center justify-center text-xl">{qty}</span>
                    <button onClick={()=> dispatch(addQty(id))} className="w-1/4 text-2xl cursor-pointer pr-2 active:scale-95 transition-all duration-100">+</button>
                </div>
            </div>
        </div>
        <div className='h-full w-1/4 flex flex-col items-end justify-between pr-3 py-2'>
            <div className="text-lg text-red-700 bg-amber-100 p-2 rounded-md">Rs. <span className="font-semibold">{price}</span> /-</div>
            <RiDeleteBin6Line onClick={()=> deleteHandler(id)} className="text-2xl text-amber-50 cursor-pointer"/>
        </div>
    </div>
  )
}

export default MiniCard;