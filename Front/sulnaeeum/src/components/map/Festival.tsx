import React from 'react'


export default function Festival(props: any) {

  const { fest, mode, tab } = props

  return (<>
    <div className='w-[584px] scroll h-[680px] overflow-hidden'>

      <div className='w-full h-[680px] '>
        <div className='flex justify-start w-full h-[440px] mt-[26px]'>
          <img src={`/images/map/fest/fest${mode}.png`} alt='축제 포스터' className='object-cover'></img>
          <div className='flex-col items-center w-full h-full'>
            <h1 className='mt-[110px] text-center text-[32px]'>{fest[mode].fest_name}</h1>
            <p className='text-center'>({fest[mode].start_date.substr(2, 8).replace(/-/g, '.')} ~ {fest[mode].end_date.substr(2, 8).replace(/-/g, '.')})</p>
            <div className='h-[50px] mt-[20px] text-center'>{fest[mode].location}</div>
            <a href={fest[mode].url} className='rounded-[2px] mt-[20px] ml-[36px] w-[210px] h-[44px] flex justify-center items-center text-white bg-[#5CABB7] hover:bg-[#3C97A5]' target="_blank">
              <p>축제 바로가기</p>
            </a>

          </div>
        </div>

        <div className='w-full h-full'>
          <div className='mt-[32px] text-[20px]'>{fest[mode].contents.substr(0, 290)}</div>
        </div>
      </div>



      <div>===========================</div>
      <div>{mode}</div>
      <div>{tab}</div>
      <div>{fest[mode].fest_name}</div>
      <div>{fest[mode].start_date}</div>
      <div>{fest[mode].end_date}</div>
      <div>{fest[mode].location}</div>
      <div>{fest[mode].url}</div>
      <div>{fest[mode].contents}</div>











    </div>



  </>
  )
}
