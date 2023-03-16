import { randomInt } from 'crypto';
import React, { useState } from 'react'

const Jubti: React.FC = () => {
    type SelData = {
      [index: string]: string | Number 
      age : string;
      sex: string;
      level: Number;
      tasteRefresh: Number;
      tasteBody: Number;
      tasteThroat: Number;
      tasteSour: Number;
      tasteSweet: Number;
      tasteFlavor: Number;
      dish: string;
      ie: Number;
      ns: Number;
      ft: Number;
      jp: Number;
    } 

    const datas = {
      age : [
        { name: '20대', value: '20s'},
        { name: '30대', value: '30s'},
        { name: '40대', value: '40s'},
        { name: '50대', value: '50s'},
        { name: '60대 이상', value: '60s' }
        ],
      sex : [
        {name: '남성', value: 'man'},
        {name: '여성', value: 'woman'},
      ],
      dish : [
        {name: '육류', value: 'meat'},
        {name: '양식', value: 'western'},
        {name: '해산물', value: 'seafood'},
        {name: '전 / 무침', value: 'jeon'},
        {name: '탕 / 전골', value: 'soup'},
        {name: '디저트', value: 'dessert'}
      ],
      question : [
        {value: 'tasteRefresh', value2: 'tasteBody', q1: '탄산음료', q2: '이온음료'},
        {value: 'ie', q1: '혼술', q2: '같이 술먹기'},
        {value: 'tasteThroat', q1: '처음처럼', q2: '참이슬'},
        {value: 'level', q1: '가볍게 술 한잔', q2: '얼큰하게 만취'},
        {value: 'ns', q1: '술 섞어먹기', q2: '그냥 먹기'},
        {value: 'tasteSweet', value2: 'tasteSour', q1: '새콤한 젤리', q2: '달콤한 쿠키'},
        {value: 'ft', q1: '술 마시면 운다', q2: '술 마셔도 안운다'},
        {value: 'tasteFlavor', q1: '반민초', q2: '민초'},
        {value: 'jp', q1: '미리 찾아본 술집', q2: '즉형적으로 정한 술집'},
      ],
    }
    
      const sel_data : SelData = {
        age: '',
        sex: '',
        level: 0,
        tasteRefresh: 0,
        tasteBody: 0,
        tasteThroat: 0,
        tasteSour: 0,
        tasteSweet: 0,
        tasteFlavor: 0,
        dish: '',
        ie: 0,
        ns: 0,
        ft: 0,
        jp: 0
      }
      
      const [data, setData] = useState<SelData>(sel_data)
      const [page, setPage] = useState(0)
      // const [mbti, setMbti] = useState({ie: 0, ns: 0, ft: 0, jp: ''})
      
      const select = (key : string, value : any) => {
        // console.log(key, value)
        const new_data : SelData = {...data}
        new_data[key] = value
        setData(new_data)
      }

      const jubti = () => {
        const check = (key : string, value: Number) => {
          if (value < 3) {
            return key[0]
          } else if (value > 3) {
            return key[1]
          } else {
            const idx = randomInt(2)
            return key[idx]
          }
        }
        let mbti = ''
        mbti += check('ie', data['ie'])
        mbti += check('ns', data['ns'])
        mbti += check('ft', data['ft'])
        mbti += check('jp', data['jp'])

        return mbti
      }

    

      return (
        <>
      <div className={`${page == 0 ? 'block' : 'hidden'} flex flex-col items-center w-full h-[1080px] overflow-hidden`}>
        <div className={'flex flex-col justify-center items-center h-[600px] md:h-[380px] w-full bg-[#AEA896] px-10'}>
          <div className={'flex items-center flex-col text-white mb-10 md:mt-16'}>
            <img className={'h-[14px] mb-2 md:h-[24px] md:mt-6 md:mb-8'} src="/images/jubti/pattern1.png" />
            <h1 className={'text-[40px] font-bold md:text-[50px]'}>전통주 유형검사</h1>
            <div className={'text-[18px] font-preEL md:text-[24px] md:my-4'}>간단한 질문으로 나의 酒BTI를 확인해보세요.</div>
            <img className={'w-[350px] mt-4 mb-6 md:w-[602px] md:mt-10'} src="/images/jubti/pattern2.png" />
          </div>
          <div className={'hidden md:flex w-[200px] h-[60px] absolute top-[360px] bg-white text-[#AEA896] rounded cursor-pointer justify-center items-center text-[20px] font-preM'}>시작하기</div>
          <div className={'flex flex-col items-center w-5/6 md:w-11/12 text-[16px] md:flex-row md:absolute md:top-[500px] md:justify-center md:items-center'}>
            <div className={'flex items-center mb-5 pr-3 bg-zinc-300/40 h-[90px] w-full rounded-lg md:mx-6 md:w-1/4 md:h-[300px] md:flex-col md:p-4'}>
              <img className={'h-2/3 ml-3 mr-5 md:h-2/5 md:mb-8 md:mt-3'} src="/images/jubti/icon/1.png" />
              <div className={'md:w-5/6 text-[16px] md:text-[22px] md:text-center'}>질문 문항은 10개, 검사 시간은 총 1분 내외입니다.</div>
            </div>
            <div className={'flex items-center mb-5 p-3 bg-zinc-300/40 h-[90px] w-full rounded-lg md:mx-6 md:w-1/4 md:h-[300px] md:flex-col md:p-4'}>
              <img className={'h-2/3 ml-3 mr-5 md:h-2/5 md:mb-8 md:mt-3'} src="/images/jubti/icon/2.png" />
              <div className={'md:w-5/6 text-[16px] md:text-[22px] md:text-center'}>친구와 공유하며 잘 맞는 전통주 유형을 찾아보세요.</div>
            </div>
            <div className={'flex items-center mb-5 p-3 bg-zinc-300/40 h-[90px] w-full rounded-lg md:mx-6 md:w-1/4 md:h-[300px] md:flex-col md:p-4'}>
              <img className={'h-2/3 ml-3 mr-5 md:h-2/5 md:mb-8 md:mt-3'} src="/images/jubti/icon/3.png" />
              <div className={'md:w-5/6 text-[16px] md:text-[22px] md:text-center'}>가능하면 답변 시 '중립'은 피해주세요.</div>
            </div>
          </div>
        </div>
        <div className={'hidden md:flex relative w-[2700px] h-[1200px] justify-center rounded-b-full bg-[#AEA896] top-[-450px] z-[-10]'}>
        </div>
        <div className={'w-5/6 h-[80px] bg-[#AEA896] rounded text-white text-[20px] flex justify-center items-center mt-14 cursor-pointer md:hidden'}>시작하기</div>
      </div>
      <div className={`${page != 0 ? 'block' : 'hidden'} cursor-pointer bg-sky-200`} onClick={()=>setPage(page - 1)}>이전으로</div>
      <div className={`${page == 1 ? 'block' : 'hidden'}`}>
        <div className={'mt-40 mb-20 flex flex-col items-center w-full'}>
          <div className={'flex flex-col items-center w-5/6'}>
            <div className={'text-[24px] font-preM mb-8'}>당신의 나이를 선택해주세요.</div>
            <div className={'grid grid-cols-2 gap-2 justify-center w-full'}>
                {datas.age.map((age, index)=>{
                    return (<div onClick={()=>{select('age',age.value)}} key={index} className={`flex justify-center items-center cursor-pointer w-full h-[50px] border border-[#AEA896] rounded ${age.value == '60s' && 'col-span-2 w-full'} ${age.value == data['age'] && 'text-white bg-[#AEA896]'}`}>{age.name}</div>)
                })}
            </div>
          </div>
          <div className={'flex flex-col items-center mt-20 w-5/6'}>
            <div className={'text-[24px] font-preM mb-8'}>당신의 성별을 선택해주세요.</div>
            <div className={'flex justify-center w-full'}>
              {datas.sex.map((sex, index)=>{
                return(<div onClick={()=>{select('sex', sex.value)}} key={index} className={`flex justify-center items-center cursor-pointer w-full h-[50px] border border-[#AEA896] m-1 rounded ${sex.value == data['sex'] && 'text-white bg-[#AEA896]'}`}>{sex.name}</div>)
              })}
            </div>
          </div>
        </div>
      </div>
      <div className={`${page == 2 ? 'block' : 'hidden'}`}>
        <div className={'flex flex-col text-[24px] my-10 font-preM items-center'}>
          <div className={''}>✔ 두 가지 선택지 중</div >
          <div className={''}>가까운 쪽을 선택해 주세요</div >
        </div>
        <div className={'flex flex-col items-center justify-center'}>
            {datas.question.slice(0,3).map((q, index)=>{
              return (
              <div className={'w-5/6 my-6'} key={index}>
                <div className={'flex w-full justify-between text-[20px] font-preL mb-8'}>
                  <div>{q.q1}</div>
                  <div>{q.q2}</div>
                </div>
                <div className={'flex justify-between items-center'}>
                  <div onClick={()=>{{q.value2 && select(q.value2, 5)}; select(q.value, 1)}} className={`w-[50px] h-[50px] rounded-full border border-[#AEA896] ${data[q.value] == 1 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 4)}; select(q.value, 2)}} className={`w-[40px] h-[40px] rounded-full border border-[#AEA896] ${data[q.value] == 2 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 3)}; select(q.value, 3)}} className={`w-[30px] h-[30px] rounded-full border border-[#AEA896] ${data[q.value] == 3 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 2)}; select(q.value, 4)}} className={`w-[40px] h-[40px] rounded-full border border-[#AEA896] ${data[q.value] == 4 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 1)}; select(q.value, 5)}} className={`w-[50px] h-[50px] rounded-full border border-[#AEA896] ${data[q.value] == 5 && 'bg-[#AEA896]' }`}></div>
                </div>
                <hr className={'border-xs border-[#AEA89699] mt-6'}></hr>
              </div>
              )
            })}
        </div>
      </div>
      <div className={`${page == 3 ? 'block' : 'hidden'}`}>
        <div className={'flex flex-col text-[24px] my-10 font-preM items-center'}>
          <div className={''}>✔ 두 가지 선택지 중</div >
          <div className={''}>가까운 쪽을 선택해 주세요</div >
        </div>
        <div className={'flex flex-col items-center justify-center'}>
            {datas.question.slice(3,6).map((q, index)=>{
              return (
              <div className={'w-5/6 my-6'} key={index}>
                <div className={'flex w-full justify-between text-[20px] font-preL mb-8'}>
                  <div>{q.q1}</div>
                  <div>{q.q2}</div>
                </div>
                <div className={'flex justify-between items-center'}>
                  <div onClick={()=>{{q.value2 && select(q.value2, 5)}; select(q.value, 1)}} className={`w-[50px] h-[50px] rounded-full border border-[#AEA896] ${data[q.value] == 1 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 4)}; select(q.value, 2)}} className={`w-[40px] h-[40px] rounded-full border border-[#AEA896] ${data[q.value] == 2 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 3)}; select(q.value, 3)}} className={`w-[30px] h-[30px] rounded-full border border-[#AEA896] ${data[q.value] == 3 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 2)}; select(q.value, 4)}} className={`w-[40px] h-[40px] rounded-full border border-[#AEA896] ${data[q.value] == 4 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 1)}; select(q.value, 5)}} className={`w-[50px] h-[50px] rounded-full border border-[#AEA896] ${data[q.value] == 5 && 'bg-[#AEA896]' }`}></div>
                </div>
                <hr className={'border-xs border-[#AEA89699] mt-6'}></hr>
              </div>
              )
            })}
        </div>
      </div>
      <div className={`${page == 4 ? 'block' : 'hidden'}`}>
        <div className={'flex flex-col text-[24px] my-10 font-preM items-center'}>
          <div className={''}>✔ 두 가지 선택지 중</div >
          <div className={''}>가까운 쪽을 선택해 주세요</div >
        </div>
        <div className={'flex flex-col items-center justify-center'}>
            {datas.question.slice(6,9).map((q, index)=>{
              return (
              <div className={'w-5/6 my-6'} key={index}>
                <div className={'flex w-full justify-between text-[20px] font-preL mb-8'}>
                  <div>{q.q1}</div>
                  <div>{q.q2}</div>
                </div>
                <div className={'flex justify-between items-center'}>
                  <div onClick={()=>{{q.value2 && select(q.value2, 5)}; select(q.value, 1)}} className={`w-[50px] h-[50px] rounded-full border border-[#AEA896] ${data[q.value] == 1 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 4)}; select(q.value, 2)}} className={`w-[40px] h-[40px] rounded-full border border-[#AEA896] ${data[q.value] == 2 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 3)}; select(q.value, 3)}} className={`w-[30px] h-[30px] rounded-full border border-[#AEA896] ${data[q.value] == 3 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 2)}; select(q.value, 4)}} className={`w-[40px] h-[40px] rounded-full border border-[#AEA896] ${data[q.value] == 4 && 'bg-[#AEA896]' }`}></div>
                  <div onClick={()=>{{q.value2 && select(q.value2, 1)}; select(q.value, 5)}} className={`w-[50px] h-[50px] rounded-full border border-[#AEA896] ${data[q.value] == 5 && 'bg-[#AEA896]' }`}></div>
                </div>
                <hr className={'border-xs border-[#AEA89699] mt-6'}></hr>
              </div>
              )
            })}
        </div>
      </div>
      <div className={`${page == 5 ? 'block' : 'hidden'} flex flex-col items-center`}>
        <div className={'flex flex-col text-[24px] my-10 font-preM items-center'}>
          <div className={''}>원하는 안주의 종류를</div >
          <div className={''}>선택해 주세요</div >
        </div>
        <div className={'grid grid-cols-2 flex justify-center w-5/6 items-center justify-center'}>
            {datas.dish.map((dish, index)=>{
              return (
                <div onClick={()=>{select('dish', dish.value)}} className={`flex flex-col items-center ${data['dish'] == dish.value && 'brightness-75'}`}>
                  <img className={'w-[130px]'} src={`/images/jubti/dish/${index + 1}.png`} />
                  <div className={'text-[18px] mt-1 mb-4'}>{dish.name}</div>
                </div>
              )
            })}
        </div>
      </div>
      <div className={'flex justify-center'}>
        <div className={`flex ${page == 0 && 'hidden'} justify-center items-center w-[100px] h-[100px] rounded-full bg-gray-300/50 cursor-pointer`} onClick={()=>{setPage(page + 1)}}>
          {page == 5 ? '결과 제출하기' :'다음으로'}
        </div>
      </div>
    </>
  )
}

export default Jubti
