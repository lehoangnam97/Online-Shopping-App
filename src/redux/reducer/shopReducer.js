const defaultShops = {
    shops: [],
    selectedShop: null
}

import {SHOPS_UPDATED} from "../actionTypes";

const shopReducer = (state = defaultShops, action) => {

    if(action.type === SHOPS_UPDATED)
    {
        return {
            ...state,
            shops:action.shops
        }
    }
    return state
}


export default shopReducer