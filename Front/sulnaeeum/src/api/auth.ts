import { JumakInsertType } from '@/types/DrinkType'
import { authAxios } from './common'

export const drinkLike = (drinkId: number) => {
    authAxios.post(`drink/like/${drinkId}`
    ).then(()=>{
    }).catch((err)=>{
        console.log(err)
    })
}

export const insertJumak = (data: JumakInsertType) => {
    authAxios.post(`drink/jumak`, data
    ).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

export const likeJumak = (jumakId : number) => {
    authAxios.post(`drink/like/jumak/${jumakId}`
    ).then(()=>{
    }).catch((err)=>{
        console.log(err)
    })
}

export const setRecomList = async () => {
    let list = []
    await authAxios.get(`drink/recommend`
    ).then((res)=>{
        list = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return list
}