import { SHOW_APPBAR, HIDE_APPBAR } from "../constants";

const initState = {
    show: true
}
export const setAppbarReducer = (state = initState, action) => {
    switch(action.type) {
        case HIDE_APPBAR:
            return {
                show: false
            }
        case SHOW_APPBAR:
            return {
                show: true
            }
        default:
            return state
    }
}