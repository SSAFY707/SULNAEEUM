import { authAxios } from "@/api/common";
import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { UserType } from "@/types/DataTypes";
import { RootState } from ".";

const initUser: UserType = {
        "userId": 0,
        "kakaoId": "",
        "nickname": "",
        "age": null,
        "sex": null,
        "img": "",
        "ranking": 0,
        "finish": false,
        'clearDrinkCnt' : 0,
        'likeDrinkCnt' : 0,
        'likeJumakCnt' : 0,
        'userPreferenceDto' : null
}
    
export const getUser = createAsyncThunk(
    `userSlice/getUser`,
    async () => { 
        const res = await authAxios.get('mypage/info')
        return res.data
    }
)

const userSlice = createSlice({
    name: 'userSlice',
    initialState: {
        user: initUser,
    },
    reducers: {},
    extraReducers: (builder) => { 
        builder.addCase(getUser.fulfilled, (state, action) => { 
            state.user = action.payload
        })
    }
})

export const user = (state: RootState) => state.user.user

export default userSlice.reducer;
