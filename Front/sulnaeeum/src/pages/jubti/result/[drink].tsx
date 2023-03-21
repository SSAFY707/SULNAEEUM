import { useRouter } from 'next/router'
import React, { useEffect } from 'react'

export default function Result (props: any) {
    const router = useRouter()
    const { result, mbti } = props
    // console.log(result)

    // console.log(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    // if ( !window.Kakao.isIntitialized() ) {
    //     window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    // }
    // useEffect(() => {
    //     window.Kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
    // }, []);
    useEffect(()=>{
        initialize()
    }, [])
    
    const initialize = () => {
        if (window.Kakao) {
            const kakao = window.Kakao
            if (!kakao.isInitialized()) {
                kakao.init(process.env.NEXT_PUBLIC_KAKAO_API_KEY);
            }
        }
    }

    const share = () => {
        const {Kakao} = window;
        Kakao.Link.sendCustom({
            templateId: 91440,
            templateArgs: {
                name: result.name,
            }
        })
    }
  return (
    <>
        <div className={'flex flex-col items-center mb-14 md:flex-row md:items-start md:mb-1'}>
            <div className={'flex md:hidden flex-col items-center pt-16 h-[360px] w-full'} style={{backgroundColor : result.color}}>
                <div className={'mt-4 text-[20px]'}>{result.summary}</div>
                <div className={'text-[30px] font-preM'}>{result.name}</div>
                <img className={'mt-6 h-[220px]'} src={`/images/jubti/drink/${result.name}.png`} alt="" />
            </div>
            <div className={'hidden md:flex flex-col items-center h-[400px] w-2/5 mt-20 ml-20'}>
                <div className={'w-[200px] h-[200px] rounded-full z-[-10] absolute top-[100px]'} style={{backgroundColor : result.color}}></div>
                <img className={'mt-6 h-[220px]'} src={`/images/jubti/drink/${result.name}.png`} alt="" />
                <div className={'text-[30px] font-preM mt-4'}>{result.name}</div>
                <div className={'mt-2 text-[20px]'}>{result.summary}</div>
            </div>
            <ul className={'mt-[100px] px-8 text-[20px] md:w-1/2 md:mt-[130px]'}>
                {result.explain.map((e : string, index: number)=>{
                    return ( <li className={'mb-6'} key={index}>◾ {e}</li> )
                })}
            </ul>
        </div>
        <div className={'md:flex md:bg-zinc-200 md:justify-between md:px-20'}>
            <div className={'flex flex-col items-center mb-20 w-full bg-zinc-200 md:w-1/4 md:mb-1'}>
                <div className={'flex items-center text-[20px] my-6 md:mt-10'}><div className={'font-preM text-[30px] mr-2 md:text-[26px]'}>{result.name}</div>와(과) 어울리는 안주</div>
                <svg width="403" height="13" viewBox="0 0 403 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7.11523C61.0543 6.9735 121.114 6.84323 181.168 6.70149" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M183.575 4.46056C184.742 4.46541 185.685 5.43765 185.68 6.63212C185.675 7.82659 184.724 8.79097 183.557 8.78612C182.39 8.78127 181.448 7.80903 181.453 6.61456C181.458 5.42009 182.408 4.45571 183.575 4.46056Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M212.572 4.70275C213.739 4.7076 214.681 5.67984 214.676 6.87431C214.671 8.06878 213.721 9.03316 212.554 9.02831C211.387 9.02346 210.445 8.05122 210.45 6.85675C210.455 5.66228 211.405 4.6979 212.572 4.70275Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M215.013 7.05273C277.34 6.88826 339.673 6.73402 402 6.56955" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M195.863 6.76389L190.704 12L185.589 6.72121L190.748 1.4851L195.863 6.76389Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M201.085 6.35959L195.926 11.5957L190.811 6.31691L195.97 1.0808L201.085 6.35959Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M205.545 6.61936L200.386 11.8555L195.271 6.57668L200.43 1.34057L205.545 6.61936Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M210.475 6.64084L205.316 11.877L200.201 6.59816L205.36 1.36205L210.475 6.64084Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                </svg>
                <div className={'flex flex-col items-center'}>
                    <img className={'mt-8 w-[150px] md:mt-12'} src={`/images/jubti/dish/${result.dish}.png`} alt="" />
                    <div className={'text-[20px] mt-4 mb-6'}>{result.dish}</div>
                </div>
            </div>
            <div className={'flex flex-col items-center mb-20 md:w-1/4'}>
                <div className={'flex items-center text-[20px] mb-6 md:mt-10'}><div className={'font-preM text-[30px] mr-2 md:text-[26px]'}>{result.name}</div>와(과)의 궁합</div>
                <svg width="403" height="13" viewBox="0 0 403 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M1 7.11523C61.0543 6.9735 121.114 6.84323 181.168 6.70149" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M183.575 4.46056C184.742 4.46541 185.685 5.43765 185.68 6.63212C185.675 7.82659 184.724 8.79097 183.557 8.78612C182.39 8.78127 181.448 7.80903 181.453 6.61456C181.458 5.42009 182.408 4.45571 183.575 4.46056Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M212.572 4.70275C213.739 4.7076 214.681 5.67984 214.676 6.87431C214.671 8.06878 213.721 9.03316 212.554 9.02831C211.387 9.02346 210.445 8.05122 210.45 6.85675C210.455 5.66228 211.405 4.6979 212.572 4.70275Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M215.013 7.05273C277.34 6.88826 339.673 6.73402 402 6.56955" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10" stroke-linecap="round"/>
                    <path d="M195.863 6.76389L190.704 12L185.589 6.72121L190.748 1.4851L195.863 6.76389Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M201.085 6.35959L195.926 11.5957L190.811 6.31691L195.97 1.0808L201.085 6.35959Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M205.545 6.61936L200.386 11.8555L195.271 6.57668L200.43 1.34057L205.545 6.61936Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                    <path d="M210.475 6.64084L205.316 11.877L200.201 6.59816L205.36 1.36205L210.475 6.64084Z" stroke="#4F4F4F" stroke-width="0.5" stroke-miterlimit="10"/>
                </svg>
                <div className={'flex justify-center mt-10 md:mt-4'}>
                    <div className={'flex flex-col items-center mx-6'}>
                        <div className={'text-[20px] mb-4 font-preR'}>최고의 궁합</div>
                        <div className={'flex justify-center w-[160px] h-[160px] rounded-full'} style={{backgroundColor : result.good_color}}>
                            <img className={'mt-4 h-[160px]'} src={`/images/jubti/drink/${result.good_name}.png`} alt="" />
                        </div>
                        <div className={'mt-8'}>{result.good_name}</div>
                    </div>
                    <div className={'flex flex-col items-center mx-6'}>
                        <div className={'text-[20px] mb-4 font-preR'}>최악의 궁합</div>
                        <div className={'flex justify-center w-[160px] h-[160px] rounded-full'} style={{backgroundColor : result.bad_color}}>
                            <img className={'mt-4 h-[160px]'} src={`/images/jubti/drink/${result.bad_name}.png`} alt="" />
                        </div>
                        <div className={'mt-8'}>{result.bad_name}</div>
                    </div>
                </div>
            </div>
            <div className={'flex flex-col items-center w-full bg-zinc-200 md:w-1/4'}>
                <div className={'flex flex-col items-center'}>
                    <div className={'text-[26px] font-preM mt-14'}>결과 공유하기</div>
                    <img onClick={share} className={'h-[50px] mt-5 mb-16 cursor-pointer'} src="/images/kakao.png" alt="" />
                </div>
                <div className={'flex justify-center items-center cursor-pointer text-[20px] w-3/4 h-[60px] rounded bg-[#999483] text-white'}>{result.name} 더 알아보러 가기</div>
                <div className={'flex justify-center items-center cursor-pointer text-[20px] font-preR w-3/4 h-[60px] rounded border border-[#999483] mt-4 bg-white text-[#191919] mb-16'}>테스트 다시하기</div>
            </div>
        </div>
    </>
  )
}

