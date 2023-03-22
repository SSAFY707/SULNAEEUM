import Head from "next/head";
import Image from "next/image";
import useScroll from "../assets/useScroll";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Button, ButtonGroup } from '@chakra-ui/react'
import { MdBuild } from 'react-icons/md'
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
  const imageX = scrollY / 5 > 185 ? 185 : scrollY / 5;

  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <div className="h-[7000px] overflow-hidden scroll-smooth">
        <div className="text-red-600 fixed z-30 right-1/2 top-1/2">
          <p>Scroll Value : {scroll}</p>
          <p>translateY :{translateY}</p>
          <p>image : {imageX}</p>
        </div>

        

      {/* PART 1 */}
        {/*흰 텍스트1 */}
        <div
          className={` ${styles.scrolled} w-[4500px] ${ isScrolled ? "absolute z-30" : "fixed"}  z-20 overflow-hidden `}
          style={{ top: `${isScrolled ? "1250px" : "10px"}`, left: `${-imageX * 14}px`,}}
        >
          <Image src="/main/part1/white_txt_1.png" alt="" width={6000} height={920}/>
        </div>
        {/*전통주 배경화면 */}
        <div className={` w-[4000px] h-[300px] ${ isScrolled ? " absolute z-10 top-[1250px]" : "fixed"}`}
        >
          <Image
            className="z-20"
            src="/main/part1/main_1.jpg"
            alt=""
            width={1920}
            height={0}
          />
          <div className=" absolute z-40 top-[650px]">
            <Image
              src="/main/part1/white_txt_2.png"
              alt=""
              width={1920}
              height={0}
            />
          </div>
        </div>
        {/* 한국 전통주 정의 */}
        <div className="absolute left-[220px] top-[2500px]">
          <Image src="/main/part2/main_2.png" alt="" width={1500} height={0} />
        </div>

        

      {/* PART 2 */}
        <div className="absolute top-[2440px] w-screen h-[1000px] bg-blue-200 flex">
          {/* 미리보기 */}
          <div className="absolute">
          {/* <Image src="/main/part2/main2_bg.png" alt="" width={1910} height={100}></Image> */}
          </div>
          <div className="absolute top-[305px] left-[430px] w-[700px] h-[400px]">
            <div className="absolute text-4xl font-preB text-[#977857]">
              Korea Traditional liquor
            </div>
            <div className="absolute top-[38px] text-[66px] font-preEL text-[#3E3E3E]">
              <div className="">한국</div>
              <div className="mt-[-20px] font-preM">전통주</div>
              <div className="mt-[-20px]">정의</div>
            </div>
            <div className="absolute top-[310px] text-[25px] font-preM text-[#5E5E5E]">
              <p>
                한 나라나 지역 등에 과거에서부터 이어져오는 양조법으로 만든 술로,
                <br></br>
                전통적인 양조법을 계승 및 보존하여 빚는 술을 칭한다.
              </p>
            </div>
            <div>
            <Button leftIcon={<MdBuild />} colorScheme='pink' variant='solid'>
              Settings
            </Button>
            </div>
          </div>
          <div className="absolute right-0 top-[230px]">
            <Image src="/main/part2/main2_4.png" alt="" width={800} height={0} />
          </div>
        </div>
      </div>
    </>
  );
}
