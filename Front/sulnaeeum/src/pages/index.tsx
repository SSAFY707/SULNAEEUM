import Head from "next/head";
import Image from "next/image";
import useScroll from "../assets/useScroll";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";
import { Button } from "@chakra-ui/react";
import { AiOutlineArrowRight } from "react-icons/ai";

export default function Home() {
  const scroll = useScroll();
  const isScrolled: boolean = scroll > 1250;
  const translateY = isScrolled ? `${scroll - 1250}px` : "0px";
  const [scrollY, setScrollY] = useState(0);
  const imageX = scrollY / 5 > 166 ? 166 : scrollY / 5;
  const [isVisible, setIsVisible] = useState(false);

  const image5: string[] = [
    "/main/part5/main5_1s.png",
    "/main/part5/main5_2s.png",
    "/main/part5/main5_3s.png",
    "/main/part5/main5_4s.png",
  ];
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
    const handleScroll = () => {
      if (window.scrollY >= 3360) {
        setIsVisible(true);
      }
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <div className="h-[6400px] overflow-hidden scroll-smooth">
        {/* <div className="text-red-600 fixed z-30 right-1/2 top-1/2">
          <p>Scroll Value : {scroll}</p>
          <p>translateY :{translateY}</p>
          <p>image : {imageX}</p>
        </div> */}

        {/* PART 1 */}
        {/*흰 텍스트1 */}
        <div
          className={` ${styles.scrolled} w-[4500px] ${
            isScrolled ? "absolute z-30" : "fixed"
          }  z-20 overflow-hidden left-[-30px] ml-[-180px] mt-[-50px]`}
          style={{

            top: `${isScrolled ? "1250px" : "10px"}`,
            left: `${-imageX * 14}px`,
          }}
        >
          <Image
            src="/main/part1/main1_text1.png"
            alt=""
            width={6000}
            height={1000}
          />
        </div>
        {/*전통주 배경화면 */}
        <div
          className={` w-[4000px] h-[300px] ${
            isScrolled ? " absolute z-10 top-[1230px]" : "fixed"
          }`}
        >

         <video className="absolute top-[190px]" width="1920" height="4500" muted autoPlay loop>
            <source src="/main/part1/배경화면_최종.mp4" type="video/mp4" />
          </video>
          
        {/* <img className=" z-20 absolute top-[0px] w-[1920px] h-[1080px]" src="/main/part1/메인페이지_배경.png" alt=""></img> */}

          {/* <Image
            className={`z-20 absolute top-[-150px]`}
            src="/main/part1/note18_RE.jpg"
            alt=""
            width={1900}
            height={0}
          /> */}
          <div className=" absolute z-40 top-[630px] left-[-110px] ">
            <Image
              src="/main/part1/main1_txt2.png"
              alt=""
              width={2700}
              height={0}
            />
            <div className="absolute left-[1025px] top-[140px]">
          <Image src="/main/part1/white_scroll.gif" alt=" " width={80} height={80}></Image>
          </div>
          </div>
        </div>
        {/* 한국 전통주 정의 */}
        <div className="absolute left-[220px] top-[2500px]">
          <Image src="/main/part2/main_2.png" alt="" width={1500} height={0} />
        </div>

        {/* PART 2 */}
        <div className="absolute  top-[2350px] w-screen h-[1000px]  flex">
          {/* 미리보기 */}
          <div className="absolute">
            {/* <Image src="/main/part2/main2_bg.png" alt="" width={1910} height={100}></Image> */}
          </div>
          <div className="absolute  top-[305px] left-[430px] w-[700px] h-[400px]">
            <div className="absolute text-4xl font-preB text-[#977857]">
              Korea Traditional liquor
            </div>
            <div className="absolute top-[38px] text-[66px] font-preR text-[#393939]">
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
          <div className="absolute right-0 z-30 top-[200px] w-[800px] h-[800px]">
            <Image
              className={`${
                scroll > 2000 ? styles.show2 : styles.hide
              } absolute z-40`}
              src="/main/part2/main2_4.png"
              alt=""
              width={800}
              height={0}
            />
          </div>
          {/* 스크롤 애니메이션 */}
          <div className="absolute top-[200px] w-screen h-[300px] ">
            <Image
              className="
               
              absolute z-20 ml-[-10px]"
              src="/main/part2/main2_1.png"
              alt=""
              width={400}
              height={0}
            ></Image>
            <Image
              className="
            
               absolute z-10 right-0 mt-[-100px]"
              src="/main/part2/main2_2.png"
              alt=""
              width={750}
              height={0}
            ></Image>
            <div className="">
              <Image
                className={`${scroll>2100?styles.opacity4:styles.hide} absolute opacity-5 z-0`}
                src="/main/part2/main2_3.png"
                alt=""
                width={400}
                height={0}
              />
              <Image
                className={`${scroll>2100?styles.opacity4:styles.hide} absolute top-[500px] left-[1200px] opacity-5 z-0`}
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
          <div className="absolute top-[85px] left-[590px] w-[800px] h-[170px]  ">
            <div className="absolute left-[180px] text-[50px] font-preB text-[#393939]">
              개인의 취향에 맞는
            </div>
            <div className="absolute left-[90px] top-[60px] text-[50px] font-preB text-[#977857]">
              나만의 전통주
            </div>
            <div className="absolute left-[360px] top-[60px] text-[50px] font-preB text-[#393939]">
              를 추천합니다.
            </div>
            <div className="absolute left-[10px] top-[135px] text-[23px] font-preR text-[#7F7F7F]">
              선호하는 술, 재료 등을 바탕으로 개인의 취향에 맞는 전통주를
              추천받아 보세요.
            </div>
          </div>
          <div className="absolute top-[330px] left-[305px] w-[1300px] h-[450px] flex">
            {image5.map((v, i) => {
              return (
                <Image
                  key={i}
                  className={`${scroll > 3050 ? styles.show1 : styles.hide} ${styles.part3
                    } mr-[30px] drop-shadow-[3px_10px_10px_rgba(0,0,0,0.12)]`}
                  src={v}
                  alt=""
                  width={300}
                  height={0}
                ></Image>
              );
            })}
          </div>
        </div>

        {/* PART 4 */}
        <div className="absolute  top-[4500px] w-screen h-[1000px]  flex">
          <div
            className={`${
              scroll > 4000 ? styles.show2 : styles.hide
            } absolute top-[100px] w-[600px] h-[620px] left-[320px]  `}
          >
            <Image
              className="absolute top-[50px] left-[60px]"
              src="/main/part4/main4_1s.png"
              alt=""
              width={210}
              height={300}
            ></Image>
            <Image
              className="absolute top-[50px] left-[370px]"
              src="/main/part4/main4_2s.png"
              alt=""
              width={220}
              height={300}
            ></Image>
            <Image
              className="absolute top-[350px] left-[60px]"
              src="/main/part4/main4_3s.png"
              alt=""
              width={215}
              height={300}
            ></Image>
            <Image
              className="absolute top-[350px] left-[390px]"
              src="/main/part4/main4_4s.png"
              alt=""
              width={180}
              height={300}
            ></Image>
          </div>
          {/* <Image
            src="/main/part4/part4.png"
            alt=""
            width={1920}
            height={200}
          ></Image> */}
          <div
            className={` ${
              scroll > 3700 ? styles.opacity : styles.hide
            } absolute top-[315px] w-[700px] h-[300px] left-[1010px] text-[#393939] `}
          >
            <div className="absolute text-[50px] font-preB">
              간단한 유형검사를 통해
            </div>
            <div className="absolute top-[65px] text-[50px] font-preB text-[#977857]">
              전통주 酒BTI
            </div>
            <div className="absolute top-[65px] left-[275px] text-[50px] font-preB text-[#393939] ">
              를 확인하세요.
            </div>
            <div className="absolute top-[150px] left-[3px] font-preR text-[23px] text-[#7F7F7F]">
              <p>
                유형별 16가지의 전통주와
                <br></br>
                나의 성격과 어울리는 전통주를 확인해보세요.
              </p>
            </div>
          </div>
        </div>

        {/* PART 5 */}
        <div className="absolute  top-[5500px] w-screen h-[1000px]  flex ">
          {/* <Image className="opacity-30" src="/main/part5/main5_sample.PNG" alt="" width={1900} height={300}></Image> */}
          {/* <Image src="/main/part3/main3_bg.png" alt="" width={1800} height={200}></Image> */}
          <div
            className={`${
              scroll > 4600 ? styles.opacity : styles.hide
            } absolute left-[260px] top-[170px] w-[1000px] h-[300px]`}
          >
            <div className="absolute text-[50px] font-preB text-[#977857]">
              전통주 랭킹 서비스
            </div>
            <div className="absolute text-[50px] left-[370px] font-preB text-[#393939]">
              를 제공합니다
            </div>
            <div className="absolute top-[90px] font-preR text-[23px] left-[5px] text-[#7F7F7F] ">
              <p>
                최근 가장 인기있는 전통주가 무엇인지 궁금한가요?
                <br></br>
                연령별로 선호하는 전통주가 무엇인지 궁금한가요?
              </p>
            </div>
            <div className="absolute top-[180px] font-preR text-[23px] left-[5px] text-[#7F7F7F]">
              <p>
                실제 고객들의 리뷰와 별 점수를 바탕으로 한<br></br>
                전통주 랭킹 서비스를 사용해보세요.
              </p>
            </div>
          </div>
          {/* 스크롤 애니메이션 */}
          <div className="absolute left-[790px] top-[350px] w-[1000px] h-[410px]">
            <Image
              className={`${
                scroll > 5000 ? styles.opacity2 : styles.hide
              }  absolute z-10 left-[260px] drop-shadow-[3px_10px_10px_rgba(0,0,0,0.12)]`}
              src="/main/part3/main3_1.png"
              alt=""
              width={360}
              height={200}
            ></Image>
            <Image
              className={`${
                scroll > 5250 ? styles.opacity2 : styles.hide
              }  absolute z-0 top-[25px] drop-shadow-[3px_10px_10px_rgba(0,0,0,0.12)]`}
              src="/main/part3/main3_2.png"
              alt=""
              width={310}
              height={200}
            ></Image>
            <Image
              className={`${
                scroll > 5250 ? styles.opacity2 : styles.hide
              } absolute z-0  top-[25px] left-[570px] drop-shadow-[3px_10px_10px_rgba(0,0,0,0.12)]`}
              src="/main/part3/main3_3.png"
              alt=""
              width={310}
              height={200}
            ></Image>
          </div>
        </div>
      </div>
    </>
  );
}
