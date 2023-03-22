import { JubtiType } from "@/types/DataTypes";
import { defaultAxios } from "./common";

export const sendJubti = (data : JubtiType) => {
    defaultAxios.post('jubti/n/save', data
    ).then((res)=>{
        console.log(res)
    }).catch((err)=>{
        console.log(err)
    })
}