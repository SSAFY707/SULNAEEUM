import { authAxios, defaultAxios } from "@/api/common";
import { toastOK } from "@/components/common/toast";
import { DrinkDetailType, DrinkListType, Mine, ReviewResType } from "@/types/DrinkType";
import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";


const initDrinkList : DrinkListType[] = []
const myDrink : Mine = {likeList: [], clearList: []}
const initMyReview : ReviewResType = {
    reviewId : 0,
    userId : 0,
    userNickName : '',
    userImg : '',
    score : 0,
    content : ''
}

const initDrinkDetail : DrinkDetailType = {
    'drinkDetailDto' : {
        drinkId: 0,
        drinkName: '',
        drinkInfo: '',
        drinkImage: '',
        drinkSaleUrl: '',
        drinkPrice: '',
        drinkAmount: '',
        drinkLevel: 0,
        drinkTypeName: '',
        likeCnt : 0,
        reviewCnt : 0,
        avgScore : 0,
        tasteSweet : 0,
        tasteSour : 0,
        tasteThroat : 0,
        tasteRefresh : 0,
        tasteBody : 0,
        tasteFlavor : 0,
        dishName : '',
        ingredient : [],
        like : false,
        clear : false
    },
    'reviewResponseDto' : [],
    'jumakDto' : [],
    'similarDrinkDto' : {
        drinkId : 0,
        drinkName : '',
        drinkImage : '',
        drinkLevel: 0,
        drinkAmount : ''
    }
    
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
    async (drinkId : number) => {
        const res = await defaultAxios.get(`drink/n/detail/${drinkId}`)
        return res.data
    }
)

export const getDrinkDetailForUser = createAsyncThunk(
    `drinkSlice/getDrinkDetailForUser`,
    async (drinkId : number) => {
        const res = await authAxios.get(`drink/detail/${drinkId}`)
        return res.data
    }
)

export const getMyReview = createAsyncThunk(
    `drinkSlice/getMyReview`,
    async (drinkId : number) => {
        const res = await authAxios.get(`drink/review/${drinkId}`)
        return res.data
    }
)

const drinkSlice = createSlice({
    name: 'drinkSlice',
    initialState: {
        drinkList : initDrinkList,
        myDrink : myDrink,
        drink : initDrinkDetail,
        myReview : initMyReview,
    },
    reducers: {
        setDrinkLike(state, {payload: input}) {
            const idx = state.myDrink['likeList'].indexOf(input)
            if(idx == -1){
                state.myDrink['likeList'].push(input)
                toastOK('찜 되었습니다.', '⭐', 'top-right')
            }else{
                state.myDrink['likeList'].splice(idx, 1)
                toastOK('찜이 취소되었습니다.', '⭐', 'top-right')
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
            // console.log(state.drink, '성공!')
        })
        builder.addCase(getDrinkDetailForUser.fulfilled, (state, action)=>{
            state.drink = action.payload
            // console.log(state.drink, '성공!')
        })
        builder.addCase(getMyDrink.fulfilled, (state, action)=>{
            state.myDrink = action.payload
            // console.log(state.myDrink)
        })
        builder.addCase(getMyReview.fulfilled, (state, action)=>{
            state.myReview = action.payload
        })
    }
})

// reducer export
export const { setDrinkLike } = drinkSlice.actions 

export const drinkDetail = (state : RootState) => state.drink.drink
export const drinkList = (state : RootState) => state.drink.drinkList
export const likeDrink = (state : RootState) => state.drink.myDrink['likeList']
export const clearDrink = (state : RootState) => state.drink.myDrink['clearList']
export const myReview = (state : RootState) => state.drink.myReview
export default drinkSlice.reducer;