type MbtiType = {
    [index: string]: any
}

type ExplainType = {
    [index: string]: Array<string>
}

const info : MbtiType = {
    infp : {dish: '케이크', summary: '혼술러에게 딱! 새콤 달콤 자몽맛', drink: '아이싱 자몽', good: 'enfj', bad: 'isfp', color: '#F4BDBF'},
    enfp : {dish: '치킨', summary: '태생부터 탄산 가득, 톡톡 튀는 스파클링', drink: '얼떨결에', good: 'infj', bad: 'esfp', color: '#CFEAEF'},
    infj : {dish: '오리주물럭', summary: '찰랑이는 별빛 하늘처럼, 은은한 백도라지향', drink: '제주 낭만', good: 'enfp', bad: 'istp', color: '#E1CFE8'},
    enfj : {dish: '치즈', summary: '열대 과일과 꽃 향기가 느껴지는 우아한 감 와인', drink: '뱅꼬레 더감', good: 'isfp', bad: 'isfj', color: '#FFECD7'},
    intj : {dish: '샐러드', summary: '탁하지만 우아한, 긴 여운의 진한 포도향', drink: '남산애 레드와인', good: 'entp', bad: 'istj', color: '#B9C0D0'},
    entj : {dish: '보쌈', summary: '묵직하고 깊은, 달콤하고 고소한', drink: '도깨비술 11', good: 'infp', bad: 'estj', color: '#F3ECE2'},
    intp : {dish: '쿠키', summary: '배꽃이 필 때 빚는 희고, 된 이화주', drink: '배꽃 필 무렵', good: 'entj', bad: 'esfj', color: '#E7D6C4'},
    entp : {dish: '조기찜', summary: '달콤하고 부드러운 연한 살구빛의 매력', drink: '여포의 꿈(화이트)', good: 'intj', bad: 'istj', color: '#FFF8C2'},
    isfp : {dish: '갈비찜', summary: '담황생의 고운 빛깔로 풀어내는 진한 풀향과 과실향', drink: '호산춘', good: 'esfj', bad: 'enfp', color: '#D1F8C7'},
    esfp : {dish: '회', summary: '누구에게나 부담없이, 상큼한 맛을 자랑하는', drink: '키위술', good: 'istj', bad: 'infp', color: '#EAEAEA'},
    istp : {dish: '피자', summary: '한 모금에 진하게 퍼지는 오미자향', drink: '볼빨간 미자', good: 'estj', bad: 'infp', color: '#E7BFA8'},
    estp : {dish: '바게트', summary: '풍성하게 다가오는 특유의 구수함', drink: '호랑이 배꼽', good: 'isfj', bad: 'enfp', color: '#EEDDC8'},
    isfj : {dish: '매운탕', summary: '단 맛 뒤에 느껴지는 매운 후추향과 씁쓸한 곡물향', drink: '토끼 소주', good: 'estp', bad: 'enfp', color: '#DAD1CA'},
    esfj : {dish: '김치전', summary: '도수가 높아도 부드럽고 산뜻하게', drink: '소호', good: 'isfp', bad: 'infj', color: '#BED1E9'},
    istj : {dish: '연어', summary: '화려한 히비스커스와 새콤 달콤 화자오까지', drink: '단홍', good: 'esfp', bad: 'infj', color: '#DAB4B8'},
    estj : {dish: '홍어삼합', summary: '완숙한 향매의 뛰어난 향미', drink: '서울의 밤', good: 'istp', bad: 'enfj', color: '#DFDFDF'},
}

