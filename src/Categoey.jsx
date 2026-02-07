import { MdOutlineFoodBank } from "react-icons/md";
import { MdOutlineFreeBreakfast } from "react-icons/md";
import { LuSoup } from "react-icons/lu";
import { MdOutlineRamenDining } from "react-icons/md";
import { GiBowlOfRice } from "react-icons/gi";
import { GiFullPizza } from "react-icons/gi";
import { PiHamburgerBold } from "react-icons/pi";


const categories = [
    {
        id : 1,
        name : "All",
        image : <MdOutlineFoodBank className="h-17 w-17 text-amber-400" />
    },
    {
        id : 2,
        name : "breakfast",
        image : <MdOutlineFreeBreakfast className="h-17 w-17 text-amber-400" />
    },
    {
        id : 3,
        name : "soups",
        image : <LuSoup className="h-17 w-17 text-amber-400" />
    },
    {
        id : 4,
        name : "pasta",
        image : <MdOutlineRamenDining className="h-17 w-17 text-amber-400" />
    },
    {
        id : 5,
        name : "main course",
        image : <GiBowlOfRice className="h-17 w-17 text-amber-400" />
    },
    {
        id : 6,
        name : "pizza",
        image : <GiFullPizza className="h-17 w-17 text-amber-400" />
    },
    {
        id : 7,
        name : "burger",
        image : <PiHamburgerBold className="h-17 w-17 text-amber-400" />
    },
];

export default categories;