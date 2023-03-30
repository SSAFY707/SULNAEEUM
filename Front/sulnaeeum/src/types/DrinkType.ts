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