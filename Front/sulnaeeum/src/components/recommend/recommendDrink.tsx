import { useAppDispatch, useAppSelector } from '@/hooks'
import { HiMagnifyingGlass } from 'react-icons/hi2'
import { useRouter } from 'next/dist/client/router'
import { useEffect, useState } from 'react'
import { setRecomList } from '@/api/auth'

export const ReconmendDrinkList = () => {
    const router = useRouter()
    // const [list, setList] = useState()
    // const setList = async () => {
    //   setList(await setRecomList())
    // }
    // useEffect(()=>{
    //   setList()
    // },[])

   // redux의 store에서 통신된 추천 Drink List 가져옴
    const list = [
      {
        drinkId : 0,
        drinkImage : "/images/jubti/drink/단홍.png",
        drinkName : "담향 대대포 블루",
        drinkLevel : 5,
        drinkAmount : "300ml",
        ingredient : ['벌꿀', '정제수', '즙']
      },
      {
        drinkId : 0,
        drinkImage : "/images/jubti/drink/단홍.png",
        drinkName : "담향 대대포 블루",
        drinkLevel : 5,
        drinkAmount : "300ml",
        ingredient : ['벌꿀', '정제수', '즙']
      },
      {
        drinkId : 0,
        drinkImage : "/images/jubti/drink/단홍.png",
        drinkName : "담향 대대포 블루",
        drinkLevel : 5,
        drinkAmount : "300ml",
        ingredient : ['벌꿀', '정제수', '즙']
      },
      {
        drinkId : 0,
        drinkImage : "/images/jubti/drink/단홍.png",
        drinkName : "담향 대대포 블루",
        drinkLevel : 5,
        drinkAmount : "300ml",
        ingredient : ['벌꿀', '정제수', '즙']
      },

  ];

    return(
        <>
            {list.map((item, index)=> {
                return (
                    <div key={index} className={"flex w-[345px] h-[510px] rounded-xl mx-7 bg-white drop-shadow-[3px_4px_5px_rgba(0,0,0,0.2)] hover:drop-shadow-[3px_5px_7px_rgba(0,0,0,0.4)]"}>
                    <div className={"flex flex-col items-center justify-center w-full"}>
                      <img className={"h-[240px] mb-4 relative"} src={item.drinkImage} alt="" />
                      <div className='flex w-full pl-8 pt-5'>
                        <div className={"flex flex-col"}>
                          <div className={"font-preM text-[26px]"}>{item.drinkName}</div>
                          <div>{item.drinkLevel}% | {item.drinkAmount}</div>
                          <div>{item.ingredient.map((i)=>`${i} `)}</div>
                        </div>
                      </div>
                      <div className='flex w-full justify-end pr-8 pt-3'>
                        <div onClick={()=>{router.push(`/list/${item.drinkId}`)}} className={"flex justify-center items-center rounded-full mt-3 px-4 py-2 text-[15px] cursor-pointer bg-zinc-200 hover:bg-zinc-300"}><HiMagnifyingGlass className={'mr-2'} />자세히 보러가기</div>
                      </div> 
                    </div>
                  </div>
                  
                )
            })}
        </>
    )
}