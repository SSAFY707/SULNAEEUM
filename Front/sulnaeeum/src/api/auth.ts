import { Drink, DrinkDetailType, DrinkDetailTypeFirst } from '../types/DataTypes'
import { defaultAxios, authAxios } from './common'

export const getDrinkList = async (type: string, sort : string) => {
    let drinkList = []
    await defaultAxios.get(`drink/n/${type}`, {
        params: {sortType: sort}
    }).then((res)=>{
        drinkList = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return drinkList;
}

export const getDrinkListForUser = async (type: string, sort : string) => {
    let drinkList = []
    await authAxios.get(`drink/${type}`, {
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