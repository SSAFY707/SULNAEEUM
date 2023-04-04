import { getRanking } from "@/api/auth/rank";
import { RankingDrinkType, RankingType } from "@/types/RankingTypes";
import { useEffect, useState } from "react";
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useRouter } from 'next/dist/client/router'

export default function index() {
  type TabType = {
    [index : string] : string,
    name : string,
    value : string
  }

  const tabs :TabType[] = [
    {name: '모두에게', value: 'totalTopDrink'},
    {name: '남성에게', value: 'maleTopDrink'},
    {name: '여성에게', value: 'femaleTopDrink'},
  ]
  const [idx, setIdx] = useState<string>('totalTopDrink')
  const [rankingList, setRankingList] = useState<RankingType>({totalTopDrink: [], femaleTopDrink: [], maleTopDrink: []})

  const getList = async () => {
    setRankingList(await getRanking())
  }
  useEffect(()=>{
    getList()
  },[])

  const timeSetting = () => {
    const date = new Date()
    return `${date.getFullYear()}년 ${date.getMonth()+1}월 ${date.getDate()}일 ${date.getHours()}:${date.getMinutes()}`
  }
  const router = useRouter()
  const [time, setTime] = useState(timeSetting())
  const moveDetail = (drinkId : number) => {
    router.push(`/list/${drinkId}`)
  }
  return (
    <>
      <div className="flex flex-col items-center w-screen h-auto">
        <div className={'flex justify-between w-[70%] mt-[140px] h-[90px]'}>
          <div className={'ml-8'}>
            <div className={'font-preM'}>Traditional Liquor Ranking</div>
            <div className={'text-[34px] font-preB pb-[10px]'}>전통주 랭킹</div>
            <div>한 시간에 한 번 갱신되는 전통주 랭킹입니다.</div>
            <div>유저의 리뷰와 酒BTI 결과를 통해 업데이트되는 인기 전통주를 만나보세요.</div>
          </div>
          <div className={"flex items-start"}>
            {
              tabs.map((tab, i)=>{
                return (
                  <div onClick={()=>{setIdx(tab.value)}} className={`cursor-pointer w-[120px] h-[50px] ml-2 flex justify-center items-center ${idx == tab.value ? 'font-preM' : 'text-[#b0b0b0]'} rounded-[30px] border-[1px] border-[#b0b0b0] `} key={i}>{tab.name}</div>
                )
              })
            }
          </div>
        </div>
        <div className={"flex flex-col justify-end w-full mr-[30%]"}>
              <div className="flex justify-end text-[13px] ">마지막 업데이트 시간</div>
              <div className="flex justify-end font-preM pl-[-50px]">{time}</div>
        </div>
        <div className={"flex flex-col items-center w-[70%] h-auto mb-20 mt-[30px]"}>
            <div className={"w-full pt-[70px] flex justify-center"}>
              {rankingList[idx].slice(0,3).map((r, i)=>{
                return (
                  <div key={i} className={"flex justify-center w-[300px] h-[400px] rounded-xl mx-10 bg-white drop-shadow-[3px_4px_5px_rgba(0,0,0,0.2)] hover:drop-shadow-[3px_5px_7px_rgba(0,0,0,0.4)]"}>
                    <div className="flex flex-col">
                      <div className={"flex"}>
                          <img className={"absolute top-[-40px] left-[30px] w-[100px] h-[100px] "} src={`/images/rank/${i+1}.png`} />
                      </div>
                      <div className={"flex flex-col items-center justify-center w-[300px] mt-[70px]"}>
                        <img className={"h-[160px] relative mb-3"} src={r.drinkImg} />
                        <div className={"font-preM text-[24px]"}>{r.drinkName}</div>
                        <div className={"font-preR"}>{r.drinkLevel}% | {r.drinkAmount} | {r.drinkType}</div>
                        <div onClick={()=>{moveDetail(r.drinkId)}} className={"flex justify-center items-center rounded-full mt-[20px] px-4 py-2 text-[14px] cursor-pointer bg-zinc-200 hover:bg-zinc-300"}><HiMagnifyingGlass className={'mr-2'} />{r.drinkName} 자세히 보러가기</div>
                      </div>
                    </div>
                  </div>

                )
              })}
            </div>
            {/* <div className={"flex w-full mt-[70px] text-[18px] text-zinc-400"}>
              <div className={"ml-[280px] w-[250px] font-preM"}>이름</div>
              <div className={"ml-[40px] w-[250px] font-preM"}>도수 | 용량</div>
              <div className={"font-preM"}>전통주 유형</div>
            </div> */}
            <div className={"flex flex-col w-full items-center mt-[20px] mb-14 px-16"}>
              {rankingList[idx].slice(3,10).map((r,i)=>{
                return (
                  <div key={i} className="flex flex-col">
                  <div className={"flex items-center px-10 w-full h-[100px] rounded my-2 bg-white"}>
                    <div className={"w-[40px] text-[30px] font-preB text-zinc-400 mr-10"}>{i+4}</div>
                    <div className={"w-[50px] h-[50px] rounded-full overflow-hidden mr-8 shadow-lg"}>
                      <img className={"w-full h-full object-scale-down"} src={r.drinkImg} alt="" />
                    </div>
                    <div className={"w-[300px] font-preR text-[22px] text-zinc-700"}>{r.drinkName}</div>
                    <div className={"w-[250px]"}>{r.drinkLevel}% | {r.drinkAmount}</div>
                    <div className={"flex justify-center w-[80px] mr-[200px] text-[18px]"}>{r.drinkType}</div>
                    <div onClick={()=>{moveDetail(r.drinkId)}} className={"flex justify-center items-center rounded-full px-3 py-2 text-[14px] cursor-pointer bg-zinc-200 hover:bg-zinc-300"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
                
                  </div>
                    <div className="w-[100%] h-[0.5px] bg-zinc-200"></div>
                  </div>
                )
              })}
            </div>
        </div>
      </div>
    </>
  );
}
