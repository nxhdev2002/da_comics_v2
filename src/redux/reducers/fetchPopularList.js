import {
    FETCH_POPULAR_LIST_PENDING,
    FETCH_POPULAR_LIST_SUCCESS,
    FETCH_POPULAR_LIST_ERROR
} from "../constants";
const initState = {
    data: [],
    loading: false,
    error: null,
}
export const fetchPopularListReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_POPULAR_LIST_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_POPULAR_LIST_SUCCESS:
            return {
                ...state,
                data: [...state.data, ...action.data],
                loading: false,
            }
        case FETCH_POPULAR_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}