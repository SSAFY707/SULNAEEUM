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
      console.log('fetch 실행>>>')
      const data = await (await fetch(`https://j8a707.p.ssafy.io/api/user/kakao/login?code=${code}`)).json()
      if (data.tokenDto != null) {
        console.log(data)
        sessionStorage.setItem('accessToken', data.tokenDto.accessToken)
        sessionStorage.setItem('isLogin', 'true')
        sessionStorage.setItem('name', data.nickname)
        sessionStorage.setItem('img', data.img)

        accessToken = sessionStorage.getItem('accessToken')


        if (data.finish) {
          location.href = '/'
        } else {
          location.href = '/user/prefer'
        }




      }
    })();
  }, []);



  return (<>
    <div className='flex flex-col w-screen h-screen justify-center items-center'>
      <div className='flex flex-col justify-center items-center w-[700px] h-[700px] bg-[#ebf3f3] rounded-[14px]'>
        <img src='/images/loading1.gif' className='w-[400px]'></img>
        <p className='font-normal text-[30px] text-[#3C97A5]'>로그인 중...</p>
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
