import {
    FETCH_COMIC_LIST_PENDING,
    FETCH_COMIC_LIST_SUCCESS,
    FETCH_COMIC_LIST_ERROR
} from "../constants";
const initState = {
    data: [],
    loading: false,
    error: null,
}
export const fetchComicListReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_COMIC_LIST_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_COMIC_LIST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case FETCH_COMIC_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}