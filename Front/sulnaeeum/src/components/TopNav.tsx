import Link from "next/link";

export default function App() {
  return (
    <>
      {/** 기본 배경: 흰색, hover: bg-[#DAD2C7] */}
      <div className={"h-[50px] bg-blue-400 grid grid-cols-6 "}>
        <div className={"col-start-1 col-end-2"}>
          <Link href="/">로고 부분 </Link>
        </div>
        <div className={"col-start-2 col-end-6"}>
          <Link className={""} href="/list">
            전통주
          </Link>
          <Link className={""} href="/map">
            지도
          </Link>
          <Link className={""} href="/rank">
            랭킹
          </Link>
          <Link className={""} href="/recommend">
            추천
          </Link>
          <Link className={""} href="/jubti">
            전통주 유형검사
          </Link>
        </div>
        <div className={"col-start-7 col-end-8"}>
          <button>검색</button>
          <Link href="/user">로그인</Link>
        </div>
      </div>
    </>
  );
}
