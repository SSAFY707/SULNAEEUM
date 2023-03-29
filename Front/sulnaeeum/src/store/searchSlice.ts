import { searchAxios } from "@/api/common";
import { DrinkSearchType } from "@/types/DrinkType";
import { createAsyncThunk ,createSlice } from "@reduxjs/toolkit";
import { RootState } from ".";

type searchInput = {
    query: {
        match: {
            'drink_name.nori' : string
        }
    }
}

const initSearchResult : DrinkSearchType[] = []

export const getSearchResult = createAsyncThunk(
    `searchSlice/getSearchResult`,
    async (input : string) => {
        const data : searchInput = {
            'query': {
                'match': {
                    'drink_name.nori': input
                }
            }
        }
        const res = await searchAxios.post(``, data)
        return res.data.hits.hits
    }
)

const searchSlice = createSlice({
    name: 'searchSlice',
    initialState: {
        searchResult : initSearchResult,
    },
    reducers: {
        
    },
    extraReducers: (builder) => {
        builder.addCase(getSearchResult.fulfilled, (state, action)=>{
            state.searchResult = action.payload
            // console.log(state.searchResult)
        })
        
    }
})

export const searchResult = (state : RootState)=>state.search.searchResult
export default searchSlice.reducer;