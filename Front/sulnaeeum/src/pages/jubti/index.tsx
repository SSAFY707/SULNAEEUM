import React from "react";
import Link from "next/link";
import { useState } from "react";
export default function index() {
  const [hover, setHover] = useState<string>("");
  const fn = () => {
    setHover("on");
    console.log("여기까지 왓습니다");
  };
  return (
    <>
      <div>주비티아이 페이지입니다</div>
      <Link href="/list">
        <div>go to list</div>
      </Link>
      <button onClick={() => fn()}>눌러</button>
    </>
  );
}
