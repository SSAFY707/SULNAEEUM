import { useAppDispatch, useAppSelector } from '@/hooks'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { setRecomList } from '@/api/auth'
import { RecommendDrinkType } from '@/types/DrinkType'
import { getRecommendDrinkList } from '@/api/auth/drink'

export const ReconmendDrinkList = () => {
    const router = useRouter()
    const [list, setList] = useState<RecommendDrinkType[]>([])
    const settingList = async () => {
      setList(await getRecommendDrinkList())
    }
    useEffect(()=>{
      settingList()
    },[])

   // redux의 store에서 통신된 추천 Drink List 가져옴
    const defaultList : RecommendDrinkType[] = [
      {
        drinkId : 0,
        drinkImg : "/images/jubti/drink/단홍.png",
        drinkName : "단홍",
        drinkType : '과실주',
        drinkLevel : 5,
        drinkAmount : "300ml",
        ingredientList : ['벌꿀', '정제수', '즙']
      },
      {
        drinkId : 0,
        drinkImg : "/images/jubti/drink/뱅꼬레 더감.png",
        drinkType : '약주',
        drinkName : "뱅꼬레 더감",
        drinkLevel : 5,
        drinkAmount : "300ml",
        ingredientList : ['효모', '누룩' ,'정제수', '감']
      },
      {
        drinkId : 0,
        drinkImg : "/images/jubti/drink/남산애 레드와인.png",
        drinkName : "남산애 레드와인",
        drinkType: '기타',
        drinkLevel : 15,
        drinkAmount : "700ml",
        ingredientList : ['포도', '정제수']
      },
      {
        drinkId : 0,
        drinkImg : "/images/jubti/drink/도깨비술 11.png",
        drinkName : "도깨비술 11",
        drinkType : '탁주',
        drinkLevel : 19,
        drinkAmount : "220ml",
        ingredientList : ['국내산 쌀', '정제수', '효모']
      },
  ];

    return(
        <>
            {list.length != 0 && list.slice(0,4).map((item, index)=> {
                return (
                    <div key={index} className={"flex w-[360px] h-[510px] rounded-xl mx-3 bg-white drop-shadow-[3px_4px_5px_rgba(0,0,0,0.2)] hover:drop-shadow-[3px_5px_7px_rgba(0,0,0,0.4)]"}>
                    <div className={"flex flex-col items-center justify-center w-full"}>
                      <img className={"h-[240px] mb-4 relative"} src={item.drinkImg} alt="" />
                      <div className='flex w-full pl-8 pt-5'>
                        <div className={"flex flex-col"}>
                          <div className={"font-preM text-[26px]"}>{item.drinkName}</div>
                          <div>{item.drinkLevel}% | {item.drinkAmount}</div>
                          <div className={'w-[270px]'} >{item.ingredientList.map((i)=>`${i} `)}</div>
                        </div>
                      </div>
                      <div className='flex w-full justify-end pr-8 pt-3'>
                        <div onClick={()=>{router.push(`/list/${item.drinkId}`)}} className={"flex justify-center items-center rounded-full mt-3 px-4 py-2 text-[15px] cursor-pointer bg-zinc-200 hover:bg-zinc-300"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
                      </div> 
                    </div>
                  </div>
                  
                )
            })}
            {list.length == 0 && defaultList.map((item, index)=> {
                return (
                  <div key={index} className={"flex w-[345px] h-[510px] rounded-xl mx-7 bg-white drop-shadow-[3px_4px_5px_rgba(0,0,0,0.2)] blur-md"}>
                    <div className={"flex flex-col items-center justify-center w-full"}>
                      <img className={"h-[240px] mb-4 relative"} src={item.drinkImg} alt="" />
                      <div className='flex w-full pl-8 pt-5'>
                        <div className={"flex flex-col"}>
                          <div className={"font-preM text-[26px]"}>{item.drinkName}</div>
                          <div>{item.drinkLevel}% | {item.drinkAmount}</div>
                          <div>{item.ingredientList.map((i)=>`${i} `)}</div>
                        </div>
                      </div>
                      <div className='flex w-full justify-end pr-8 pt-3'>
                        <div className={"flex justify-center items-center rounded-full mt-3 px-4 py-2 text-[15px] bg-zinc-200"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
                      </div> 
                    </div>
                  </div>
                  
                )
            })}
            {list.length == 0 &&
            <div className={'flex flex-col items-center absolute top-[370px] w-[500px] h-[240px] rounded-lg'}>
              <div className={'font-preM text-[28px] text-center h-[120px] mt-[60px]'}>간단한 취향조사로 <br/> 나만의 전통주를 추천받으세요.</div>
              <div onClick={()=>(router.push('/user/prefer'))} className={'h-[70px] w-[60%] flex justify-center items-center bg-gradient-to-r from-teal-400 to-emerald-400 hover:-translate-y-1 duration-[400ms] ease-in text-white text-[20px] drop-shadow-md cursor-pointer rounded-full'}>나만의 전통주 추천받기</div>
            </div>
            }
        </>
    )
}