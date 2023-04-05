import { authAxios, defaultAxios } from "@/api/common";
import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { UserType,TextMinigType,TextType} from "@/types/DataTypes";
import { RootState } from ".";



const initUser: UserType = {
        "userId": 0,
        "kakaoId": "",
        "nickname": "",
        "age": null,
        "sex": null,
        "img": "",
        "ranking": 0,
        "finish": false
}
const initTextMining: TextMinigType = { 
    "words": []
}
    
export const getUser = createAsyncThunk(
    `userSlice/getUser`,
    async () => { 
        const res = await authAxios.get('mypage/info')
        return res.data
    }
)

export const getTextMining = createAsyncThunk(
    `userSlice/getTextMining`,
    async () => {
        const res = await authAxios.get('mypage/textmining')
        return res.data
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: initUser,
        textMining:initTextMining

    },
    reducers: {},
    extraReducers: (builder) => { 
        builder.addCase(getUser.fulfilled, (state, action) => { 
            state.user = action.payload
            console.log("유저 데이터 가져오기 성공!!!")
        })
        builder.addCase(getTextMining.fulfilled, (state, action) => { 
            state.textMining = action.payload
            console.log("텍스트 마이닝 데이터 가져오기 성공!!!")
        })
    }
})

export const user = (state: RootState) => state.user.user
export const textMining = (state : RootState) => state.user.textMining

export default userSlice.reducer;
