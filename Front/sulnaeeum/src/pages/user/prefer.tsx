import React, { useEffect, useState } from 'react'
import { MdArrowBackIosNew } from 'react-icons/md'
import { FaPercent } from 'react-icons/fa'
import { MdLocalDining } from 'react-icons/md'
import { GiWineBottle } from 'react-icons/gi'
import { authAxios } from '@/api/common'
import RadarChart from '@/components/list/RadarChart'
import { DrinkTasteType } from '@/types/DataTypes';

type PayloadType = {
  tasteSour: number,
  tasteSweet: number,
  tasteFlavor: number,
  tasteRefresh: number,
  tasteBody: number,
  tasteThroat: number,
  level: number,
  dish: string,
  weight: string,
}








export default function index() {




  const [gender, setGender] = useState<string>();
  const [age, setAge] = useState<string>('');
  const [tasteSour, setTasteSour] = useState<number>(0);
  const [tasteSweet, setTasteSweet] = useState<number>(0);
  const [tasteFlavor, setTasteFlavor] = useState<number>(0);
  const [tasteRefresh, setTasteRefresh] = useState<number>(0);
  const [tasteBody, setTasteBody] = useState<number>(0);
  const [tasteThroat, setTasteThroat] = useState<number>(0);
  const [level, setLevel] = useState<number>(0);
  const [dish, setDish] = useState<string>('');
  const [weight, setWeight] = useState<string>('');

  const [resultName, setResultName] = useState<string>('이름초기값')
  const [resultImg, setResultImg] = useState<string>('이미지초기값')
  const [resultId, setResultId] = useState<string>('아이디초기값')
  const [resultAmount, setResultAmount] = useState<string>('용량초기값')
  const [resultLevel, setResultLevel] = useState<string>('도수초기값')
  const [drinkTaste, setDrinkTaste] = useState<DrinkTasteType>({
    tasteRefresh: 2,
    tasteBody: 5,
    tasteSweet: 3,
    tasteSour: 1,
    tasteThroat: 4,
    tasteFlavor: 2,
  });




  const sendData = () => {

    type ResultType = {
      name: string | null
      img: string | null
    }



    let payload: PayloadType = {
      tasteSour: tasteSour,
      tasteSweet: tasteSweet,
      tasteFlavor: tasteFlavor,
      tasteRefresh: tasteRefresh,
      tasteBody: tasteBody,
      tasteThroat: tasteThroat,
      level: level,
      dish: dish,
      weight: weight
    }



    console.log(payload)

    authAxios.post('user/preference', payload
    ).then((res) => {
      console.log(res)
      console.log(res.data[0].drinkImage)
      setResultName(res.data[0].drinkName)
      setResultImg(res.data[0].drinkImage)
      setResultId(res.data[0].drinkId)
      setResultAmount(res.data[0].drinkAmount)
      setResultLevel(res.data[0].drinkLevel)

      setDrinkTaste({
        tasteRefresh: res.data[0].tasteRefresh,
        tasteBody: res.data[0].tasteBody,
        tasteSweet: res.data[0].tasteSweet,
        tasteSour: res.data[0].tasteSour,
        tasteThroat: res.data[0].tasteThroat,
        tasteFlavor: res.data[0].tasteFlavor,
      })





    }).catch((err) => {
      console.log(err)
    })
  }


  type ObjType = {
    [index: string]: string | boolean
  }
  type DataType = {
    [index: string]: Array<ObjType>
  }

  type SessionType = {
    name: string | null
    img: string | null
  }

  const data: DataType = {
    gender: [{ name: '남성', value: '남성' }, { name: '여성', value: '여성' }],
    age: [
      { name: '20대', value: '20s' },
      { name: '30대', value: '30s' },
      { name: '40대', value: '40s' },
      { name: '50대', value: '50s' },
      { name: '60대 이상', value: '60s' },
    ]
  }





  const [page, setPage] = useState(0);

  const [session, setSession] = useState<SessionType>({ name: '', img: '' })


  useEffect(() => {

    setSession((prevState) => {
      return { ...prevState, name: sessionStorage.getItem('name'), img: sessionStorage.getItem('img') }
    })

  }, [])



  return (
    <>
      {/* <div className={"bg-[url('/images/login_back.png')] bg-cover w-full h-full"}> */}
      <div className={"flex justify-center bg-cover w-full h-full"}>
        <div className={'w-[800px] h-[936px] flex justify-center items-center'}>
          <div className={`${page != 0 && 'hidden'} flex flex-col items-center w-[600px] h-[700px] rounded-xl bg-white/90`}>
            <div className={'w-[400px] h-full mt-20 flex flex-col items-center'}>
              <div className={'w-[400px] h-3/5 flex flex-col items-center'}>
                <div className='flex w-full h-[200px] space-x-4  items-center justify-center'>
                  {session.img && <img src={session.img} alt='프로필사진' className='w-[80px] h-[80px] rounded-full object-cover'></img>}
                  <div>
                    <span className={'font-preB text-[32px]'}>{session.name}</span>
                    <span className={'font-preL text-[32px]'}>&nbsp;님,</span>
                    <div className={'font-preL text-[26px]'}>술내음에 오신걸 환영합니다.</div>
                  </div>
                </div>
                <div className='flex  flex-col w-full h-[1000px] items-center mt-[20px]'>
                  <div className='flex justify-between items-center'>
                    <img className='w-[140px]' src="/main/part5/main5_3s.png" alt='이미지'></img>
                  </div>
                  <div className='flex flex-col justify-center items-center w-full h-[100px] mt-[20px]'>
                    <p className='text-[20px]'>'술내음'은 당신과 어울리는 전통주를 찾아드립니다.</p>
                    <p className='text-[20px] mt-[12px]'>정확한 추천을 위해 취향조사를 바로 시작해보세요.</p>
                  </div>
                </div>
              </div>
              <div onClick={() => { setPage(page + 1) }} className={'flex justify-center items-center mt-[70px] w-full h-[60px] text-[22px] text-white font-preL bg-[#847260] hover:bg-[#655442] cursor-pointer rounded'}>내 취향정보 입력하기</div>
            </div>
          </div>

          {/* 1페이지 */}
          <div className={`${page != 1 && 'hidden'} flex flex-col items-center w-[580px] h-[700px] rounded-xl bg-white/90`}>
            <div className={'w-[470px] mt-10 mb-6'}>
              <div className='flex items-center w-full h-[30px] mb-[10px]'>
                <MdArrowBackIosNew className='hover:cursor-pointer' onClick={() => { setPage(page - 1) }} ></MdArrowBackIosNew>
                <div className={'font-preM ml-[8px]'}>{page}/6 단계</div>
              </div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-1/6 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-5/6 p-2'}>
              <div className={'mb-16'}>
                <div className={'font-preR text-[24px] mb-4'}>성별</div>
                <div className={'grid grid-cols-2 gap-2 w-full'}>
                  {data.gender.map((g, index) => {
                    return (
                      <div key={index} onClick={() => {
                        setGender(g.value as string)
                      }} className={`w-full h-[50px] flex justify-center items-center cursor-pointer border rounded ${gender === g.value ? 'bg-[#847260] text-white' : 'hover:bg-gray-200'}`} >{g.name}</div>
                    )
                  })}
                </div>
              </div>
              <div>
                <div className={'font-preR text-[24px] mb-4'}>나이</div>
                <div className={'grid grid-cols-3 gap-2'}>
                  {data.age.map((a, index) => {
                    return (
                      <div key={index} onClick={() => {
                        setAge(a.value as string)
                      }}
                        className={`w-full h-[50px] flex justify-center items-center cursor-pointer border rounded ${age === a.value ? 'bg-[#847260] text-white' : 'hover:bg-gray-200'}`} >{a.name}</div>
                    )
                  })}
                </div>
              </div>
            </div>
            <div onClick={() => { setPage(page + 1) }} className={`flex justify-center items-center text-white font-preL rounded w-[470px] h-[60px] text-[20px] ${gender && age ? 'bg-[#847260] text-white hover:cursor-pointer' : 'bg-[#E4E4E7] '} `}>다음 단계</div>
          </div>

          {/* 2페이지 */}
          <div className={`${page != 2 && 'hidden'} flex flex-col items-center w-[580px] h-[700px] rounded-xl bg-white/90`}>
            <div className={'w-[470px] mt-10 mb-6'}>
              <div className='flex items-center w-full h-[30px] mb-[10px]'>
                <MdArrowBackIosNew className='hover:cursor-pointer' onClick={() => { setPage(page - 1) }} ></MdArrowBackIosNew>
                <div className={'font-preM ml-[8px]'}>{page}/6 단계</div>
              </div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-2/6 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-[470px] p-2'}>

              <div className='w-full h-[180px] outline-1 outline-black mt-[20px]'>
                <div className={'font-preR text-[24px] mb-4'}>단맛의 정도</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteSweet(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteSweet(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteSweet(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteSweet(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금강함</div>
                  <div
                    onClick={() => {
                      setTasteSweet(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>

              <div className='w-full h-[180px] outline-1 outline-black mt-[20px]'>
                <div className={'font-preR text-[24px] mb-4'}>신맛의 정도</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteSour(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSour === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteSour(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSour === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteSour(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSour === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteSour(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSour === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금강함</div>
                  <div
                    onClick={() => {
                      setTasteSour(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteSour === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>
            </div>
            <div onClick={() => { setPage(page + 1) }} className={`flex justify-center items-center text-white font-preL rounded w-[470px] h-[60px] text-[20px] ${tasteSweet && tasteSour ? 'bg-[#847260] text-white hover:cursor-pointer' : 'bg-[#E4E4E7] '} `}>다음 단계</div>
          </div>

          {/* 3페이지 */}
          <div className={`${page != 3 && 'hidden'} flex flex-col items-center w-[580px] h-[700px] rounded-xl bg-white/90`}>
            <div className={'w-[470px] mt-10 mb-6'}>
              <div className='flex items-center w-full h-[30px] mb-[10px]'>
                <MdArrowBackIosNew className='hover:cursor-pointer' onClick={() => { setPage(page - 1) }} ></MdArrowBackIosNew>
                <div className={'font-preM ml-[8px]'}>{page}/6 단계</div>
              </div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-3/6 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-[470px] p-2'}>

              <div className='w-full h-[180px] outline-1 outline-black mt-[20px]'>
                <div className={'font-preR text-[24px] mb-4'}>향의 강도</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteFlavor(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteFlavor(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteFlavor(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteFlavor(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금강함</div>
                  <div
                    onClick={() => {
                      setTasteFlavor(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>

              <div className='w-full h-[180px] outline-1 outline-black mt-[20px]'>
                <div className={'font-preR text-[24px] mb-4'}>청량감(탄산) 정도</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteRefresh(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteRefresh(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteRefresh(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteRefresh(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금강함</div>
                  <div
                    onClick={() => {
                      setTasteRefresh(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>
            </div>
            <div onClick={() => { setPage(page + 1) }} className={`flex justify-center items-center text-white font-preL rounded w-[470px] h-[60px] text-[20px] ${tasteFlavor && tasteRefresh ? 'bg-[#847260] text-white hover:cursor-pointer' : 'bg-[#E4E4E7] '} `}>다음 단계</div>
          </div>



          {/* 4페이지 */}
          <div className={`${page != 4 && 'hidden'} flex flex-col items-center w-[580px] h-[700px] rounded-xl bg-white/90`}>
            <div className={'w-[470px] mt-10 mb-6'}>
              <div className='flex items-center w-full h-[30px] mb-[10px]'>
                <MdArrowBackIosNew className='hover:cursor-pointer' onClick={() => { setPage(page - 1) }} ></MdArrowBackIosNew>
                <div className={'font-preM ml-[8px]'}>{page}/6 단계</div>
              </div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-4/6 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-[470px] p-2'}>

              <div className='w-full h-[180px] outline-1 outline-black mt-[20px]'>
                <div className={'font-preR text-[24px] mb-4'}>바디감</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteBody(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteBody === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteBody(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteBody === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteBody(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteBody === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteBody(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteBody === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금강함</div>
                  <div
                    onClick={() => {
                      setTasteBody(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteBody === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>

              <div className='w-full h-[180px] outline-1 outline-black mt-[20px]'>
                <div className={'font-preR text-[24px] mb-4'}>목넘김 정도(부드러움/ 거침)</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteThroat(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteThroat(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteThroat(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteThroat(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금거침</div>
                  <div
                    onClick={() => {
                      setTasteThroat(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[60px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우거침</div>
                </div>
              </div>
            </div>
            <div onClick={() => { setPage(page + 1) }} className={`flex justify-center items-center text-white font-preL rounded w-[470px] h-[60px] text-[20px] ${tasteBody && tasteThroat ? 'bg-[#847260] text-white hover:cursor-pointer' : 'bg-[#E4E4E7] '} `}>다음 단계</div>
          </div>


          {/* 5페이지 */}
          <div className={`${page != 5 && 'hidden'} flex flex-col items-center w-[580px] h-[700px] rounded-xl bg-white/90`}>
            <div className={'w-[470px] mt-10 mb-6'}>
              <div className='flex items-center w-full h-[30px] mb-[10px]'>
                <MdArrowBackIosNew className='hover:cursor-pointer' onClick={() => { setPage(page - 1) }} ></MdArrowBackIosNew>
                <div className={'font-preM ml-[8px]'}>{page}/6 단계</div>
              </div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-5/6 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-[470px] p-2'}>

              <div className='w-full h-[180px] outline-1 outline-black mt-[40px]'>
                <div className={'font-preR text-[24px] mb-4'}>가장 좋아하는 안주를 골라보세요</div>
                <div className='flex justify-between items-center w-full h-[100px] mt-[40px]'>
                  <div onClick={() => {
                    setDish("전/무침")
                  }}
                    className={`flex justify-center items-center w-[136px] h-[100px] rounded-[4px] hover:cursor-pointer ${dish === "전/무침" ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100  hover:text-white hover:bg-cover hover:bg-[url("/images/dish/dish1.png")]'}`}>전/무침</div>
                  <div onClick={() => {
                    setDish("탕/전골")
                  }}
                    className={`flex justify-center items-center w-[136px] h-[100px] rounded-[4px] hover:cursor-pointer ${dish === "탕/전골" ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200 hover:text-white hover:bg-cover hover:bg-[url("/images/dish/dish2.png")]'}`}>탕/전골</div>
                  <div
                    onClick={() => {
                      setDish("육류")
                    }}
                    className={`flex justify-center items-center w-[136px] h-[100px] rounded-[4px] hover:cursor-pointer ${dish === "육류" ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200 hover:text-white hover:bg-cover hover:bg-[url("/images/dish/dish3.png")]'}`}>육류</div>
                </div>
                <div className='flex justify-between items-center w-full h-[100px] mt-[20px]'>
                  <div onClick={() => {
                    setDish("해산물")
                  }}
                    className={`flex justify-center items-center w-[136px] h-[100px] rounded-[4px] hover:cursor-pointer ${dish === "해산물" ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200 hover:text-white hover:bg-cover hover:bg-[url("/images/dish/dish4.png")]'}`}>해산물</div>
                  <div onClick={() => {
                    setDish("디저트")
                  }}
                    className={`flex justify-center items-center w-[136px] h-[100px] rounded-[4px] hover:cursor-pointer ${dish === "디저트" ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200 hover:text-white hover:bg-cover hover:bg-[url("/images/dish/dish5.png")]'}`}>디저트</div>
                  <div
                    onClick={() => {
                      setDish("양식")
                    }}
                    className={`flex justify-center items-center w-[136px] h-[100px] rounded-[4px] hover:cursor-pointer ${dish === "양식" ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200 hover:text-white hover:bg-cover hover:bg-[url("/images/dish/dish6.png")]'}`}>양식</div>
                </div>
              </div>
            </div>
            <div onClick={() => { setPage(page + 1) }} className={`flex justify-center items-center text-white font-preL rounded w-[470px] h-[60px] text-[20px] ${dish ? 'bg-[#847260] text-white hover:cursor-pointer' : 'bg-[#E4E4E7] '} `}>다음 단계</div>
          </div>


          {/* 6페이지 */}
          <div className={`${page != 6 && 'hidden'} flex flex-col items-center w-[580px] h-[700px] rounded-xl bg-white/90`}>
            <div className={'w-[470px] mt-10 mb-6'}>
              <div className='flex items-center w-full h-[30px] mb-[10px]'>
                <MdArrowBackIosNew className='hover:cursor-pointer' onClick={() => { setPage(page - 1) }} ></MdArrowBackIosNew>
                <div className={'font-preM ml-[8px]'}>{page}/6 단계</div>
              </div>
              <div className={'w-full h-2 bg-zinc-200 rounded-2xl'}>
                <div className={'w-6/6 h-full bg-[#655442] rounded-2xl'}></div>
              </div>
            </div>
            <div className={'h-2/3 w-[470px] p-2'}>

              <div className='w-full h-[180px] outline-1 outline-black mt-[20px]'>
                <div className={'font-preR text-[24px] mb-4'}>선호하는 알콜 도수는?</div>
                <div className='flex justify-between items-center w-full h-[100px]'>
                  <div onClick={() => {
                    setLevel(1)
                  }}
                    className={`flex justify-center items-center w-[86px] h-[60px] rounded-[4px] hover:cursor-pointer ${level === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>1 ~ 5</div>
                  <div onClick={() => {
                    setLevel(2)
                  }}
                    className={`flex justify-center items-center w-[86px] h-[60px] rounded-[4px] hover:cursor-pointer ${level === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>6 ~ 10</div>
                  <div
                    onClick={() => {
                      setLevel(3)
                    }}
                    className={`flex justify-center items-center w-[86px] h-[60px] rounded-[4px] hover:cursor-pointer ${level === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>11 ~ 20</div>
                  <div
                    onClick={() => {
                      setLevel(4)
                    }}
                    className={`flex justify-center items-center w-[86px] h-[60px] rounded-[4px] hover:cursor-pointer ${level === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>21 ~ 30</div>
                  <div
                    onClick={() => {
                      setLevel(5)
                    }}
                    className={`flex justify-center items-center w-[86px] h-[60px] rounded-[4px] hover:cursor-pointer ${level === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>31 이상</div>
                </div>
              </div>

              <div className='w-full h-[180px] outline-1 outline-black mt-[20px]'>
                <div className={'font-preR text-[24px] mb-4'}>술을 고를때 가장 중요한 것은?</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setWeight('맛')
                  }}
                    className={`flex flex-col text-[16px] font-medium justify-center items-center w-[130px] h-[90px] rounded-[4px] hover:cursor-pointer ${weight === '맛' ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <GiWineBottle className='text-[24px] mb-[6px]'></GiWineBottle>
                    맛</div>
                  <div onClick={() => {
                    setWeight('도수')
                  }}
                    className={`flex flex-col text-[16px] font-medium justify-center items-center w-[130px] h-[90px] rounded-[4px] hover:cursor-pointer ${weight === '도수' ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <FaPercent className='text-[16px] mb-[6px]'></FaPercent>
                    도수</div>
                  <div onClick={() => {
                    setWeight('안주')
                  }}
                    className={`flex flex-col text-[16px] font-medium justify-center items-center w-[130px] h-[90px] rounded-[4px] hover:cursor-pointer ${weight === '안주' ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>
                    <MdLocalDining className='text-[24px] mb-[6px]'></MdLocalDining>
                    안주</div>
                </div>
              </div>
            </div>
            <div onClick={() => {
              setPage(page + 1)

              sendData()
              setTimeout(() => {

                setPage(page + 2)

              }
                , 4000);
            }} className={`flex justify-center items-center text-white font-preL rounded w-[470px] h-[60px] text-[20px] ${weight && level ? 'bg-[#847260] text-white hover:cursor-pointer' : 'bg-[#E4E4E7] '} `}>추천받기</div>
          </div>


          {/* 7페이지 */}
          <div className={`${page != 7 && 'hidden'} flex flex-col items-center w-[700px] h-[700px] rounded-xl bg-white/90`}>
            <div className={'h-2/3 w-[470px] p-2'}>
              <div className='w-full h-[180px] outline-1 outline-black mt-[20px]'>
                <div className='flex flex-col justify-between items-center w-full h-[300px] mt-[160px]'>
                  <img src='/images/loading4.gif' className='w-full'></img>
                  <p className='font-bold text-[28px] text-[#191919]'>{session.name}님의</p>
                  <p className='font-medium text-[28px] text-[#191919]'>취향을 분석중입니다.</p>
                </div>
              </div>


            </div>
          </div>

          {/* 8페이지 */}
          <div className={`${page != 8 && 'hidden'} flex flex-col items-center w-[580px] h-[700px] rounded-xl bg-white/90`}>
            <div className={'h-2/3 w-[470px] p-2'}>
              <div className='flex flex-col justify-center items-center w-full h-[460px] mt-[60px]'>
                <div className='flex w-full h-[200px] space-x-4  items-center justify-center'>
                  {session.img && <img src={session.img} alt='프로필사진' className='w-[60px] h-[60px] rounded-full object-cover'></img>}
                  <div>
                    <span className={'font-preB text-[30px]'}>{session.name}</span>
                    <span className={'font-preL text-[30px]'}>님의</span>
                    <span className={'font-preB text-[30px]'}>&nbsp;취향 분석 결과</span>
                  </div>
                </div>
                <div className='flex flex-col justify-between items-center w-full h-[400px] mt-[60px] rounded-[8px]'>
                  <div className='flex justify-around w-[440px] h-[240px] mt-[4px]'>
                    <img src={resultImg} alt="이미지" className='h-[240px] object-scale-down' />
                    <div className='flex justify-center items-center w-[200px]'>
                      <RadarChart drink={drinkTaste}></RadarChart>
                    </div>
                  </div>
                  <p className='mt-[40px] font-preB text-[28px] font-bold'>{resultName}</p>
                  <p className='mt-[10px] font-preL text-[20px]'>{Number(resultLevel)}% ㅣ {resultAmount}</p>
                </div>
              </div>

            </div>
            <div onClick={() => {
              location.href = `/list/${resultId}`
            }
            } className={`flex justify-center items-center text-white font-preL rounded w-[400px] h-[60px] text-[20px] mt-[130px] bg-gradient-to-r from-[#8FAADC] to-[#8FAADC]/70 hover:bg-gradient-to-r hover:from-[#809ED4] hover:to-[#809ED4]/70 hover:cursor-pointer `}>{resultName} 더 알아보러가기</div>
          </div>



        </div>
      </div>
    </>
  )
}



