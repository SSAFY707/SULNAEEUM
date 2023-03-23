import React from "react";
import Head from "next/head";

export default function profile() {
  return (
    <>
      <Head>
        <title>SULNAEEUM | 술내음</title>
      </Head>
      <div className="w-screen h-screen bg-gray-200 flex justify-center">
        <div className="w-[1200px] h-[700px] mt-[165px] rounded-lg  bg-red-300">
          <div className="absolute w-[310px] h-[700px] rounded-lg  bg-blue-300"></div>
          <div className="absolute w-[870px] h-[390px] rounded-lg left-[690px] bg-green-300 opacity-40"></div>
          <div className="absolute w-[490px] h-[300px] rounded-lg left-[690px] top-[565px] bg-orange-300"></div>
          <div className="absolute w-[370px] h-[300px] rounded-lg left-[1200px] top-[565px] bg-gray-300"></div>
          <div className="absolute w-[300px] h-[700px] rounded-lg  bg-blue-300"></div>
        </div>
      </div>
    </>
  );
}
