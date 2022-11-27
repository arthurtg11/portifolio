import { useState, useEffect } from "react";
export function useWindowSize() {
  const [windowSize, setWindowSize] = useState({
    width: undefined,
    height: undefined,
  });
  useEffect(() => {
    function handleResize() {
      setWindowSize({
        width: window.innerWidth,
        height: window.innerHeight,
      });
    }
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return windowSize;
}

export function idade(nascimento, hoje) {
  var diferencaAnos = hoje.getFullYear() - nascimento.getFullYear();
  if ( new Date(hoje.getFullYear(), hoje.getMonth(), hoje.getDate()) < 
       new Date(hoje.getFullYear(), nascimento.getMonth(), nascimento.getDate()) )
      diferencaAnos--;
  return diferencaAnos;
}