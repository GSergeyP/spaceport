import { useEffect, useState } from "react";

const screenResolution = 1200; // Разрешение экрана

const useWindowSize = () => {

  const [size, setSize] = useState<number>(0);
  const updateSize = () => { 
    setSize(window.innerWidth); 
  }
  
  useEffect(() => {
    updateSize();
    window.addEventListener('resize', updateSize);
    return () => window.removeEventListener('resize', updateSize);
  }, []);
  return size;
}

export { screenResolution, useWindowSize };