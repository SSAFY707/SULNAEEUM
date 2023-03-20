import Head from "next/head";
import Image from "next/image";
import useScroll from "../assets/useScroll";
import styles from "./styles.module.css";
import { useRef, useEffect, useState} from 'react';

export default function Home() {
  const scroll = useScroll();
  const isScrolled: boolean = scroll > 1250;
  const translateY = isScrolled ? `${scroll - 1250}px` : "0px";
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  const imageX = (scrollY / 5)>185?185:(scrollY / 5);


  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <div className="h-[7000px] overflow-hidden">
        <div className="text-red-600 fixed z-30 right-1/2 top-1/2">
          <p>Scroll Value : {scroll}</p>
          <p>translateY :{translateY}</p>
          <p>image : {imageX}</p>
        </div>
      
        {/*흰 텍스트1 */}
        <div className={ `${styles.scrolled} w-[4500px] ${isScrolled?"absolute z-30":"fixed"}  z-20 w-[3000px]`} style={{ top:`${isScrolled?"1250px":"10px"}`,  left: `${-imageX*14}px`}}> 
          <Image src="/white_txt_1.png" alt="" width={6000} height={920} />
        </div>

        {/*전통주 배경화면 */}
        <div  className={` w-[4000px] h-[300px] ${isScrolled ? " absolute z-10 top-[1250px]" : "fixed"}`}>
          <Image className="z-20" src="/main_1.jpg" alt="" width={1920} height={0} />
            <div className=" absolute z-40 top-[650px]">
              <Image src="/white_txt_2.png" alt="" width={1920} height={0} />
            </div>
        </div>
        <div className="mt-[280px] bg-sky-400 w-[1920px] h-[1008px]"></div>
      </div>
    </>
  );
}
