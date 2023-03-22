import Head from "next/head";
import Image from "next/image";
import useScroll from "../assets/useScroll";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Button, ButtonGroup, useColorModeValue } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/Ai";

export default function Home() {
  const scroll = useScroll();
  const isScrolled: boolean = scroll > 1250;
  const translateY = isScrolled ? `${scroll - 1250}px` : "0px";
  const [scrollY, setScrollY] = useState(0);
  const imageX = scrollY / 5 > 185 ? 185 : scrollY / 5;

  const title: string[] = [
    "아이싱 자몽",
    "뱅꼬레 더감",
    "호산춘",
    "동해밤바다",
  ];
  const info: string[] = [
    "혼술러에게 딱! 새콤 달콤 자몽맛",
    "과하지 않은 달콤함 누구나 좋아함",
    "어르신들이 좋아할 오리지널의 맛",
    "뒤끝없는 깔끔한 맛과 향",
  ];
  const color: string[] = ["#F4BEBF", "#FFEFDD", "#D6F4CF", "#C2E9F5"];

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

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
          className={` ${styles.scrolled} w-[4500px] ${
            isScrolled ? "absolute z-30" : "fixed"
          }  z-20 overflow-hidden `}
          style={{
            top: `${isScrolled ? "1250px" : "10px"}`,
            left: `${-imageX * 14}px`,
          }}
        >
          <Image
            src="/main/part1/white_txt_1.png"
            alt=""
            width={6000}
            height={920}
          />
        </div>
        {/*전통주 배경화면 */}
        <div
          className={` w-[4000px] h-[300px] ${
            isScrolled ? " absolute z-10 top-[1250px]" : "fixed"
          }`}
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
        <div className="absolute  top-[2420px] w-screen h-[1000px]  flex">
          {/* 미리보기 */}
          <div className="absolute">
            {/* <Image src="/main/part2/main2_bg.png" alt="" width={1910} height={100}></Image> */}
          </div>
          <div className="absolute  top-[305px] left-[430px] w-[700px] h-[400px]">
            <div className="absolute text-4xl font-preB text-[#977857]">
              Korea Traditional liquor
            </div>
            <div className="absolute top-[38px] text-[66px] font-preR text-[#3E3E3E]">
              <div className="">한국</div>
              <div className="mt-[-20px] font-preEB">전통주</div>
              <div className="mt-[-20px]">정의</div>
            </div>
            <div className="absolute top-[310px] text-[23px] font-preR text-[#7F7F7F]">
              <p>
                한 나라나 지역 등에 과거에서부터 이어져오는 양조법으로 만든
                술로,
                <br></br>
                전통적인 양조법을 계승 및 보존하여 빚는 술을 칭한다.
              </p>
            </div>
            <div className="absolute left-[420px] top-[410px]">
              <Button
                size="lg"
                fontFamily={"preT"}
                bg="#969696"
                rightIcon={<AiOutlineArrowRight />}
                color="#ffffff"
              >
                전통주 둘러보기
              </Button>
            </div>
          </div>
          <div className="absolute right-0 z-30 top-[200px]">
            <Image
              src="/main/part2/main2_4.png"
              alt=""
              width={800}
              height={0}
            />
          </div>
          {/* 스크롤 애니메이션 */}
          <div className="absolute top-[200px] w-screen h-[300px] ">
            <Image
              className="absolute z-20 ml-[-10px]"
              src="/main/part2/main2_1.png"
              alt=""
              width={400}
              height={0}
            ></Image>
            <Image
              className="absolute z-10 right-0 mt-[-100px]"
              src="/main/part2/main2_2.png"
              alt=""
              width={750}
              height={0}
            ></Image>
            <div className="">
              <Image
                className="absolute opacity-5 z-0"
                src="/main/part2/main2_3.png"
                alt=""
                width={400}
                height={0}
              />
              <Image
                className="absolute top-[500px] left-[1200px] opacity-5 z-0"
                src="/main/part2/main2_3.png"
                alt=""
                width={300}
                height={0}
              />
            </div>
          </div>
        </div>

        {/* PART 3 */}
        <div className="absolute  top-[3500px] w-screen h-[1000px]  flex ">
          {/* <Image src="/main/part3/main3_bg.png" alt="" width={1800} height={200}></Image> */}
          <div className="absolute left-[175px] top-[170px] w-[1000px] h-[300px]">
            <div className="absolute text-[66px] font-preB text-[#977857]">
              전통주 랭킹 서비스를 제공합니다
            </div>
            <div className="absolute top-[110px] font-preR text-[28px] text-[#7F7F7F] ">
              <p>
                최근 가장 인기있는 전통주가 무엇인지 궁금한가요?
                <br></br>
                내가 고른 전통주의 선호도가 궁금한가요?
              </p>
            </div>
            <div className="absolute top-[220px] font-preR text-[28px] text-[#7F7F7F]">
              <p>
                실제 고객들의 리뷰와 별 점수를 바탕으로 한<br></br>
                전통주 랭킹 서비스를 사용해보세요.
              </p>
            </div>
          </div>
          {/* 스크롤 애니메이션 */}
          <div className="absolute left-[770px] top-[345px] w-[1000px] h-[410px]">
            <Image
              className="absolute z-10 left-[300px] drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
              src="/main/part3/main3_1.png"
              alt=""
              width={400}
              height={200}
            ></Image>
            <Image
              className="absolute z-0 top-[35px] drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
              src="/main/part3/main3_2.png"
              alt=""
              width={330}
              height={200}
            ></Image>
            <Image
              className="absolute z-0  top-[35px] left-[600px] drop-shadow-[0_15px_15px_rgba(0,0,0,0.25)]"
              src="/main/part3/main3_3.png"
              alt=""
              width={330}
              height={200}
            ></Image>
          </div>
        </div>

        {/* PART 4 */}
        <div className="absolute  top-[4500px] w-screen h-[1000px]  flex bg-red-200">
          <div className="absolute top-[145px] w-[690px] h-[720px] left-[250px] bg-green-400 opacity-50"></div>
          <Image
            src="/main/part4/part4.png"
            alt=""
            width={1920}
            height={200}
          ></Image>
          <div className="absolute top-[395px] w-[650px] h-[300px] left-[1030px] bg-green-400  ">
            <div className="absolute text-[58px] font-preB">
              간단한 유형검사를 통해
            </div>
            <div className="absolute top-[65px] text-[58px] font-preB">
              전통주 酒BTI
            </div>
            <div className="absolute top-[65px] left-[310px] text-[58px] font-pre ">
              를 확인하세요.
            </div>
            <div className="absolute top-[165px] font-preSB text-[29px]">
              <p>
                유형별 16가지의 전통주와
                <br></br>
                나의 성격과 어울리는 전통주를 확인해보세요.
              </p>
            </div>
          </div>
        </div>

        {/* PART 5 */}
        <div className="absolute  top-[5500px] w-screen h-[1000px]  flex bg-green-200"></div>
      </div>
    </>
  );
}
