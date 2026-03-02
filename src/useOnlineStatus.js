// creating a custom hook for checking user online status

import { useEffect, useState } from "react";

const useOnlineStatus = () => {
    const [isOnline, setisOnline] = useState(navigator.onLine);  // navigatior.onLine means it checks initially that user is online or offline
    useEffect(()=>{
        const handleOnline = ()=> setisOnline(true);
        const handleOffline = ()=> setisOnline(false);

        window.addEventListener("online", handleOnline);
        window.addEventListener("offline", handleOffline);

        // CLEANUP FUNCTION: This removes the listeners when the component unmounts
        return ()=>{
            window.addEventListener("online", handleOnline);
            window.addEventListener("offline", handleOffline);
        }
        
    }, []);

  return isOnline; 
}

export default useOnlineStatus;