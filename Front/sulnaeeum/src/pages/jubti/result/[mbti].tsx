import { useRouter } from 'next/router'
import React from 'react'

export default function Result () {
    const router = useRouter()
    const mbti = router.query.mbti
  return (
    <>
        <div>{mbti}</div>
    </>
  )
}
