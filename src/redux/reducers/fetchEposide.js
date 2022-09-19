import {
    FETCH_EPOSIDE_LIST_ERROR,
    FETCH_EPOSIDE_LIST_PENDING,
    FETCH_EPOSIDE_LIST_SUCCESS
} from "../constants";
const initState = {
    data: [],
    loading: false,
    error: null,
}
export const fetchEposideReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_EPOSIDE_LIST_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_EPOSIDE_LIST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case FETCH_EPOSIDE_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}