import { useEffect, useState } from "react";

const useCounter = (forwaed = true) => {
    const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if(forwaed){
        setCounter((prev) => prev + 1)
      }else{
        setCounter((prev) => prev - 1)
      }
      
    }, 1000);

    return () => clearInterval(interval);
  }, [forwaed]);

  return counter;
}

export default useCounter;