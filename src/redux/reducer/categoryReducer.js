const defaultCategories = {
    categories: [],
    selectedProduct: null
}
import {PRODUCTS_UPDATED} from "../actionTypes";

const categoryReducer = (state = defaultCategories, action) => {

    if(action.type === PRODUCTS_UPDATED)
    {
        return {
            ...state,
            categories:action.categories
        }
    }
    return state
}


export default categoryReducer