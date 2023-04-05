export type DrinkListType = {
    [index : string] : string | boolean | number,
    drinkId : number,
    drinkName : string,
    drinkType : string,
    drinkAmount : string,
    drinkLevel : number,
    drinkImage : string,
}

// elastic search의 결과를 위한 type 정의
export type DrinkSearchType = {
    "_index" : string,
    "_type" : string,
    "_id" : string,
    "_score" : number,
    "_source" : {
        [index: string] : number | string,
        drink_id : number,
        drink_name: string,
        drink_image : string
    }
}

export type ReviewWriteType = {
    [index: string] : string | number | null,
    score: number,
    sweetScore: number,
    sourScore: number,
    flavorScore: number,
    throatScore: number,
    bodyScore: number,
    refreshScore: number,
    content: string | null,
}

export type Mine = {
    [index: string] : number[],
    likeList : number[],
    clearList : number[]
}

export type ReviewResType = {
    [index : string] : string | number,
    reviewId : number,
    userId : number,
    userNickName : string,
    userImg : string,
    score : number,
    content : string
}

export type JumakType = {
    [index: string] : string | number,
    jumakId : number,
    jumakName : string,
    jumakUrl : string,
    jumakLocation : string
}

export type JumakInsertType = {
    [index : string] : string | number[],
    jumakName : string,
    jumakUrl : string,
    jumakLocation : string,
    drink : number[]
}

export type DrinkDetailType = {
    'drinkDetailDto' : {
        [index : string] : string | number | string[] | boolean,
        drinkId : number,
        drinkName : string,
        drinkInfo : string,
        drinkImage : string,
        drinkSaleUrl : string,
        drinkAmount : string,
        drinkLevel : number,
        drinkTypeName : string,
        likeCnt : number,
        reviewCnt : number,
        avgScore : number,
        tasteSweet : number,
        tasteSour : number,
        tasteThroat : number,
        tasteRefresh : number,
        tasteBody : number,
        tasteFlavor : number,
        dishName : string,
        ingredient : string[],
        like : boolean,
        clear : boolean
    },
    'reviewResponseDto' : ReviewResType[],
    'jumakDto' : JumakType[],
    'similarDrinkDto' : {
        [index : string] : string | number,
        drinkId : number,
        drinkName : string,
        drinkImage : string,
        drinkLevel : number,
        drinkAmount : string
    }
}

export type LatlngType = {
    lat : number,
    lng : number
}

export type MarkerType = {
    id : number,
    name: string,
    latlng : any,
    address: string,
    url : string
}

// 나만의 전통주 추천을 받아오는 리스트
export type RecommendDrinkType = {
    [index: string] : number | string | string[],
    drinkId : number,
    drinkLevel : number,
    drinkName : string,
    drinkImg : string,
    drinkAmount : string,
    drinkType : string,
    ingredientList : string[]
}

// 선물 추천을 위한 data
export type SubmitGiftType = {
    [index : string] : string | number
    sex : string,
    age : string,
    minPrice : number,
    maxPrice : number,
    minLevel : number,
    maxLevel : number,
    tasteSweet : number,
    tasteSour : number,
    tasteFlavor : number,
    tasteRefresh : number,
    tasteBody : number,
    tasteThroat : number
}

// 선물 추천 전통주 리스트 타입
export type GiftDrinkType = {
    [index : string] : string | number | string[],
    drinkId : number,
    drinkName : string,
    drinkImg : string,
    drinkPrice : string,
    drinkLevel : number,
    drinkAmount : string,
    drinkType : string,
    ingredientList : string[]
}