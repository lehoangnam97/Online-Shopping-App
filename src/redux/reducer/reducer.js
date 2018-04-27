import categoryReducer from './categoryReducer'
import loginReducer from './loginReducer'
import {combineReducers} from 'redux'
import articleReducer from "./articleReducer";
import saleReducer from "./salesReducer";
import campaignImageReducer from "./campaignImageReducer";
import shopReducer from "./shopReducer";


const reducer = combineReducers({
    articles: articleReducer,
    categories: categoryReducer,
    login: loginReducer,
    sales: saleReducer,
    campaignImages: campaignImageReducer,
    shops: shopReducer
})

export default reducer;