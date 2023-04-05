import { useState } from 'react'
import { DrinkTasteType, ObjNumberType } from '@/types/DataTypes'
import { AiOutlineGift } from 'react-icons/ai'
import { VscTriangleDown } from 'react-icons/vsc'
import  { CgClose } from 'react-icons/cg';
import { toastError } from '../common/toast';
import { GiftDrinkType, RecommendDrinkType } from '@/types/DrinkType';
import { getGiftList } from '@/api/auth/drink';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useRouter } from 'next/router';
export const GiftModal = (props: {modalOpen : any}) => {
    const router = useRouter()

    const {modalOpen} = props
    const [page, setPage] = useState<number>(1)

    const [gender, setGender] = useState<string>('성별을 선택해주세요.')
    const [age, setAge] = useState<string>('연령대를 선택해주세요.')
    const [openGender, setOpenGender] = useState<boolean>(false)
    const [openAge, setOpenAge] = useState<boolean>(false)

    const initTaste : DrinkTasteType = {
      tasteSweet : 0,
      tasteBody : 0,
      tasteThroat : 0,
      tasteFlavor : 0,
      tasteSour : 0,
      tasteRefresh : 0
    }

    const [taste, setTaste] = useState<DrinkTasteType>(initTaste)

    const fixedMinPrice = 0;
    const fixedMaxPrice = 400000;
    const priceGap = 1000;
    const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice); 
    const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);
    const [rangeMinPercent, setRangeMinPercent] = useState(0);
    const [rangeMaxPercent, setRangeMaxPercent] = useState(0);

    const fixedMinLevel = 1;
    const fixedMaxLevel = 56;
    const levelGap = 1;
    const [rangeMinLevel, setRangeMinLevel] = useState(fixedMinLevel); 
    const [rangeMaxLevel, setRangeMaxLevel] = useState(fixedMaxLevel);
    const [rangeMinPercentLevel, setRangeMinPercentLevel] = useState(0);
    const [rangeMaxPercentLevel, setRangeMaxPercentLevel] = useState(0);

    const [giftList, setGiftList] = useState<GiftDrinkType[]>([])

    const prcieRangeMinValueHandler = e => {
        setRangeMinValue(parseInt(e.target.value));
    };

    const prcieRangeMaxValueHandler = e => {
        setRangeMaxValue(parseInt(e.target.value));
    };

    const twoRangeHandler = () => {
        if (rangeMaxValue - rangeMinValue < priceGap) {
          setRangeMaxValue(rangeMinValue => rangeMinValue + priceGap);
          setRangeMinValue(rangeMaxValue => rangeMaxValue - priceGap);
        } else {
          setRangeMinPercent(() => (rangeMinValue / fixedMaxPrice) * 100);
          setRangeMaxPercent(() => 100 - (rangeMaxValue / fixedMaxPrice) * 100);
        }
    };

    const levelRangeMinValueHandler = e => {
        setRangeMinLevel(parseInt(e.target.value));        
    };

    const levelRangeMaxValueHandler = e => {
        setRangeMaxLevel(parseInt(e.target.value));
    };

    const twoLevelRangeHandler = () => {
        if (rangeMaxLevel - rangeMinLevel < levelGap) {
            setRangeMaxLevel(rangeMinLevel => rangeMinLevel + levelGap);
            setRangeMinLevel(rangeMaxLevel => rangeMaxLevel - levelGap);
        } else {
            setRangeMinPercentLevel(() => (rangeMinLevel / fixedMaxLevel) * 100);
            setRangeMaxPercentLevel(() => 100 - (rangeMaxLevel / fixedMaxLevel) * 100);
        }
    };

    const tags = [
      {name: '강한 단맛', key: 'tasteSweet', value: 1},
      {name: '약한 단맛', key: 'tasteSweet', value :-1},
      {name: '강한 신맛', key: 'tasteSour', value: 1},
      {name: '약한 신맛', key: 'tasteSour', value: -1},
      {name: '탄산이 있음', key: 'tasteRefresh', value: 1},
      {name: '부드러운 목넘김', key: 'tasteThroat', value: -1},
      {name: '거친 목넘김', key: 'tasteThroat', value: 1},
      {name: '무거운 바디감', key: 'tasteBody', value: 1},
      {name: '가벼운 바디감', key: 'tasteBody', value: -1},
      {name: '향이 강함', key: 'tasteFlavor', value: 1},
      {name: '향이 약함', key: 'tasteFlavor', value: -1},    
    ]

    const selectTag = (key: string, value: number) => {
      const new_taste = {...taste}
      if (new_taste[key] == value) {
        new_taste[key] = 0
      } else {
        new_taste[key] = value
      }
      setTaste(new_taste)
    }

    const check = () => {
      if(gender == '성별을 선택해주세요.'){
        toastError("성별을 선택해주세요.", '✅', 'top-right')
        return false
      }
      if(age == '연령대를 선택해주세요.'){
        toastError("연령대를 선택해주세요.", '✅', 'top-right')
        return false
      }
      return true
    }

    const submit = async () => {
      if(gender == '성별을 선택해주세요.'){
        toastError("성별을 선택해주세요.", '✅', 'top-right')
        return
      }
      if(age == '연령대를 선택해주세요.'){
        toastError("연령대를 선택해주세요.", '✅', 'top-right')
        return
      }
      setPage(3)
      const submitData = {
        sex : gender,
        age : age.slice(0,2),
        tasteSweet : taste.tasteSweet,
        tasteSour : taste.tasteSour,
        tasteFlavor : taste.tasteFlavor,
        tasteRefresh : taste.tasteRefresh,
        tasteThroat : taste.tasteThroat,
        tasteBody : taste.tasteBody,
        minPrice : rangeMinValue,
        maxPrice : rangeMaxValue,
        minLevel : rangeMinLevel,
        maxLevel : rangeMaxLevel
      }

      const list = await getGiftList(submitData)
      setTimeout(()=>{
        setGiftList(list)
      }, 3000)
    }

    return (
        <>
          <div className={`${page == 1? 'flex' : 'hidden'} flex-col items-center w-[600px] h-[510px]`}>
              <div className={'flex w-full justify-end'}>
                  <button className={'relative top-[20px] right-[20px] text-[30px] text-zinc-400'} onClick={ () => modalOpen() }><CgClose/></button>
              </div>
              <div className={'text-[35px] font-preB mt-[7%] flex justify-center items-center '}><AiOutlineGift className={'mr-2'}/>전통주 선물하기</div>
              <div>선물 받는 분의 정보를 입력해주세요.</div>
              <div className={'mt-4 w-[88%] py-8 grid grid-cols-2 gap-x-4 gap-y-10'}>
                  <div className={'flex flex-col'}>
                      <button onClick={()=>setOpenGender(!openGender)} className={'mb-1 h-[50px] bg-zinc-200/50 rounded px-4 flex justify-between items-center text-[18px]'}>
                          <div>{gender}</div>
                          <VscTriangleDown className={'text-zinc-400'} />
                      </button>
                      {openGender && <ul className={'w-full relative bg-white drop-shadow-lg shadow-lg rounded'}>
                          <li onClick={()=>{setGender('남성'); setOpenGender(false)}} className={'absolute w-full flex items-center px-4 h-[40px] bg-white hover:bg-zinc-100 rounded-t'}>남성</li>
                          <li onClick={()=>{setGender('여성'); setOpenGender(false)}} className={'absolute w-full top-[40px] flex items-center px-4 h-[40px] bg-white hover:bg-zinc-100 rounded-b'}>여성</li>
                      </ul>}
                  </div>
                  <div className={'flex flex-col'}>
                      <button onClick={()=>setOpenAge(!openAge)} className={'mb-1 h-[50px] bg-zinc-200/50 rounded px-4 flex justify-between items-center text-[18px]'}>
                          <div>{age}</div>
                          <VscTriangleDown className={'text-zinc-400'} />
                      </button>
                      {openAge && <ul className={'w-full relative drop-shadow-lg rounded'}>
                          <li onClick={()=>{setAge('20대'); setOpenAge(false)}} className={'absolute w-full flex items-center px-4 h-[40px] bg-white hover:bg-zinc-100 rounded-t'}>20대</li>
                          <li onClick={()=>{setAge('30대'); setOpenAge(false)}} className={'absolute w-full flex top-[40px] items-center px-4 h-[40px] bg-white hover:bg-zinc-100'}>30대</li>
                          <li onClick={()=>{setAge('40대'); setOpenAge(false)}} className={'absolute w-full flex top-[80px] items-center px-4 h-[40px] bg-white hover:bg-zinc-100'}>40대</li>
                          <li onClick={()=>{setAge('50대'); setOpenAge(false)}} className={'absolute w-full flex top-[120px] items-center px-4 h-[40px] bg-white hover:bg-zinc-100'}>50대</li>
                          <li onClick={()=>{setAge('60대 이상'); setOpenAge(false)}} className={'absolute w-full top-[160px] flex items-center px-4 h-[40px] bg-white hover:bg-zinc-100 rounded-b'}>60대 이상</li>
                      </ul>}
                  </div>
              </div>
              <div className={'flex w-[88%] mt-6'}>추가 정보를 입력하면 더 정확한 결과를 받으실 수 있습니다.</div> 
              <div onClick={()=>{if(check())setPage(2)}} className={'w-[88%] text-[18px] rounded h-[60px] flex justify-center items-center mt-2 cursor-pointer text-white bg-[#655442] hover:bg-[#5B4D3E]'}>(선택) 추가정보 입력하기</div>
              <div onClick={()=>submit()} className={'w-[88%] text-[18px] border rounded h-[60px] flex justify-center items-center mt-2 cursor-pointer text-[#655442] border-[#655442] hover:bg-stone-200 hover:border-none'}>추가정보 없이 제출하기</div>
          </div>
          <div className={`${page == 2 ? 'flex' : 'hidden'} flex-col w-[600px] h-[870px] pt-6 px-12`}>
            <div className={'flex w-full justify-end'}>
                <button className={'relative top-[5px] right-[-20px] text-[30px] text-zinc-400'} onClick={ () => modalOpen() }><CgClose/></button>
            </div>
            <div className={'flex w-full justify-center items-center h-[60px] text-[24px] font-preM mb-4'}>추가 정보를 입력해주세요.</div> 
              <div className={"flex w-full pl-4 pb-2 text-[18px] font-preR"}>가격</div>
                  <div className='flex w-full'>
                      <div className={'relative h-[4px] w-[100%] rounded-[10px] bg-[#dddddd]'}>
                          <div className={`absolute h-[4px] rounded-[10px] bg-[#b0b0b0]`}
                          style={{left:`${rangeMinPercent}%`, right:`${rangeMaxPercent}%`}}
                          />
                          <div className={'relative'}>
                                  <input className={'absolute top-[-5px] w-[100%] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-[50%] [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#b0b0b0]' } 
                                  type="range" 
                                  name="" 
                                  id="" 
                                  min={fixedMinPrice}
                                  max={fixedMaxPrice - priceGap}
                                  step="100"
                                  value={rangeMinValue}
                                  onChange={e => {
                                      prcieRangeMinValueHandler(e);
                                      twoRangeHandler();
                                  }}
                                      
                                  />
                                  <input className={'absolute top-[-5px] w-[100%] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-[50%] [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#b0b0b0]'}
                                  type="range" 
                                  
                                  min={fixedMinPrice + priceGap}
                                  max={fixedMaxPrice}

                                  step="100"
                                  value={rangeMaxValue}
                                  onChange={e => {
                                      prcieRangeMaxValueHandler(e);
                                      twoRangeHandler();
                                  }}
                                  />
                          </div>
                      </div>
                  </div>
                  <div className={'w-full my-6 flex justify-between'}>
                    <div className='flex flex-col pl-4 py-2 w-[120px] border-[1px] border-[#b0b0b0] rounded-md'>
                      <div className='text-[16px]'>최소 갸격</div>
                      <div className='font-preB'>₩ {rangeMinValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    </div>
                    <div className={'flex flex-col'}>
                    <div className='flex flex-col pl-4 py-2 w-[120px] border-[1px] border-[#b0b0b0] rounded-md'>
                      <div className='text-[16px]'>최대 가격</div>
                      <div className='font-preB'>₩ {rangeMaxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                    </div>
                    </div>
                  </div>
                  <div className={"flex w-full pl-4 pb-2 text-[18px] font-preR"}>도수</div>
                  <div className='flex w-full'>
                      <div className={'relative h-[4px] w-[100%] rounded-[10px] bg-[#dddddd]'}>
                          <div className={`absolute h-[4px] rounded-[10px] bg-[#b0b0b0]`}
                          style={{left:`${rangeMinPercentLevel}%`, right:`${rangeMaxPercentLevel}%`}}
                          />
                          <div className={'relative'}>
                                  <input className={'absolute top-[-5px] w-[100%] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-[50%] [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#b0b0b0]' } 
                                  type="range" 
                                  name="" 
                                  id="" 
                                  min={fixedMinLevel}
                                  max={fixedMaxLevel - levelGap}
                                  step="1"
                                  value={rangeMinLevel}
                                  onChange={e => {
                                      levelRangeMinValueHandler(e);
                                      twoLevelRangeHandler();
                                  }}      
                                  />
                                  <input className={'absolute top-[-5px] w-[100%] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-[15px] [&::-webkit-slider-thumb]:w-[15px] [&::-webkit-slider-thumb]:rounded-[50%] [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#b0b0b0]'}
                                  type="range" 
                                  
                                  min={fixedMinLevel + levelGap}
                                  max={fixedMaxLevel}

                                  step="1"
                                  value={rangeMaxLevel}
                                  onChange={e => {
                                      levelRangeMaxValueHandler(e);
                                      twoLevelRangeHandler();
                                  }}
                                  />
                          </div>
                      </div>
                  </div>
                  <div className={'w-full my-6 flex justify-between'}>
                    <div className='flex flex-col w-[120px] pl-4 py-2 border-[1px] border-[#b0b0b0] rounded-md'>
                        <div className='text-[16px]'>최소 도수</div>
                        <div className='font-preB'>{rangeMinLevel} %</div>
                    </div>
                    <div className='w-[120px] flex flex-col pl-4 py-2 border-[1px] border-[#b0b0b0] rounded-md'>
                        <div className='text-[16px]'>최대 도수</div>
                        <div className='font-preB'>{rangeMaxLevel} %</div>
                    </div>
                  </div>
                  <div className='w-full mt-[5px]'>
              <div className={'text-[18px] font-preR mb-4'}>원하는 태그를 선택해주세요. (중복 선택 가능)</div>
              <div className='grid grid-cols-3 gap-2 w-full'>
                {tags.map((item)=>{
                  return <div onClick={()=>selectTag(item.key, item.value)} className={`h-[50px] flex justify-center items-center bg-zinc-100 rounded cursor-pointer hover:bg-zinc-300 hover:font-preM ${taste[item.key] == item.value && 'bg-zinc-300 font-preM'}`} key={item.name}>{item.name}</div>
                })}
              </div>
            </div>
            <div onClick={()=>submit()} className={'mt-12 flex justify-center items-center w-full h-[60px] rounded bg-[#655442] hover:bg-[#5B4D3E] text-white text-[18px] font-preR cursor-pointer'}>제출하고 선물추천 받기</div>
          </div>
          <div className={`${page == 3 ? 'flex' : 'hidden'} flex-col`}>
            <div className={`${giftList.length == 0 ? 'flex' : 'hidden'} flex-col justify-center items-center w-[600px] h-[600px]`}>
              <img src='/images/loading.gif' className='w-[600px]'></img>
              <p className='font-preM text-[30px] text-[#AEA896]'>맞춤 선물을 추천중입니다...</p>
            </div>
            <div className={`${giftList.length != 0 ? 'flex' : 'hidden'} flex-col items-center w-[1500px] h-[700px]`}>
            <div className={'flex w-full justify-end'}>
                <button className={'relative top-[30px] right-[30px] text-[30px] text-zinc-400'} onClick={ () => modalOpen() }><CgClose/></button>
            </div>
                <div className={'font-preB text-[32px] mt-10'}>이런 선물은 어때요?</div>
                <div className={'flex items-center'}><span className={'font-preM text-[20px] text-teal-500 mr-1'}>{age}, {gender}</span>에게 인기있는 맞춤형 전통주 리스트입니다.</div>
                <div className={'flex'}>
                  {giftList.slice(0,4).map((drink)=>{
                    return (
                      <div className={'flex flex-col items-center mt-12 pt-6 rounded shadow-[3px_3px_8px_rgba(0,0,0,0.2)] mx-4 w-[300px] h-[400px]'} key={drink.drinkId}>
                        <div className={'font-preM text-[24px] mb-4'}>{drink.drinkName}</div>
                        <img className={'h-[44%] mb-4'} src={drink.drinkImg}/>
                        <div className={'mb-1 font-preR text-[18px]'}>{drink.drinkPrice} 원</div>
                        <div>{drink.drinkLevel}% | {drink.drinkAmount} | {drink.drinkType}</div>
                        <div onClick={()=>router.push(`/list/${drink.drinkId}`)} className={'mt-5 shadow cursor-pointer flex justify-center items-center py-2 px-4 bg-gradient-to-r from-teal-400 to-emerald-400 transition hover:-translate-y-0.5 duration-300 ease-in text-white rounded-full hover:font-preR hover:shadow-md hover:scale-105'}>
                          <HiMagnifyingGlass className={'mr-2'} />
                          더 자세히 알아보기
                        </div>
                      </div>
                    )
                  })}
                </div>
            </div>
          </div>
        </>
    )
}