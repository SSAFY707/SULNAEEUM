import { authAxios, defaultAxios } from "@/api/common";
import { toastOK } from "@/components/common/toast";
import { DrinkDetailType } from "@/types/DataTypes";
import { DrinkListType } from "@/types/DrinkType";
import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

type Mine = {
    [index: string] : number[],
    likeList : number[],
    clearList : number[]
}

const initDrinkList : DrinkListType[] = []
const myDrink : Mine = {likeList: [], clearList: []}

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

export const getMyDrink = createAsyncThunk(
    `drinkSlice/getMyDrink`,
    async () => {
        const res = await authAxios.get(`user/mine`)
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
        myDrink : myDrink,
        drink : initDrinkInfo
    },
    reducers: {
        setDrinkLike(state, {payload: input}) {
            const idx = state.myDrink['likeList'].indexOf(input)
            if(idx == -1){
                // const new_list : number[] = [...state.myDrink['likeList']]
                // new_list.push(input)
                // const new_mine = {...state.myDrink}
                // new_mine['likeList'] = new_list
                // state.myDrink = new_mine
                state.myDrink['likeList'].push(input)
                toastOK('찜 되었습니다.', '📍', 'top-right')
            }else{
                state.myDrink['likeList'].splice(idx, 1)
                toastOK('찜이 취소되었습니다.', '📍', 'top-right')
            }
            return
        }
    },
    extraReducers: (builder) => {
        builder.addCase(getDrinkList.fulfilled, (state, action)=>{
            state.drinkList = action.payload
            // console.log(state.drinkList, '리스트 가져오기 성공!')
        })
        builder.addCase(getDrinkDetail.fulfilled, (state, action)=>{
            state.drink = action.payload
            console.log(state.drink, '성공!')
        })
        builder.addCase(getMyDrink.fulfilled, (state, action)=>{
            state.myDrink = action.payload
            // console.log(state.myDrink)
        })
    }
})

// reducer export
export const { setDrinkLike } = drinkSlice.actions 

export const drinkList = (state : RootState)=>state.drink.drinkList
export const likeDrink = (state : RootState)=>state.drink.myDrink['likeList']
export const clearDrink = (state : RootState)=>state.drink.myDrink['clearList']
export default drinkSlice.reducer;