const explain : ExplainType = {
    infp : ['핑크빛의 아이싱 자몽처럼 아름다움과 추함, 선과 악, 도덕과 비도덕에 민감해요.', '내면의 세계를 추구하여 늘 무언가를 갈구해요', '즉흥적이며 변화가 비슷해요', '내면 갈등이 심하여 감정 기복이 심해요', '상대방을 배려하고, 자신과 관심사가 비슷한 사람을 만나면 빨리 친해져요.'],
    enfp : ['탄산이 가득한 얼떨결에처럼 언제나 정열정이며 활기가 넘치고 상상력이 풍부해요.', '항상 새로운 가능성을 찾고 시도해요.', '한 가지 일을 끝내기도 전에 몇 가지 다른 일을 벌이는 경향이 있어요.', '다른 사람과 관계 형성을 잘하고, 분위기 메이커 역할을 해요.', '타인의 인정과 관심을 좋아해요.'],
    infj : ['은은한 제주낭만처럼 풍부하고 감성적인 내면을 가졌어요.', '창의력이 좋으며 타인에게 말없이 영향력을 끼치는 직관력을 가졌어요', '한 곳에 몰두하는 경향이 있어 주변적인 조건들을 경시하기도 해요.', '인내심이 많고 통찰력과 직관력이 뛰어나요.', '친한 친구 앞에서는 미래에 대한 각종 예측과 상상을 펼쳐놓기도 해요.'],
    enfj : ['꽃 향기가 느껴지는 뱅꼬레 더감처럼, 온화하고 적극적이에요.', '다른 사람들의 의견에 진지하게 관심을 가져요.', '미래의 가능성을 추구하며, 편안하고 능란하게 집단을 이끌어가는 능력이 있어요.', '모임을 좋아하며 대화를 적극적으로 이어나가요.', '타인의 반응에 대해 예민하고, 말을 할 때도 다른 사람한테 어려움이 될 수 있는 말은 꺼내지 않아요.'],
    intj : ['상큼한 산미가 있는 남산애 레드와인처럼, 모든 일에 의문을 던지고 규칙을 깨는 일을 두려워하지 않아요.', '새로운 아이디어에 통찰력과 뛰어난 논리력, 강한 의지를 더해 일을 추진해요.', '독립적인 성향을 지녀서 혼자 일하는 것을 선호해요.', '타인에게 무심하다는 편견을 받기도 하지만, 감정에 치우치지 않을 뿐 인간적이에요.', '가십거리에는 관심이 없지만, 유머감각이 있어요.'],
    entj : ['묵직한 도깨비술 11처럼, 권위와 자신감으로 재능을 구현하는 유형이에요.', '타고난 리더라고 불리며, 공통된 목표 뒤에서 사람을 끌어모아요.', '목표를 달성하기 위한 장기적인 계획 개발을 즐겨요.', '논리적 추론, 책임감에 두각을 나타내고 그것을 즐기기까지 해요.', '무능하고 게으른 사람을 싫어하고, 투명하게 의견을 표출하여 적을 만들 수도 있어요.'],
    intp : ['배꽃이 필 때 빚는 이화주처럼, 실체보다는 실체가 품고 있는 가능성에 관심이 많아요.', '아이디어와 원리, 인과관계에 흥미를 가져요.', '꾸준히 무언가를 하는 것보다, 문제점을 간파하는 기획자로서의 역할이 어울려요.', '즉흥적 활동을 통하여 자기 역량을 효과적으로 발휘해요.', '친구의 슬픔에 잘 공감하지 못하며, 빈 말을 싫어해요.'],
    entp : ['달콤하고 부드러운 여포의 꿈처럼, 능글거리면서 경쾌한 성격을 가졌어요.', '본인이 구상하는 바를 실현시키고 싶어하는 기질이 강하며, 아웃사이더적인 성격이 겹쳐 혁명가의 기질을 띠고 있어요.', '위트있는 말로 주변에서 인기가 많고, 분위기를 당당하게 주도해요.', '다재다능하고 토론을 좋아하며 항상 색다른 환경을 선호해요.', '엄청난 성공 아니면 아예 바닥을 찍는 모 아니면 도의 경향을 가져요.'],
    isfp : ['풀향과 과실향이 어우러진 호산춘처럼, 말없이 다정하고 온화해요.', '사람들에게 친절하지만 상대방을 잘 알게 될 때까지 내면의 모습을 잘 보이지 않아요.', '의견 충돌을 피하고, 인화를 중시해요.', '눈치가 빠르며, 항상 주변 상황을 파악하고 있어요.', '예술가 기질이 있으며, 사회 봉사에도 흥미를 가져요.'],
    esfp : ['끝맛이 상큼한 키위술처럼, 사교적이고 활동적이며 낙천적이에요.', '어떤 상황에서든 잘 적응하며 현실적이고 실제적이에요.', '주위의 일에 관심이 많고, 상식이 풍부해요.', '때로는 진지함이 부족해보일 수 있지만, 조직에서 밝고 재미있는 분위기를 조성해요.', '발등에 불이 떨어져야만 일을 시작하기도 해요.'],
    istp : ['진한 오미자향의 볼빨간 미자처럼, 과묵하고 절제된 호기심으로 인생을 관찰하는 유형이에요.', '말수가 적으며, 객관적이고 합리적이에요.', '필요 이상으로 자신을 발휘하지 않으며, 나와 관계없는 일에는 뛰어들지 않아요.', '가능한 에너지 소비를 하지 않으려고 해요.', '가까운 사람에게는 허울없이 대하지만 그렇지 않은 사람에게는 무심한 경향이 있어 냉소적이라는 평을 받기도 해요.'],
    estp : ['달고 구수한 호랑이 배꼽처럼, 사실적이고 관대하며 선입견이 없는 유형이에요.', '강한 현실 감각으로 타협책을 모색하고, 문제 해결 능력이 뛰어나요.', '어디서든 적응을 잘 하고 친구와 어울리기를 좋아해요.', '긴 설명 대신 오감으로 듣고 만질 수 있는 삶의 모든 것을 즐겨요.', '순발력이 뛰어나며 많은 사실들을 쉽게 기억하고, 예술적인 멋이 있어요.'],
    isfj : ['달지만 씁쓸한 토끼 소주처럼, 따뜻하고 친근하지만 방어력이 강해 차갑게 보이기도 하는 유형이에요.', '책임감과 인내력이 매우 강하며 친한 친구나 가족에게 애정이 가득해요.', '언제나 진솔하려 노력하며 가볍지 않기 때문에 관계를 맺기에 어려우나 가장 믿음직스러워요.', '완벽한 결과물을 도출하지 못했을 때 상당한 스트레스를 받기도 해요.', '감정이 쉽게 탄로나는 편이에요.'],
    esfj : ['산뜻한 배향이 느껴지는 소호처럼, 동정심이 많고 나눔과 베풂을 중시하는 유형이에요.', '이야기를 즐기며 정리정돈을 잘하고, 참을성이 많아요.', '일이나 사람 관련 문제에 대해 냉철한 입장을 취하기 어려워해요.', '자신의 요구가 거절당했을 때는 마음의 상처를 받기도 해요.', '타인을 본인의 편으로 잘 끌어당기는 능력이 있어요.'],
    istj : ['진한 루비색의 단홍처럼, 실제 사실에 대해 정확하고 체계적으로 기억하며 일 처리에 있어서도 신충하고 책임감이 있어요.', '보수적인 경향이 있으며, 문제 해결에 경험을 적용하는 일을 잘해요.', '반복되는 일상적인 일에 대한 인내력이 강해요.', '나무보다 숲을 보는 능력이 부족하여 전체적이고 타협적인 방안을 고려하는 노력이 필요해요.', '튀는 것을 좋아하지 않고, 정돈된 스타일을 유지해요.'],
    estj : ['완숙한 황매향이 가득한 서울의 밤처럼, 어떠한 활동을 조직화하고 주도해 나가는 지도력을 가졌어요.', '현실적, 구체적, 사실적인 감각이 뛰어나요.', '불확실한 미래의 가능성보다 흔들리지 않는 현재의 사실을 추구해요.', '타인의 감정을 고려하는 능력이 부족할 수 있어요.', '스스로 많은 양의 일을 하고, 커다란 도전을 좋아하며, 효율을 중시하기 때문에 도태될 가능성이 낮은 유형이에요.'],
}

