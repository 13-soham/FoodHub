import { useNavigate } from "react-router-dom";
import { GiBrokenBottle } from "react-icons/gi"; // A "broken" food icon for the vibe

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="h-screen w-full bg-red-600 flex flex-col items-center justify-center px-6 text-center">
      <div className="bg-amber-100 p-8 rounded-full shadow-2xl mb-8 animate-bounce">
        <GiBrokenBottle className="text-red-600 text-7xl md:text-9xl" />
      </div>

      {/* 404 Text */}
      <h1 className="text-amber-100 font-[poppins] font-extrabold text-7xl md:text-9xl tracking-tighter">
        404
      </h1>
      
      <h2 className="text-white font-[montserrat] text-2xl md:text-4xl font-bold mt-2">
        Oops! Page not found.
      </h2>
      
      <p className="text-amber-100/80 text-lg md:text-xl mt-4 max-w-md">
        Looks like this dish isn't on our menu anymore. Let's get you back to the home kitchen!
      </p>

      <button 
        onClick={() => navigate("/")}
        className="mt-10 px-10 py-4 bg-black text-amber-100 text-xl font-bold rounded-2xl shadow-xl cursor-pointer active:scale-95 transition-all hover:bg-gray-900"
      >
        Back to Home
      </button>
    </div>
  );
};

export default NotFound;