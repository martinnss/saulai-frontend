import React, {useState, useEffect} from 'react'



const useOverflow = (ref,answer) => {
    /*
    Los inputs son ref y answer, cuyos valores son:
    - Answer es el texto a verificar si es que se encuentra overflow
    - Ref es el elemento que se verifica si es que está overflow
    Return:
    Boolean que nos dice si está overflow o no
    */
    
    const [isOverflowing, setIsOverflowing] = useState(false);

    
    
    useEffect(() => {
      const checkOverflow = () => {
        if (ref.current) {
          setIsOverflowing(ref.current.scrollHeight > ref.current.clientHeight);
        }
      };
  
      checkOverflow();
      window.addEventListener('resize', checkOverflow);
      return () => window.removeEventListener('resize', checkOverflow);
    }, [ref,answer]);
    
    return isOverflowing;
  };
  
export default useOverflow;