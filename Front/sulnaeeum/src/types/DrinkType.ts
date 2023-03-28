export type DrinkListType = {
    [index : string] : string | boolean | number,
    drinkId : number,
    drinkName : string,
    drinkType : string,
    drinkAmount : string,
    drinkLevel : number,
    drinkImage : string,
    like : boolean,
    clear : boolean,
    popularity : number
}