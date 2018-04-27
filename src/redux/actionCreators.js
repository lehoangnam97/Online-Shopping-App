import {
    USER_LOGIN, USER_LOGOUT, USER_LOGGING_IN, PRODUCTS_UPDATED, ARTICLES_UPDATED, SALES_UPDATED,
    CAMPAIGN_IMAGES_UPDATED, SHOPS_UPDATED
} from './actionTypes'


export function login(user){
    return {type: USER_LOGIN, user: user}
}

export function loggingIn(){
    return {type: USER_LOGGING_IN}
}

export function logout(){
    return {type: USER_LOGOUT}
}

export function updateCategories(categories)
{
    return {type: PRODUCTS_UPDATED, categories: categories}
}

export function updateArticles(articles)
{
    return {type: ARTICLES_UPDATED, articles: articles}
}

export function updateSales(sales)
{
    return {type: SALES_UPDATED, sales: sales}
}

export function updateCampaignImages(campaignImages)
{
    return {type: CAMPAIGN_IMAGES_UPDATED, campaignImages: campaignImages}

}

export function updateShops(shops)
{
    return {type: SHOPS_UPDATED, shops: shops}
}