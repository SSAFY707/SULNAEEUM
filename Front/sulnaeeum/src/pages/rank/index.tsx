import { useState } from "react";
import { HiMagnifyingGlass } from 'react-icons/hi2'

export default function index() {
  const tabs = ['모두에게', '남성에게', '여성에게']
  const [idx, setIdx] = useState<number>(0)
  return (
    <>
      <div className="flex flex-col items-center w-screen h-auto">
        <div className={'flex justify-between w-[70%] mt-28 h-[90px]'}>
          <div className={'ml-8'}>
            <div className={'text-[34px] font-preB'}>전통주 랭킹</div>
            <div>Traditional Liquor Ranking</div>
          </div>
          <div className={"flex items-end"}>
            {
              tabs.map((tab, i)=>{
                return (
                  <div onClick={()=>{setIdx(i)}} className={`cursor-pointer w-[120px] h-[60px] ml-2 flex justify-center items-center ${idx == i ? 'bg-zinc-100 font-preM' : 'bg-zinc-200'} rounded-t`} key={i}>{tab}</div>
                )
              })
            }
          </div>
        </div>
        <div className={"flex flex-col items-center w-[70%] h-auto mb-20 bg-zinc-100"}>
            {/* <div className={"flex justify-end w-full"}>인기있는 술</div> */}
            <div className={"w-full px-10 pt-14 flex justify-center"}>
              <div className={"flex w-[30%] h-[360px] rounded mx-4 bg-white"}>
                <div className={"flex flex-col items-center w-full"}>
                  <div className={"flex w-full"}>
                    <img className={"relative top-[40px] left-[40px] w-[44px] h-[44px]"} src="/images/rank/1.png" />
                  </div>
                  <img className={"h-[160px] relative mb-3"} src="/images/jubti/drink/단홍.png" alt="" />
                  <div className={"font-preR text-[24px]"}>단홍</div>
                  <div>5% | 330ml</div>
                  <div className={"flex justify-center items-center rounded-full mt-3 px-4 py-2 text-[14px] cursor-pointer bg-zinc-200 hover:bg-zinc-300"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
                </div>
              </div>
              <div className={"flex w-[30%] h-[360px] rounded mx-4 bg-white"}>
                <div className={"flex flex-col items-center w-full"}>
                  <div className={"flex w-full"}>
                    <img className={"ml-4 mt-4 w-[44px] h-[44px]"} src="/images/rank/2.png" />
                  </div>
                  <img className={"h-[150px] relative top-[-20px]"} src="/images/jubti/drink/토끼 소주.png" alt="" />
                  <div className={"font-preR text-[24px]"}>토끼 소주</div>
                  <div>11% | 350ml</div>
                  <div className={"flex justify-center items-center rounded-full mt-3 px-4 py-2 text-[14px] cursor-pointer bg-zinc-200 hover:bg-zinc-300"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
                </div>
              </div>
              <div className={"flex w-[30%] h-[360px] rounded mx-4 bg-white"}>
                <div className={"flex flex-col items-center w-full"}>
                  <div className={"flex w-full"}>
                    <img className={"ml-4 mt-4 w-[44px] h-[44px]"} src="/images/rank/3.png" />
                  </div>
                  <img className={"h-[150px] relative top-[-20px]"} src="/images/jubti/drink/서울의 밤.png" alt="" />
                  <div className={"font-preR text-[24px]"}>서울의 밤</div>
                  <div>32% | 500ml</div>
                  <div className={"flex justify-center items-center rounded-full mt-3 px-4 py-2 text-[14px] cursor-pointer bg-zinc-200 hover:bg-zinc-300"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
                </div>
              </div>
            </div>
            <div className={"flex flex-col w-full items-center mt-10 mb-10 px-16"}>
              <div className={"flex items-center px-10 w-full h-[100px] rounded my-2 bg-white"}>
                <div className={"text-[30px] font-preB text-zinc-300 mr-10"}>4</div>
                <div className={"w-[50px] h-[50px] rounded-full overflow-hidden mr-4"}>
                  <img className={"w-full h-full object-scale-down"} src="/images/jubti/drink/소호.png" alt="" />
                </div>
                <div className={"font-preR text-[24px]"}>소호</div>

              </div>
              <div className={"flex w-full h-[100px] rounded my-2 bg-white"}></div>
              <div className={"flex w-full h-[100px] rounded my-2 bg-white"}></div>
              <div className={"flex w-full h-[100px] rounded my-2 bg-white"}></div>
            </div>
        </div>
      </div>
    </>
  );
}
