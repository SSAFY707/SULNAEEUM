import { defaultAxios } from "@/api/common";
import { DrinkDetailType } from "@/types/DataTypes";
import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";

const initDrinkInfo : DrinkDetailType = {
    drinkId: 0,
    drinkAmount: '',
    drinkImage: '',
    drinkInfo: '',
    drinkLevel: 0,
    drinkName: '',
    drinkPrice: '',
    drinkReviews: [],
    drinkSaleUrl: '',
    drinkType: ''
}

const getDrinkDetail = createAsyncThunk(
    `drinkSlice/getDrinkDetail`,
    async (drinkId : string) => {
        const res = await defaultAxios.get(`drink/n/${drinkId}`)
        return res.data
    }
)

const drinkSlice = createSlice({
    name: 'drinkSlice',
    initialState: {
        drink : initDrinkInfo
    },
    reducers: {

    },
    extraReducers: (builder) => {
        builder.addCase(getDrinkDetail.fulfilled, (state, action)=>{
            state.drink = action.payload
            console.log(state.drink, '성공!')
        })
    }
})


export default drinkSlice.reducer;