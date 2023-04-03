import Link from "next/link";
import styles from "../pages/styles.module.css";
import React from "react";
import Image from "next/image";
import { useState, useEffect } from "react";
import { useDisclosure } from "@chakra-ui/react";
import { useRef } from "react";
import { defaultAxios, authAxios } from "@/api/common";
import NavSearch from "./common/navSearch";
import { useRouter } from 'next/router'
import { FaRegBookmark } from 'react-icons/fa'
import { BiUser } from 'react-icons/bi'
import { RiHome2Line } from 'react-icons/ri'
import { MdLogout } from 'react-icons/md'
import { IoMdWine } from 'react-icons/io'
import { toastError } from "./common/toast";




function kakaoLogin() {
  window.Kakao.Auth.authorize({

    // 최종 배포이후에는 localhost가 아닌 j8a707 url로 요청해야함
    // redirectUri: 'https://j8a707.p.ssafy.io/user/kakao/callback',
    redirectUri: 'http://localhost:3000/user/kakao/callback',
  });
}

const kakaoLogout = async () => {

  await authAxios.get(`user/kakao/logout`)
    .then((res) => {
      console.log('로그아웃 성공')
      console.log(res)
      sessionStorage.clear()
      location.href = '/'

    }).catch((err) => {
      alert('로그아웃 실패')
      console.log(err)

    })
}

function Navbar() {


  const router = useRouter()

  function selectDrink(id: number, name: string) {
    router.push(`/list/${id}`);
  }
  const [login, setLogin] = useState<boolean>(false)
  const [img, setImg] = useState<string>('')
  useEffect(() => {
    const check = sessionStorage.getItem('isLogin')
    if (check) {
      setLogin(true)
      const img = sessionStorage.getItem('img')
      setImg(img as string)
    } else {
      setLogin(false)
    }
  }, [])


  const [hover, setHover] = useState("");
  const { isOpen, onOpen, onClose } = useDisclosure();
  const btnRef = useRef();

  const menu: string[] = ["전통주", "지도", "랭킹", "추천", "전통주 유형검사"];
  const url: string[] = ["/list?type=전체&sort=이름", "/map", "/rank", "/recommend", "/jubti"];

  const menuTabs = [
    [
      {name: '탁주', url: '/list?type=탁주&sort=이름'},
      {name: '약주/청주', url: '/list?type=약주%2F청주&sort=이름'},
      {name: '과실주', url: '/list?type=과실주&sort=이름'},
      {name: '증류주', url: '/list?type=증류주&sort=이름'},
      {name: '기타', url: '/list?type=기타&sort=이름'},
    ],
    [
      {name: '양조장', url: '/map?tab=양조장'},
      {name: '전통주 축제', url: '/map?tab=전통주 축제'},
      {name: '체험 프로그램', url: '/map?tab=체험 프로그램'},
    ],
    [
      {name: '랭킹', url: '/rank'}
    ],
    [
      {name: '나만의 전통주', url: '/recommend'},
      {name: '선물하기', url: '/recommend'},
      {name: '랜덤 추천', url: '/recommend/today'},
    ],
    [
      {name: '검사하기', url: '/jubti'}
    ],
  ]

  const move = (event, name : string, url : string) => {
    event.stopPropagation()
    if ((name == '랭킹' || name == '나만의 전통주' || name == '선물하기' || name == '추천') && !login) {
      toastError('로그인이 필요한 기능입니다.', '🚨', 'top-right')
      return
    }
    router.push(url)
  }


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
              <Image className={` absolute z-20 top-[100px] left-[130px] opacity-[0.04]`} src="/main/part2/main2_3.png" alt="" width={130} height={130}></Image>
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
          className={`max-[900px]:hidden mr-40 ${hover == "On" ? "z-10 h-[330px] mt-[419px]" : ""
            } flex justify-around w-[700px] mt-[130px] mb-[127px]`}
        >
          {menu.map((v, i) => {
            return (
              <div onClick={(e)=>move(e, v, url[i])} key={i}>
                <div className="hover:border-b-2 hover:border-[#B58269] text-neutral-600 hover:font-preEB font-preM w-[110px] pt-[9px] h-[42px] text-center">
                  {v}
                  {hover == "On" ? (
                    <ul className="items-center text-center pt-[18px]">
                      {menuTabs[i].map((tab, idx) => {
                        return (
                          // 각 페이지 URL 넣어야함
                          <div
                            onClick={(e)=>{e.preventDefault(); move(e, tab.name, tab.url)}}
                            key={idx}
                          >
                            <li className="hover:font-preB text-neutral-500 font-preR text-[16px] mt-[17px] cursor-pointer">
                              {tab.name}
                            </li>
                          </div>
                        );
                      })}
                    </ul>
                  ) : (
                    ""
                  )}
                </div>
              </div>
            );
          })}
        </li>
        <li className="max-[900px]:hidden w-[280px] pl-[20px] flex font-preL items-center">
          <div className="absoulte ml-[-230px] mr-[20px] w-[340px] h-[50px] ">
            <NavSearch selectDrink={selectDrink}></NavSearch>
          </div>
          <div className={"group flex justify-center items-center h-[58px] ml-4 w-[70px]"}>
            {login ?
              <div className={""}>
                <div className={"h-[38px] w-[38px] rounded-full overflow-hidden"}>
                  <img src={img} className={"w-full h-full object-cover"}/>  
                </div>
                <div className={'hidden bg-white group-hover:flex flex-col absolute w-[160px] h-[200px] right-[40px] top-[60px] rounded shadow-lg'}>
                  <div onClick={()=>{router.push('/user/profile')}} className="flex items-center pl-5 text-[16px] hover:bg-gray-100 rounded-[4px] h-[40px] cursor-pointer"><BiUser className={"text-zinc-500 mr-3"} /> 마이페이지</div> 
                  <div onClick={()=>{router.push('/user/detail/1')}} className="flex items-center pl-5 text-[16px] hover:bg-gray-100 rounded-[4px] h-[40px] cursor-pointer"><FaRegBookmark className={"text-zinc-500 mr-3"} />찜 목록</div> 
                  <div onClick={()=>{router.push('/user/detail/0')}} className="flex items-center pl-5 text-[16px] hover:bg-gray-100 rounded-[4px] h-[40px] cursor-pointer"><IoMdWine className={"text-zinc-500 mr-3"} />클리어한 술 </div> 
                  <div onClick={()=>{router.push('/user/detail/2')}} className="flex items-center pl-5 text-[16px] hover:bg-gray-100 rounded-[4px] h-[40px] cursor-pointer"><RiHome2Line className={"text-zinc-500 mr-3"}/>찜한 가게</div> 
                  <div className="flex items-center pl-5 text-[16px] hover:bg-gray-100 rounded-[4px] h-[40px] cursor-pointer" onClick={kakaoLogout}><MdLogout className={'text-zinc-500 mr-3'} />로그아웃</div> 
                </div>
              </div>
              :
              <div className="hover:bg-gray-100 flex justify-center items-center w-[100px] p-2 rounded-[4px] cursor-pointer" onClick={kakaoLogin}>로그인</div>
            }
          </div>
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
