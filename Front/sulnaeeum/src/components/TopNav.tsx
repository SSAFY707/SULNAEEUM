import Link from "next/link";
import { useRouter} from 'next/router';
import style from './TopNav.module.css';
import React, { useState } from 'react';
export default function App() {

  const [hover, setHover] = useState<string>('');

  return (
    <>
      {/* * 기본 배경: 흰색, hover: bg-[#DAD2C7] */}
       <div className="styles.nav h-[80px] flex items-center text-[19px] font-medium border-b-2 hover:bg-sky-300 hover:">
        <div className="basis-1/4 w-[60px] pl-[100px]">
          <Link href="/">로고 부분 </Link>
        </div>
        <div onMouseEnter={() => setHover('on')} onMouseLeave={()=> setHover('')} className=" basis-1/2 flex justify-between items-center hover:h-[520px] hover:bg-sky-300">
          <Link href="/list">
            <div className= " hover:bg-sky-500 flex justify-center group w-[130px] h-[60px] flex items-center hover:h-[520px] items-center  w-[52px] hover:font-semibold hover:text-[19.5px]">
              <div className= "pt-[3px] text-center w-[150px] h-[40px] border-b-4 border-[#FFFFFF] group-hover:border-[#B58269] group-hover:text-[#541F1D]">
                전통주   
              </div>
            </div>  
          </Link>
          <Link href="/map">
            <div className="hover:bg-sky-500 flex justify-center hover_box w-[130px] h-[60px] flex items-center hover:h-[520px]">
               <div className={"pt-[3px] text-center h-[40px]  w-[150px] border-b-4 border-[#FFFFFF] hover:border-b-4 hover:border-[#B58269] hover:text-[#541F1D] hover:font-semibold hover:text-[19.5px]"}>
                지도
               </div>
            </div>
          </Link>
          <Link href="/rank">
          <div className="hover:bg-sky-500 flex justify-center hover_box w-[130px] h-[60px] flex items-center hover:h-[520px]">
            <div className={"pt-[3px] text-center h-[40px] w-[150px] border-b-4 border-[#FFFFFF] hover:border-b-4 hover:border-[#B58269] hover:text-[#541F1D] hover:font-semibold hover:text-[19.5px]"}>
                랭킹
              </div>
          </div>
          </Link>
          <Link href="/recommend">
            <div className="hover:bg-sky-500 flex justify-center w-[130px] h-[60px] flex items-center hover:h-[520px]">
              <div className="pt-[3px] text-center h-[40px]  w-[150px] border-b-4 border-[#FFFFFF] hover:border-b-4 hover:border-[#B58269] hover:text-[#541F1D] hover:font-semibold hover:text-[19.5px]">
                추천
              </div>
            </div>
          </Link>
          <Link href="/jubti">
            <div className= "hover:bg-sky-500 flex justify-center w-[130px] h-[60px] flex items-center hover:h-[520px]">
               <div className="pt-[3px] text-center h-[40px] w-[150px] border-b-4 border-[#FFFFFF] hover:border-b-4 hover:border-[#B58269] hover:text-[#541F1D] hover:font-semibold hover:text-[19.5px]">
                전통주 유형검사
              </div>
            </div>
          </Link>
          </div>
        <div className="basis-1/4 flex justify-end pr-[100px]">
          <button className="pr-[60px]">검색</button>
          <Link href="/user">로그인</Link>
        </div>
      </div>
      <div className={ `${hover!==''?"w-[1920px] h-[220px] bg-red-300":''}`}>
      </div>
      
    </>
  );
}
