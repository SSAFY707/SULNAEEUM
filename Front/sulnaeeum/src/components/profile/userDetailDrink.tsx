import React, { useEffect, useState } from 'react'
import UserDetailDrinkList from './userDetailDrinkList'

export default function userDetailDrink(props: {idx : number}) {
    const {idx} = props
    const userClear: any = [
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/남산애 레드와인.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
    
    ]

    const userPreference: any = [
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
        { drinkId: 1, drinkName: "전통주1", drinkImage: "/images/jubti/drink/도깨비술 11.png", drinkAmount: "500ml", drinkLevel: "3", drinkType: "탁주" },
    ]
    useEffect(() => {
        //get 클리어한 전통수 통신
        //get 찜한 전통주 수
    },[])

  return (
      <>
          <div className=''>
              <div className='flex'> 
                <div className=' ml-[200px] w-[530px] bg-blue-400'>
                   <div>
                    전통주명
                   </div>
                </div>
                <div className='flex justify-around w-[400px] bg-green-200'>
                    <div>
                        용량
                    </div>
                    <div>
                        도수
                    </div>
                    <div>
                        종류
                    </div>
                </div>
              </div>
              { idx }
              <div className='w-[1150px] h-[620px] bg-yellow-400 scroll overflow-y-scroll'> 
              {idx == 0?
              // 클리어 한 전통주 수 만큼 List 만들어내기
                  userClear.map((v, i) => { 
                      return (
                        <UserDetailDrinkList key={i} user={v} idx={i+1} ></UserDetailDrinkList>
                      )
                  })
                      :
                      // 찜 한 전통주 수 만큼 List 만들어내기
                     
                      userPreference.map((v, i) => { 
                      return(
                        <UserDetailDrinkList key={i} user={v} idx={i+1} ></UserDetailDrinkList>
                      )
                  })
              }
              </div>
          </div>
      </>
  )
}
export async function getServerSideProps(context: any) { 
    // 쿼리에 있는 키값을 변수에 저장?
    const idx = context.query.idx
    // props에 저장해서 사용하기
    return {
        props: {
            idx: idx,
        }
    }
}