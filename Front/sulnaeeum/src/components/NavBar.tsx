import Link from "next/link";
import styles from "../pages/styles.module.css";
import React from "react";
import Image from "next/image";
import { useState } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";

function Navbar() {
  const [hover, setHover] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const menu: string[] = ["전통주", "지도", "랭킹", "추천", "전통주 유형검사"];
  const url: string[] = ["/list", "/map", "/rank", "/recommend", "/jubti"];
  const menuTab = [
    ["탁주", "약주/청주", "과실주", "증류주", "기타 주류"],
    ["양조장", "전통주 축제", "체험 프로그램"],
    ["랭킹"],
    ["나만의 전통주", "선물하기", "오늘의 시리즈"],
    ["검사하기"],
  ];
  const menuTabUrl = ['sort="이름"?type=', "tab=", "", "tab=", ""];

  //
  return (
    <nav className="fixed z-50">
      <ul className="hover:border-b hover:pb-[1px] h-[62px] w-screen text-[17px] flex justify-between items-center border-b-2 bg-white">
        <li className="max-[990px]:w-[200px] max-[990px]:pl-[30px] w-[270px] pl-[165px]">
          <Link href={"/"}>
            <Image
              className={`absolute z-10 top-[10px]`}
              src="/logo/logo_1.png"
              alt=""
              width={90}
              height={50}
            ></Image>

            <div className={`${hover == "On" ? "" : "hidden"}`}>
              <Image
                className={`${styles.slowDown} absolute z-10 left-[200px] top-[50px]`}
                src="/logo/술.png"
                alt=""
                width={60}
                height={50}
              ></Image>
              <Image
                className={`${styles.Down} transition absolute z-10 left-[170px] top-[80px]`}
                src="/logo/내.png"
                alt=""
                width={60}
                height={50}
              ></Image>
              <Image
                className={`${styles.rapidDown} absolute z-10 delay-1000 left-[229px] top-[80px]`}
                src="/logo/음.png"
                alt=""
                width={60}
                height={50}
              ></Image>
            </div>
          </Link>
        </li>
        <li
          onMouseEnter={() => setHover("On")}
          onMouseLeave={() => setHover("")}
          className={`max-[900px]:hidden ${
            hover == "On" ? "z-10 h-[330px] mt-[419px]" : ""
          } flex justify-around w-[700px] mt-[130px] mb-[127px]`}
        >
          {menu.map((v, i) => {
            return (
              <Link href={url[i] + ""} key={i}>
                <div className="hover:border-b-2 hover:border-[#B58269] text-neutral-600 hover:font-preEB font-preM w-[110px] pt-[9px] h-[42px] text-center">
                  {v}
                  {hover == "On" ? (
                    <ul className="items-center text-center pt-[18px]">
                      {menuTab[i].map((val, idx) => {
                        return (
                          // 각 페이지 URL 넣어야함
                          <Link
                            href={`${url[i]}?${menuTabUrl[i]}"${val}"`}
                            key={idx}
                          >
                            <li className="hover:font-preB text-neutral-500 font-preR text-[16px] mt-[17px] ">
                              {val}
                            </li>
                          </Link>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              </Link>
            );
          })}
        </li>
        <li className="max-[900px]:hidden w-[290px] pl-[20px] flex font-preL">
          <button>검색</button>
          <Link href={"/user"}>
            <div className="pl-[40px]">로그인</div>
          </Link>
        </li>
      </ul>
      {hover == "On" ? (
        <div className="drop-shadow-lg absolute z-0 h-[280px] w-screen bg-white"></div>
      ) : (
        ""
      )}
    </nav>
  );
}

export default Navbar;
