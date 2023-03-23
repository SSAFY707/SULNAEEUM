import { Drink } from '../types/DataTypes'
import { defaultAxios, authAxios } from './common'

export const getDrinkList = async (type: string, sort : string) => {
    let drinkList = []
    await defaultAxios.get(`drink/${type}`, {
        params: {sortType: sort}
    }).then((res)=>{
        drinkList = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return drinkList;
}

export const getDrinkListForUser =async (type: string, sort : string) => {
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