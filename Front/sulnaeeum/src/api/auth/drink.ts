import { RecommendDrinkType, ReviewWriteType } from "@/types/DrinkType";
import { authAxios } from "../common";

export const clearDrink = async (drinkId: number, data: ReviewWriteType) => {
    await authAxios.post(`drink/review/${drinkId}`, data
    ).then(()=>{
    }).catch((err)=>{
        console.log(err)
    })
    return
}

export const getRecommendDrinkList = async () => {
    let list : RecommendDrinkType[] = []
    await authAxios.get(`user/recommend`
    ).then((res)=>{
        list = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return list
}