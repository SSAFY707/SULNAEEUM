import { toastOK } from '@/components/common/toast'
import { Drink, DrinkDetailType, DrinkDetailTypeFirst } from '../types/DataTypes'
import { defaultAxios, authAxios } from './common'

export const getDrinkList = async (typeId: number, sort : string) => {
    let drinkList = []
    await defaultAxios.get(`drink/n/${typeId}`, {
        params: {sortType: sort}
    }).then((res)=>{
        console.log(res.data)
        drinkList = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return drinkList;
}

export const getDrinkListForUser = async (typeId: number, sort : string) => {
    let drinkList = []
    await authAxios.get(`drink/${typeId}`, {
        params: {sortType: sort}
    }).then((res)=>{
        drinkList = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return drinkList;
}

export const drinkLike = (drinkId: number) => {
    authAxios.post(`drink/like/${drinkId}`
    ).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}

export const getDrinkDetail = async (drinkId : number) => {
    let info = DrinkDetailTypeFirst
    await defaultAxios.get(`drink/n/detail/${drinkId}`
    ).then((res)=>{
        info = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return info;
}

export const getDrinkDetailForUser = async (drinkId : number) => {
    let info = DrinkDetailTypeFirst
    await authAxios.get(`drink/detail/${drinkId}`
    ).then((res)=>{
        info = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return info;
}