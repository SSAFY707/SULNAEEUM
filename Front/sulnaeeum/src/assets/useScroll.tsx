import { useState, useEffect } from "react";

function useScroll(): number {
  const [scroll, setScroll] = useState(0);

  useEffect(() => {
    function handleScroll() {
      setScroll(window.scrollY);
    }

    const handleWheel = (event: WheelEvent) => {
      // 마우스 휠의 변화량 계산
      const delta = event.deltaY;
      // 이미지의 y축 위치값 계산
      setScroll((prevScroll) => prevScroll + delta);
    };

    window.addEventListener("scroll", handleScroll);
    window.addEventListener("wheel", handleWheel);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("wheel", handleWheel);
    };
  }, []);

  return scroll;
}

export default useScroll;
