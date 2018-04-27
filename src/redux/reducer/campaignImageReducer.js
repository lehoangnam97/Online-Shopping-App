const defaultCampaignImages = {
    campaignImages: []
}

import {CAMPAIGN_IMAGES_UPDATED} from "../actionTypes";

const campaignImageReducer = (state = defaultCampaignImages, action) => {

    if(action.type === CAMPAIGN_IMAGES_UPDATED)
    {
        return {
            ...state,
            campaignImages:action.campaignImages
        }
    }
    return state
}


export default campaignImageReducer