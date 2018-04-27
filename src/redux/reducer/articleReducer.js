const defaultArticles = {
    articles: [],
    selectedArticle: null
}

import {ARTICLES_UPDATED} from "../actionTypes";

const articleReducer = (state = defaultArticles, action) => {

    if(action.type === ARTICLES_UPDATED)
    {
        action.articles.sort(function(a,b){
            return b.time - a.time
        })
        return {
            ...state,
            articles:action.articles
        }
    }
    return state
}


export default articleReducer