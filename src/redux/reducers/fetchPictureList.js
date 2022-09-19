import {
    FETCH_PICTURE_LIST_PENDING,
    FETCH_PICTURE_LIST_SUCCESS,
    FETCH_PICTURE_LIST_ERROR
} from "../constants";
const initState = {
    data: [],
    loading: false,
    error: null,
}
export const fetchPictureListReducer = (state = initState, action) => {
    switch (action.type) {
        case FETCH_PICTURE_LIST_PENDING:
            return {
                ...state,
                loading: true,
                error: null
            }
        case FETCH_PICTURE_LIST_SUCCESS:
            return {
                ...state,
                data: action.data,
                loading: false,
            }
        case FETCH_PICTURE_LIST_ERROR:
            return {
                ...state,
                loading: false,
                error: action.error
            }
        default:
            return state;
    }
}