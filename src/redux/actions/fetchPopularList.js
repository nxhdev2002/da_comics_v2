import {
    FETCH_POPULAR_LIST_PENDING,
    FETCH_POPULAR_LIST_SUCCESS,
    FETCH_POPULAR_LIST_ERROR
} from "../constants";
import {
    fetch_popular_list
} from "../../services";
export const fetchPopularList = (offset=0) => dispatch => {
    dispatch({
        type: FETCH_POPULAR_LIST_PENDING,
    })
    fetch_popular_list(offset)
        .then((data) => {
            dispatch({
                type: FETCH_POPULAR_LIST_SUCCESS,
                data: data
            })
        })
        .then((err) => {
            dispatch({
                type: FETCH_POPULAR_LIST_ERROR,
                error: err
            })
        })
}