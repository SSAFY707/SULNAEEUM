import Link from "next/link";
import { useState } from "react";

function Navbar() {
  const [hover, setHover] = useState("");

  const menu: string[] = ["전통주", "지도", "랭킹", "추천", "전통주 유형검사"];
  const url: string[] = ["/list", "/map", "/rank", "recommend"];
  const menuTab = [
    ["탁주", "약주/청주", "과실주", "증류주", "기타 주류"],
    ["경기도", "강원도", "충청도", "전라도", "경상도", "제주도"],
    ["랭킹"],
    ["나만의 전통주 추천"],
    ["선물하기"],
    ["검사하기"],
  ];

  //
  return (
    <nav>
      <ul className="h-[50px] text-[15px] flex justify-between items-center border-b-2  ">
        <li className="w-[200px] pl-[120px]">
          <Link href={"/"}>로고부분</Link>
        </li>
        <li
          onMouseEnter={() => setHover("menuOn")}
          onMouseLeave={() => setHover("")}
          className="flex justify-around w-[700px] "
        >
          {menu.map((v, i) => {
            return (
              <Link href={url[i] + ""}>
                {/* 배경색 흰색으로 하면 안돼나요...... 끄윽 ㅠ-ㅠ */}
                <div className=" hover:bg-sky-300 hover:h-[220px] hover:mt-[170px] ">
                  <div className="hover:border-b-2 hover:border-[#B58269]  w-[100px] pt-[7px] h-[42px] text-center">
                    {v}
                    {hover == "menuOn" ? (
                      <ul className="items-center text-center mt-[25px]">
                        {menuTab[i].map((val, idx) => {
                          return <li className="mt-[10px]">{val}</li>;
                        })}
                      </ul>
                    ) : (
                      ""
                    )}
                  </div>
                </div>
              </Link>
            );
          })}
        </li>
        <li className="w-[200px] flex">
          <div>검색</div>
          <Link href={"/user"}>
            <div className="pl-[40px]">로그인</div>
          </Link>
        </li>
      </ul>
      {/* {hover == "menuOn" ? (
        <div className="flex justify-center h-[170px] w-screen bg-sky-400">
          <div className="bg-red-300 w-[660px]"></div>
        </div>
      ) : (
        ""
      )} */}
    </nav>
  );
}

export default Navbar;
