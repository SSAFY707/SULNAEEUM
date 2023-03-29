export type ObjStringType = {
  [index: string]: string;
};

export type JubtiType = {
  [index: string]: string | number;
  age: string;
  sex: string;
  level: number;
  tasteRefresh: number;
  tasteBody: number;
  tasteSweet: number;
  tasteSour: number;
  tasteThroat: number;
  tasteFlavor: number;
  dish: string;
};

export type DrinkTasteType = {
    [index: string] : number,
    tasteRefresh: number,
    tasteBody: number,
    tasteSweet: number,
    tasteSour: number,
    tasteThroat: number,
    tasteFlavor: number,
}

export type Drink = {
  [index: string]: number | string | boolean;
  drinkId: number;
  drinkName: string;
  drinkImage: string;
  drinkAmount: string;
  drinkLevel: number;
  like: boolean;
  popularity: number;
};

export type DrinkDetailType = {
    [index: string] : string | number | ReviewType[],
    drinkId: number,
    drinkName: string,
    drinkInfo: string,
    drinkImage: string,
    drinkSaleUrl: string,
    drinkPrice: string,
    drinkAmount: string,
    drinkLevel: number,
    drinkType: any,
    drinkReviews: ReviewType[],
}

export const DrinkDetailTypeFirst = {
    drinkId: 0,
    drinkName: '',
    drinkInfo: '',
    drinkImage: '',
    drinkSaleUrl: '',
    drinkPrice: '',
    drinkAmount: '',
    drinkLevel: 0,
    drinkType: '',
    drinkReviews: [],
}

export type ReviewType = {
    [index : string] : string | number,
    userName: string,
    userImage: string,
    rate : number,
    content: string
}

export type tasteType = {
    [index: string] : number,
    tasteFlavor: number,
    tasteSweet: number,
    tasteSour: number,
    tasteThroat: number,
    tasteBody: number,
    tasteRefresh: number,
}



export interface UserClear {
  drinkId: number;
  drinkName: string;
  drinkImage: string;
  drinkAmount: string;
  drinkLevel: string;
  drinkType: string;
}

export interface UserPreferenceDrink {
  [index: string]: string | number;
  drinkId: number;
  drinkName: string;
  drinkImage: string;
  drinkAmount: string;
  drinkLevel: string;
  drinkType: string;
}

export interface UserPreferenceStore {
  storeId: number;
  storeName: string;
  storeImage: string;
  storeAddress: string;
  storeDrink: string[];
  storeDrinkImage: string[];
  storeDrinkType: string[];
}
