import React, { useEffect, useState } from "react";
import Link from "next/link";
import UserTabBtn from "@/components/profile/userTabBtn";
import WordCloud from "@/components/profile/WordCloud";
import { useAppDispatch, useAppSelector } from "@/hooks";
import { getUser, user } from "@/store/userSlice";
import { TextType, tasteType } from "@/types/DataTypes";
import { authAxios } from "@/api/common";
import MyGraph from "@/components/common/myGraph";
import { useRouter } from "next/router";

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
  const menuData: string[] = ["clearDrinkCnt", "likeDrinkCnt", "likeJumakCnt"];
  const userInfo = useAppSelector(user);
  const tasteDto = userInfo.userPreferenceDto
  const tasteInit : tasteType = {
    tasteBody: 2,
    tasteFlavor: 5,
    tasteRefresh: 4,
    tasteSour: 3,
    tasteSweet: 2,
    tasteThroat: 1,
  }
  const [taste, setTaste] = useState<tasteType>(tasteInit)
  const router = useRouter()
  
  useEffect(()=>{
    if (tasteDto) {
      const data : tasteType = {
        tasteBody: tasteDto.tasteBody,
        tasteFlavor: tasteDto.tasteFlavor,
        tasteRefresh: tasteDto.tasteRefresh,
        tasteSour: tasteDto.tasteSour,
        tasteSweet: tasteDto.tasteSweet,
        tasteThroat: tasteDto.tasteThroat,
      }
      setTaste(data)
    }
  },[userInfo])

  const[texts, setTexts] = useState<TextType[]>([])

  const getTextMining = async () => {
    authAxios.get(`mypage/textmining`
    ).then((res) => {
      setTexts(res.data.words)
    })
  }

  useEffect(() => {
    getTextMining()
  },[])

  const dispatch = useAppDispatch();

  useEffect(() => {
    dispatch(getUser());
  }, []);

  return (
    <>
      <div className="w-screen h-screen bg-gray-200 flex justify-center">
        <div className="w-[1400px] h-[700px] mt-[165px] rounded-lg ">
          {/* 사용자 정보 */}
          <div className="absolute left-[320px] w-[400px] h-[700px] rounded-lg bg-white flex flex-col items-center ">
            <img
              className="absolute z-10 top-[55px] w-[160px] h-[160px] object-cover rounded-full shadow-sm "
              src={userInfo.img}
              alt=""
            ></img>
            <span className="absolute z-10 top-[225px] font-preB text-[23px] text-[#414141]">
              {userInfo.nickname}
            </span>

            <div className="absolute z-10 top-[260px] w-[200px] h-[90px] flex justify-between">
              <div className="absolute z-10 w-[80px] h-[90px] bg-white flex flex-col justify-center items-center">
                <div className=" text-[#7F7F7F]">성별</div>
                <div className="font-preB text-[20px] text-[#414141]">{userInfo.sex? userInfo.sex : '알수없음'}</div>
              </div>
              <div className="absolute z-10 w-[80px] h-[90px] left-[120px] bg-white flex flex-col justify-center items-center">
                <div className=" text-[#7F7F7F]">연령대</div>
                <div className="font-preB text-[20px] text-[#414141] ">
                  {userInfo.age? userInfo.age : '알수없음'}
                </div>
              </div>
            </div>
            <div className={"flex justify-center absolute top-[370px]"}>
              {!tasteDto ? 
                <>
                  <div className={"blur"}>
                    <MyGraph taste={taste} />
                  </div>
                  <div className={"absolute text-center top-[60px] font-preB text-[20px] text-gray-600"}>취향조사 후 <br/> 나만의 전통주를 추천받으세요.</div>
                </>
                :
                <div>
                  <MyGraph taste={taste} />
                </div>
              }
            </div>
            <div onClick={()=>router.push(`/user/prefer`)} className={"absolute bottom-[30px] h-[60px] w-5/6 font-preR texte-[18px] flex justify-center items-center rounded-full px-4 py-2 text-white bg-gradient-to-r from-[#8FAADC] to-[#8FAADC]/70 hover:from-[#809ED4] hover:to-[#809ED4]/70 cursor-pointer transition duration-500 ease-in hover:scale-[102%] hover:font-preM"}>취향조사 하러가기</div>

          </div>
          {/* 텍스트 마이닝 */}
          <div className="absolute w-[870px] h-[468px] rounded-lg left-[740px] bg-white ">
            <div className="abosolute w-[195px] h-[71.5px] border-b-2 ml-[35px]"></div>
            <div className="absolute top-[30px] text-[25px] text-[#414141] font-preM  w-[800px] h-[420px] left-[40px] ">
              나의 맞춤형 키워드
              <div className="absolute w-[800px] h-[365px] flex justify-center items-center ">
                <WordCloud
                  data={texts}
                  width={700}
                  height={330}
                />
              </div>
            </div>
          </div>
          {/* 사용자 찜 정보 */}
          <div className="absolute w-[870px] h-[215px] rounded-lg left-[740px] top-[650px] flex justify-between ">
            {[0, 1, 2].map((i) => {
              return (
                <Link href={`/user/detail/${i}`}>
                  <UserTabBtn
                    menuName={menuName[i]}
                    menuData={userInfo[menuData[i]]}
                    id={i + 1}
                  ></UserTabBtn>
                </Link>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
