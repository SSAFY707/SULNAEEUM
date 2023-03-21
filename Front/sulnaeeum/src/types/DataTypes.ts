export type ObjStringType = {
    [index : string] : string
}

export type Drink = {
    [index: string] : number | string | boolean,
    drinkId: number,
    drinkName: string,
    drinkImage: string,
    drinkAmount: string,
    drinkLevel: number,
    like: boolean,
    popularity: number,
}
