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
      if (data.tokenDto.accessToken) {
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
    <div className='flex-col bg-red-400 w-screen h-screen'>
      <h1>콜백</h1>
      <h1>콜백</h1>
      <h1>콜백</h1>
      <h1>{code}</h1>
      <h1>{code}</h1>
      <h1>{accessToken}</h1>

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
