import { Drink } from '../types/DataTypes'
import { defaultAxios, authAxios } from './common'

export const getDrinkList = async (sort : string) => {
    let drinkList = []
    await defaultAxios.get('drink/전체', {
        params: {sortType: sort}
    }).then((res)=>{
        drinkList = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return drinkList;
}

export const getDrinkListForUser =async (sort : string) => {
    let drinkList = []
    await authAxios.get('drink/전체', {
        params: {sortType: sort}
    }).then((res)=>{
        drinkList = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return drinkList;
}