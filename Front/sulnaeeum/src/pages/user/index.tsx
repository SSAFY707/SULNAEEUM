import React from 'react'

export default function index() {

  function loginWithKakao() {
    console.log('loginWithKakao() 실행')
    window.Kakao.Auth.authorize({
      redirectUri: 'http://localhost:3000/kakao',
    });
  }



  return (<>
    <div className='bg-green-100 w-[1080px] h-full flex-col items-center justify-center'>
      <div className='pt-[200px] pl-[200px] bg-blue-100 w-[900px] h-[800px] flex-col justify-center'>
        <h1 className='text-[50px] mb-[100px]'>로그인 페이지</h1>
        <a id="kakao-login-btn" onClick={loginWithKakao}>
          <img src="https://k.kakaocdn.net/14/dn/btroDszwNrM/I6efHub1SN5KCJqLm1Ovx1/o.jpg" width="222" alt="카카오 로그인 버튼" />
        </a>
      </div>
    </div>




  </>
  )
}
