import { RankingType } from "@/types/RankingTypes"
import { authAxios } from "../common"

export const getRanking = async () => {
    let list : RankingType = {femaleTopDrink: [], maleTopDrink: [], totalTopDrink: []}
    await authAxios.get(`ranking/top/jubti`
    ).then((res)=>{
        list = res.data
    }).catch((err)=>{
        console.log(err)
    })
    return list
}