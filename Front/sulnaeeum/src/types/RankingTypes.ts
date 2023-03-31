export type RankingDrinkType = {
    [index : string] : number | string | string[],
    drinkId : number,
    drinkLevel : number, 
    drinkName : string,
    drinkImg : string,
    drinkAmount : string,
    drinkType : string,
    ingredientList : string[]
}

export type RankingType = {
    [index : string] : RankingDrinkType[],
    femaleTopDrink : RankingDrinkType[],
    maleTopDrink : RankingDrinkType[],
    totalTopDrink : RankingDrinkType[],
}