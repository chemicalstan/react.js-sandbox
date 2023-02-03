import { useEffect, useState } from "react";

const useCounter = (direction = true) => {
  const [counter, setCounter] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      if (
        direction === false ||
        direction === "backward" ||
        direction === "-" ||
        direction === "negative"
      )
        return setCounter((prevCounter) => prevCounter - 1);
      setCounter((prevCounter) => prevCounter + 1);
    }, 1000);

    return () => clearInterval(interval);
  }, [direction]);

  return counter;
};

export default useCounter;
