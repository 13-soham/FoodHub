import { useNavigate } from "react-router-dom";
import image from "../assets/myPic.jpg"

const AboutUs = () => {
  const navigate = useNavigate();
  return (
    <div className='min-h-screen w-full bg-amber-100 px-4 md:px-10 py-5'>
      <button onClick={() => navigate(-1)} className='w-full md:w-auto mt-2 px-4 py-2 md:px-5 md:py-3 text-sm md:text-xl text-amber-50 bg-red-600 rounded-xl cursor-pointer active:scale-95 transition-all duration-150 hover:bg-red-700'>go back</button>

      <div className='min-h-[80vh] flex flex-col md:flex-row items-center justify-center md:justify-between gap-10 mt-10 md:mt-0'>

        <div className='h-auto md:h-4/5 w-full md:w-3/5 flex flex-col items-center gap-3 md:pt-10 order-2 md:order-1'>
          <h1 className='font-extrabold text-red-700 font-[poppins] text-4xl md:text-5xl'>About myself</h1>
          <p className='font-[montserrat] text-lg md:text-xl text-amber-600 tracking-wide text-center w-full md:w-3/4 leading-7 md:leading-8'>
            I'm Soham from IIIT Kalyani, and I built FoodHub from scratch using React.js and Tailwind CSS. I implemented a component-driven architecture with React Hooks to manage global states like real-time carts and category filtering. By hand-coding custom pagination logic and API-driven data flows, I ensured a high-performance, mobile-responsive interface. Every detail—from the glassmorphic navigation to the interactive sidebar—prioritises a premium, accessible UI/UX. React Documentation | Tailwind CSS
          </p>
        </div>
        
        <div className='h-64 md:h-2/3 w-64 md:w-2/5 overflow-hidden rounded-xl p-2 border-2 border-red-700 shadow-2xl order-1 md:order-2 shrink-0'>
          <img src={image} alt="" className="h-full w-full object-cover rounded-xl" />
        </div>
      </div>
    </div>
  )
}

export default AboutUs;