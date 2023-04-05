import { UserClear, UserPreferenceStore } from "@/types/DataTypes"
import { authAxios } from "../common"

export const getMyLikeStore = async () => {
    let list : UserPreferenceStore[] = []
    await authAxios.get(`mypage/like/jumak`
    ).then((res)=>{
        list = res.data.userPreferenceStore
    }).catch((err)=>{
        console.log(err)
    })
    return list
}

export const getMyClearDrink = async () => {
    let list : UserClear[] = []
    await authAxios.get(`mypage/clear/drink`
    ).then((res)=>{
        list = res.data.userClear
    }).catch((err)=>{
        console.log(err)
    })
    return list
}

export const getMyLikeDrink = async () => {
    let list : UserClear[] = []
    await authAxios.get(`mypage/like/drink`
    ).then((res)=>{
        list = res.data.userPreferenceDrink
    }).catch((err)=>{
        console.log(err)
    })
    return list
}