import React from "react";
import Link from "next/link";
import Head from "next/head";
import Image from "next/image";
import { Divider } from "@chakra-ui/react";
import UserTabBtn from "@/components/profile/userTabBtn";
import UserTextMining from "@/components/profile/userTextMining";

export default function profile() {
  // API 통신해서 사용자 가져오기 => Slice에서 가져오면 될 거 같음..?
  interface userInfo {
    name: string;
  }

  const menuName: string[] = [
    "내가 클리어 한 전통주",
    "내가 찜 한 전통주",
    "내가 찜 한 전통주 가게",
  ];
  // API 통신해서 menuData에 담아두기 => Slice에서 가져오면 될 거 같음..?
  const menuData: string[] = ["100병", "100병", "100곳"];
  const tabInfo = {
    menuName,
    menuData,
  };

  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <div className="w-screen h-screen bg-gray-100 flex justify-center">
        <div className="w-[1200px] h-[700px] mt-[165px] rounded-lg  bg-red-300 ">
          {/* 사용자 정보 */}
          <div className="absolute w-[312px] h-[700px] rounded-lg  bg-blue-300  flex flex-col items-center ">
            <img
              className="absolute z-10 top-[75px] w-[160px] h-[160px] object-cover rounded-full "
              src="/images/profile/sample_profile.jpg"
              alt=""
            ></img>
            <span className="absolute z-10 top-[245px] font-preB text-[23px] text-[#414141]">
              오하늘 우아악
            </span>
            <span className="absolute z-10 top-[275px] font-preL text-[15px] text-[#414141]">
              ssafy1234@ssafy.com
            </span>
            <div className="absolute z-10 top-[320px] w-[200px] h-[90px] bg-red-300 flex justify-between">
              <div className="absolute z-10 w-[80px] h-[90px] bg-green-400 flex flex-col justify-center items-center">
                <div className=" text-[#7F7F7F]">성별</div>
                <div className="font-preB text-[20px] text-[#414141]">여자</div>
              </div>
              <div className="absolute z-10 w-[80px] h-[90px] left-[120px] bg-fuchsia-500 flex flex-col justify-center items-center">
                <div className=" text-[#7F7F7F]">연령대</div>
                <div className="font-preB text-[20px] text-[#414141] ">
                  40대
                </div>
              </div>
            </div>
            <Divider orientation="horizontal" />
            <div className="absolute z-10 top-[420px] w-[200px] h-[90px] bg-red-300 flex justify-between">
              <div className="absolute text-[#7F7F7F] left-[22px]">
                전통주 상위
              </div>
              <div className="absolute font-preSB text-[#0F48DA] text-[40px] top-[20px] left-[60px]">
                10%
              </div>
            </div>
          </div>
          {/* 텍스트 마이닝 */}
          <div className="absolute w-[870px] h-[468px] rounded-lg left-[690px] bg-green-300 opacity-60">
            <div className="absolute top-[15px] text-[25px] font-preEB w-[840px] h-[440px] left-[15px] bg-red-300">
              나의 맞춤형 키워드
              <div className="absolute w-[840px]">
                <UserTextMining></UserTextMining>
              </div>
            </div>
          </div>
          {/* 사용자 찜 정보 */}
          <div className="absolute w-[870px] h-[215px] rounded-lg left-[690px] top-[650px] bg-orange-300 flex justify-between ">
            {menuName.map((menuName, idx) => {
              return (
                <Link href={`/user/detail/${idx}`}>
                  <UserTabBtn tabInfo={tabInfo} id={idx + 1}></UserTabBtn>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
