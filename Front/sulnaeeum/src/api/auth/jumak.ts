import { toastError, toastOK } from "@/components/common/toast";
import axios from "axios";
const KEY = process.env.NEXT_PUBLIC_CNU_CHECK_KEY

export async function CNU_CK (cnu : any) {
    var data = {
      "b_no": [cnu], // 사업자번호 "xxxxxxx" 로 조회 시,
     }; 
    const CNU_CK = await postCRN(cnu);
    return CNU_CK;
    
    // Company Number check
    async function postCRN(crn : any){
        const postUrl = `https://api.odcloud.kr/api/nts-businessman/v1/status?serviceKey=${KEY}`
        
        const result  = await axios.post(postUrl,JSON.stringify(data),{ headers: { 'Content-Type': 'application/json' } }
        ).then((res) => { 
            return res.data.data[0].tax_type
        }).catch((err)=> {
            console.log(err)
        });
        if (result == '국세청에 등록되지 않은 사업자등록번호입니다.'){
            toastError("등록되지 않은 번호입니다.", '🚨', 'top-right')
            return false;
        }else {
            toastOK("인증되었습니다.", "✨", 'top-right')
            return true;
        }
    };
}