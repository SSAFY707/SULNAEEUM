import React, {useEffect, useState} from 'react'
import Link from "next/link";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import UserDetailDrink from '@/components/profile/userDetailDrink'
import UserDetailStore from '@/components/profile/userDetailStore'
import { useRouter } from 'next/router';

export default function Detail(props: { idx: number }) {
    const router = useRouter()
    const [page,setPage] = useState<number>(0)
    const { idx } = props
    const menuName = [
        "내가 클리어 한 전통주",
        "내가 찜 한 전통주",
        "내가 찜 한 전통주 가게"
    ]

  return (
      <div className="w-screen h-screen bg-gray-100 flex justify-center">
          <div className="w-[1200px] h-[750px] mt-[120px] rounded-lg  bg-red-300 ">
              <Tabs defaultIndex={+idx}variant='soft-rounded' colorScheme='gray'>
                  <TabList>
                      {menuName.map((v, i) => {
                          return (
                            <Link href={`/user/detail/${i}`}>
                                  <Tab onClick={() => { 
                                    //   router.push(`/user/detail/${idx}`)
                                      setPage(i)
                                  }}> {v}</Tab>
                            </Link>
                          )
                       })}
                </TabList>
                  <TabPanels>
                      {page == 0 ?
                            <TabPanel>
                                <h1>page0</h1>
                                <UserDetailDrink idx={0}></UserDetailDrink>
                            </TabPanel>
                         :
                          page == 1 ?
                              
                            <TabPanel>
                                <h1>page1</h1>
                                <UserDetailDrink idx={1}></UserDetailDrink>
                            </TabPanel>
                        :
                            <TabPanel>
                                <UserDetailStore></UserDetailStore> 
                            </TabPanel>
                 
                        }
                </TabPanels>
            </Tabs>
        </div>
      </div>
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