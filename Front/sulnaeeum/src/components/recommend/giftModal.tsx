import { useState } from 'react'
import { AiOutlineGift } from 'react-icons/ai'
import  { CgClose } from 'react-icons/cg';

export const GiftModal = (props: {modalOpen : any}) => {
    const {modalOpen} = props

    const fixedMinPrice = 0;
    const fixedMaxPrice = 100000;
    const priceGap = 1000;
    const [rangeMinValue, setRangeMinValue] = useState(fixedMinPrice); 
    const [rangeMaxValue, setRangeMaxValue] = useState(fixedMaxPrice);
    const [rangeMinPercent, setRangeMinPercent] = useState(0);
    const [rangeMaxPercent, setRangeMaxPercent] = useState(0);

    const prcieRangeMinValueHandler = e => {
        setRangeMinValue(parseInt(e.target.value));
        console.log("작은"+rangeMinValue);
        console.log("튼"+rangeMaxValue);
        
    };

    const prcieRangeMaxValueHandler = e => {
        setRangeMaxValue(parseInt(e.target.value));
        console.log("작은"+rangeMinValue);
        console.log("튼"+rangeMaxValue);
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


    return (
        <>
            <div className='w-[70%] h-[70%]  absolute'>
                <button className={'absolute top-[15px] right-[15px] text-[30px] hover:text-[#000000]'} onClick={ () => modalOpen() }><CgClose/></button>
            </div>
            <div className="flex flex-col items-center w-[90%] h-[95%]">
                <div className={'text-[35px] font-preB  mt-[7%] flex justify-center items-center '}><AiOutlineGift className={'mr-2'}/>전통주 선물하기</div>
                    <div> 선물 받는 분의 정보를 입력해주세요.</div>

                        <div className={"mt-[2%]"}>가격</div>
                        <div className={'relative h-[4px] w-[50%] rounded-[10px] bg-[#dddddd]'}>
                            <div className={`absolute h-[4px] rounded-[10px] bg-[#b0b0b0]`}
                            style={{left:`${rangeMinPercent}%`, right:`${rangeMaxPercent}%`}}
                            />
            
                            <div className={'relative'}>
                                    <input className={'absolute top-[-9px] w-[100%] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-[30px] [&::-webkit-slider-thumb]:w-[30px] [&::-webkit-slider-thumb]:rounded-[50%] [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#b0b0b0]' } 
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
                                    <input className={'absolute top-[-9px] w-[100%] appearance-none bg-transparent pointer-events-none [&::-webkit-slider-thumb]:pointer-events-auto [&::-webkit-slider-thumb]:appearance-none [&::-webkit-slider-thumb]:bg-white [&::-webkit-slider-thumb]:h-[30px] [&::-webkit-slider-thumb]:w-[30px] [&::-webkit-slider-thumb]:rounded-[50%] [&::-webkit-slider-thumb]:border-solid [&::-webkit-slider-thumb]:border-2 [&::-webkit-slider-thumb]:border-[#b0b0b0]'}
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
        </>
    )
}