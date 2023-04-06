import React from 'react'
import { useEffect } from 'react';


interface ResponseType {
  ok: boolean;
  error?: any;
}




export default function callback(props: { code: string }) {
  const { code } = props

  let accessToken: string | null = ''
  let isLogin: string | null = ''

  useEffect(() => {
    (async () => {
      const data = await (await fetch(`https://j8a707.p.ssafy.io/api/user/kakao/login?code=${code}`)).json()
      if (data.tokenDto != null) {
        sessionStorage.setItem('accessToken', data.tokenDto.accessToken)
        sessionStorage.setItem('isLogin', 'true')
        sessionStorage.setItem('name', data.nickname)
        sessionStorage.setItem('img', data.img)

        accessToken = sessionStorage.getItem('accessToken')

        setTimeout(() => {
          if (data.finish) {
            location.href = '/'
          } else {
            location.href = '/user/prefer'
          }
        }
          , 1600);




      }
    })();
  }, []);



  return (<>
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-[700px] h-[700px] rounded-[14px]'>
        <img src='/images/loading3.gif' className='w-[600px]'></img>
        <p className='font-preB text-[30px] text-[#666666]'>술내음 페이지로 이동중입니다.</p>
      </div>
    </div>
  </>
  )
}

export async function getServerSideProps(context: any) {
  const id = context.query.code

  return {
    props: {
      code: id
    }
  }
}
