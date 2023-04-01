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