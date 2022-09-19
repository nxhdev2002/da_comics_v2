import { SET_CURRENT_MANGA } from "../constants";

const initState = {
    data: null
}
export const setCurrentMangaReducer = (state = initState, action) => {
    switch(action.type) {
        case SET_CURRENT_MANGA:
            return {
                data: action.data
            }
        default:
            return state
    }
}