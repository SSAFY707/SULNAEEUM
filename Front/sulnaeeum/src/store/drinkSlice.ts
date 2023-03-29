import { defaultAxios } from "@/api/common";
import { DrinkDetailType } from "@/types/DataTypes";
import { DrinkListType } from "@/types/DrinkType";
import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

const initDrinkList : DrinkListType[] = []

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

export const getDrinkList = createAsyncThunk(
    `drinkSlice/getDrinkList`,
    async (data : {typeId : number, sort: string}) => {
        const {typeId, sort} = data
        const res = await defaultAxios.get(`drink/n/${typeId}`,
            {params: {sortType : sort}}
        )
        return res.data
    }
)

export const getDrinkDetail = createAsyncThunk(
    `drinkSlice/getDrinkDetail`,
    async (drinkId : string) => {
        const res = await defaultAxios.get(`drink/n/${drinkId}`)
        return res.data
    }
)

const drinkSlice = createSlice({
    name: 'drinkSlice',
    initialState: {
        drinkList : initDrinkList,
        drink : initDrinkInfo
    },
    reducers: {
        setDrinkLike(state, {payload: input}) {
            const new_drinkList = [...state.drinkList]
            new_drinkList[input].like = !new_drinkList[input].like
            state.drinkList = new_drinkList
            return
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDrinkDetail.fulfilled, (state, action)=>{
            state.drink = action.payload
            console.log(state.drink, '성공!')
        })
        builder.addCase(getDrinkList.fulfilled, (state, action)=>{
            state.drinkList = action.payload
            // console.log(state.drinkList, '리스트 가져오기 성공!')
        })
    }
})

// reducer export
export const { setDrinkLike } = drinkSlice.actions 

export const drinkList = (state : RootState)=>state.drink.drinkList
export default drinkSlice.reducer;