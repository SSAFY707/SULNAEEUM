import { ReviewWriteType } from "@/types/DrinkType";
import { authAxios } from "../common";

export const clearDrink = (drinkId: number, data: ReviewWriteType) => {
    authAxios.post(`drink/review/${drinkId}`, data
    ).then((res)=>{
        console.log(res)
    }).then((err)=>{
        console.log(err)
    })
}