const drink_to_mbti : MbtiType = {
    '아이싱 자몽': 'infp',
    '얼떨결에' : 'enfp',
    '제주 낭만' : 'infj',
    '뱅꼬레 더감' : 'enfj',
    '남산애 레드와인' : 'intj',
    '도깨비술 11' : 'entj',
    '배꽃 필 무렵' : 'intp',
    '여포의 꿈(화이트)' : 'entp',
    '호산춘' : 'isfp',
    '키위술' : 'esfp',
    '볼빨간 미자' : 'istp',
    '호랑이 배꼽' : 'estp',
    '토끼 소주' : 'isfj',
    '소호' : 'esfj',
    '단홍' : 'istj',
    '서울의 밤' : 'estj'
  }

export async function getServerSideProps(context : any) {
    const id = context.query.drink
    const mbti : string = drink_to_mbti[id]
    const target = info[mbti]
    const data = {
        name : target.drink,
        summary : target.summary,
        dish : target.dish, 
        color: target.color,
        good_name : info[target.good].drink,
        good_color :info[target.good].color,
        bad_name : info[target.bad].drink,
        bad_color : info[target.bad].color,
        explain: explain[mbti],
    }
    // console.log(data)

    return {
        props: {
            mbti: mbti,
            result: JSON.parse(JSON.stringify(data)),
        }
    }
}