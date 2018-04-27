const defaultSales = {
    sales: [],
    selectedSale: null
}

import {SALES_UPDATED} from "../actionTypes";

const saleReducer = (state = defaultSales, action) => {

    if(action.type === SALES_UPDATED)
    {
        action.sales.sort(function(a,b){
            return b.time-a.time
        })
        return {
            ...state,
            sales:action.sales
        }
    }
    return state
}


export default saleReducer