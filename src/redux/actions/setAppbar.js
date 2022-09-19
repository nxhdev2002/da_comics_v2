import { SHOW_APPBAR, HIDE_APPBAR } from "../constants";

export const setAppbar = (show) => dispatch => {
    show ? 
        dispatch({
            type: SHOW_APPBAR,
        })
    : 
        dispatch({
            type: HIDE_APPBAR,
        })
}