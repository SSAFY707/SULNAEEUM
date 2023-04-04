import { ReviewWriteType } from "@/types/DrinkType";
import { authAxios } from "../common";

export const clearDrink = async (drinkId: number, data: ReviewWriteType) => {
    await authAxios.post(`drink/review/${drinkId}`, data
    ).then(()=>{
    }).catch((err)=>{
        console.log(err)
    })
    return
}