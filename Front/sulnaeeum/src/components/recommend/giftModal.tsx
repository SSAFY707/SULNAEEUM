import { useState } from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import { VscTriangleDown } from 'react-icons/vsc'
import  { CgClose } from 'react-icons/cg';
export const GiftModal = (props: {modalOpen : any}) => {
    const {modalOpen} = props
    const [gender, setGender] = useState<string>('성별을 선택해주세요.')
    const [age, setAge] = useState<string>('연령대를 선택해주세요.')
    // const [level, setLevel] = useState<string>('도수를 선택해주세요.')
    // const [fruit, setFruit] = useState<string>('과일을 선택해주세요.')
    const [openGender, setOpenGender] = useState<boolean>(false)
    const [openAge, setOpenAge] = useState<boolean>(false)
    // const [openLevel, setOpenLevel] = useState<boolean>(false)
    // const [openFruit, setOpenFruit] = useState<boolean>(false)
    const [tasteSour, setTasteSour] = useState<number>(0);
    const [tasteSweet, setTasteSweet] = useState<number>(0);
    const [tasteFlavor, setTasteFlavor] = useState<number>(0);
    const [tasteRefresh, setTasteRefresh] = useState<number>(0);
    const [tasteBody, setTasteBody] = useState<number>(0);
    const [tasteThroat, setTasteThroat] = useState<number>(0);
  
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


    return (
        <>
            <div className="flex flex-col items-center w-[600px] h-[900px] overflow-y-auto">
                <div className={'flex w-full justify-end'}>
                    <button className={'relative top-[20px] right-[20px] text-[30px] text-zinc-400'} onClick={ () => modalOpen() }><CgClose/></button>
                </div>
                <div className={'text-[35px] font-preB  mt-[7%] flex justify-center items-center '}><AiOutlineGift className={'mr-2'}/>전통주 선물하기</div>
                <div>선물 받는 분의 정보를 입력해주세요.</div>
                <div className={'w-full p-8 grid grid-cols-2 gap-x-4 gap-y-10'}>
                    <div className={'flex flex-col'}>
                        <button onClick={()=>setOpenGender(!openGender)} className={'mb-1 h-[50px] bg-zinc-200/70 rounded px-4 flex justify-between items-center text-[18px]'}>
                            <div>{gender}</div>
                            <VscTriangleDown className={'text-zinc-400'} />
                        </button>
                        {openGender && <ul className={'w-full relative shadow-md rounded'}>
                            <li onClick={()=>{setGender('남성'); setOpenGender(false)}} className={'absolute w-full flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-t'}>남성</li>
                            <li onClick={()=>{setGender('여성'); setOpenGender(false)}} className={'absolute w-full top-[40px] flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-b'}>여성</li>
                        </ul>}
                    </div>
                    <div className={'flex flex-col'}>
                        <button onClick={()=>setOpenAge(!openAge)} className={'mb-1 h-[50px] bg-zinc-200/70 rounded px-4 flex justify-between items-center text-[18px]'}>
                            <div>{age}</div>
                            <VscTriangleDown className={'text-zinc-400'} />
                        </button>
                        {openAge && <ul className={'w-full relative shadow-md rounded'}>
                            <li onClick={()=>{setAge('20대'); setOpenAge(false)}} className={'absolute w-full flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-t'}>20대</li>
                            <li onClick={()=>{setAge('30대'); setOpenAge(false)}} className={'absolute w-full flex top-[40px] items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200'}>30대</li>
                            <li onClick={()=>{setAge('40대'); setOpenAge(false)}} className={'absolute w-full flex top-[80px] items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200'}>40대</li>
                            <li onClick={()=>{setAge('50대'); setOpenAge(false)}} className={'absolute w-full flex top-[120px] items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200'}>50대</li>
                            <li onClick={()=>{setAge('60대 이상'); setOpenAge(false)}} className={'absolute w-full top-[160px] flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-b'}>60대 이상</li>
                        </ul>}
                    </div>
                    {/* <div className={'flex flex-col'}>
                        <button onClick={()=>setOpenLevel(!openLevel)} className={'mb-1 h-[50px] bg-zinc-200/70 rounded px-4 flex justify-between items-center text-[18px]'}>
                            <div>{level}</div>
                            <VscTriangleDown className={'text-zinc-400'} />
                        </button>
                        {openLevel && <ul className={'w-full relative shadow-md rounded'}>
                            <li onClick={()=>{setLevel('남성'); setOpenLevel(false)}} className={'absolute w-full flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-t'}>남성</li>
                            <li onClick={()=>{setLevel('여성'); setOpenLevel(false)}} className={'absolute w-full top-[40px] flex items-center px-4 h-[40px] bg-zinc-100 hover:bg-zinc-200 rounded-b'}>여성</li>
                        </ul>}
                    </div>
                    */}
                    
                </div>
                <div>선물 받는 분의 추가 정보를 입력해주세요.</div>
                
                <div className={"flex w-full pl-8 pb-2 text-[18px]"}>가격</div>
                    <div className='flex w-[90%]'>
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
                    <div className={'w-full p-8 grid grid-cols-2 gap-x-[25%] gap-y-15'}>
                    <div className={'flex flex-col'}>
                    <div className='h-[50px] border-solid border-[2px] border-[#b0b0b0] rounded-[10px]'>
                            <div className='flex pl-[7px] flex-col'>
                                <div className='text-[14px]'>최소 요금</div>
                                <div className='font-preB'>₩ {rangeMinValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col'}>
                    <div className='h-[50px] border-solid border-[2px] border-[#b0b0b0] rounded-[10px]'>
                            <div className='flex flex-col pl-[7px]'>
                                <div className='text-[14px]'>최대 요금</div>
                                <div className='font-preB'>₩ {rangeMaxValue.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}</div>
                            </div>
                        </div>
                    </div>
                    </div>
                    <div className={"flex w-full pl-8 pb-2 text-[18px]"}>도수</div>
                    <div className='flex w-[90%]'>
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
                    <div className={'w-full p-8 grid grid-cols-2 gap-x-[25%] gap-y-10'}>
                    <div className={'flex flex-col'}>
                    <div className='h-[50px] border-solid border-[2px] border-[#b0b0b0] rounded-[10px]'>
                            <div className='flex pl-[7px] flex-col'>
                                <div className='text-[14px]'>최소 도수</div>
                                <div className='font-preB'>{rangeMinLevel} %</div>
                            </div>
                        </div>
                    </div>
                    <div className={'flex flex-col'}>
                    <div className='h-[50px] border-solid border-[2px] border-[#b0b0b0] rounded-[10px]'>
                            <div className='flex flex-col pl-[7px]'>
                                <div className='text-[14px]'>최대 도수</div>
                                <div className='font-preB'>{rangeMaxLevel} %</div>
                            </div>
                        </div>
                    </div>
                    </div>

                <div className='w-[90%] h-[130px] mt-[5px]'>
                <div className={'text-[18px]'}>술의 바디감 정보를 입력해주세요.</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteBody(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteBody === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteBody(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteBody === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteBody(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteBody === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteBody(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteBody === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteBody(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteBody === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
                </div>

                <div className='w-[90%] h-[130px] mt-[20px]'>
                <div className={'text-[18px]'}>술의 단맛 정보를 입력해주세요.</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteSweet(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteSweet(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteSweet(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteSweet(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteSweet(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSweet === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>

              <div className='w-[90%] h-[130px] mt-[20px]'>
                <div className={'text-[18px]'}>술의 신맛 정보를 입력해주세요.</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteSour(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSour === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteSour(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSour === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteSour(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSour === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteSour(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSour === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteSour(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteSour === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>
              <div className='w-[90%] h-[130px] mt-[20px]'>
                <div className={'text-[18px]'}>술의 향 정보를 입력해주세요.</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteFlavor(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteFlavor(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteFlavor(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteFlavor(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteFlavor(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteFlavor === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>

              <div className='w-[90%] h-[130px] mt-[20px]'>
                <div className={'text-[18px]'}>술의 청량감 정보를 입력해주세요.(탄산 정도)</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteRefresh(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteRefresh(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteRefresh(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteRefresh(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteRefresh(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteRefresh === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>
         

              <div className='w-[90%] h-[130px] mt-[5px]'>
                <div className={'text-[18px]'}>술의 목넘김 정보를 입력해주세요.</div>
                <div className='flex justify-between items-center w-full h-[100px] '>
                  <div onClick={() => {
                    setTasteThroat(1)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 1 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우약함</div>
                  <div onClick={() => {
                    setTasteThroat(2)
                  }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 2 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteThroat(3)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 3 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>보통</div>
                  <div
                    onClick={() => {
                      setTasteThroat(4)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 4 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>조금약함</div>
                  <div
                    onClick={() => {
                      setTasteThroat(5)
                    }}
                    className={`flex justify-center items-center w-[80px] h-[40px] rounded-[4px] hover:cursor-pointer ${tasteThroat === 5 ? 'bg-[#847260] text-white hover:bg-[#847260]' : 'bg-gray-100 hover:bg-gray-200'}`}>매우강함</div>
                </div>
              </div>


                <div className={'flex w-[280px] mt-10 mb-10 items-center gap-x-5 ml-[40%] text-[18px]'}>
                        <div onClick={modalOpen} className={"flex justify-center items-center border-solid border-[2px] border-zinc-300 rounded-[8px] h-[50px] w-[140px] py-2 cursor-pointer hover:bg-[#CECECE] text-[#000000]"}>뒤로가기</div>
                        {/* 통신 */}
                        <div onClick={modalOpen} className={"flex justify-center items-center border-solid border-[2px] border-zinc-300 rounded-[8px] h-[50px] w-[140px] py-2 cursor-pointer hover:bg-[#CECECE] text-[#000000]"}>제출하기</div>
                </div>
            </div>
        </>
    )
}