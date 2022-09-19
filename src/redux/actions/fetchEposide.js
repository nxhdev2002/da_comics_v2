import {
    FETCH_EPOSIDE_LIST_PENDING,
    FETCH_EPOSIDE_LIST_SUCCESS,
    FETCH_EPOSIDE_LIST_ERROR
} from "../constants";
import {
    fetch_eposide_list
} from "../../services";
export const fetchEposide = (uuid) => dispatch => {
    dispatch({
        type: FETCH_EPOSIDE_LIST_PENDING,
    })
    fetch_eposide_list(uuid)
        .then((data) => {
            dispatch({
                type: FETCH_EPOSIDE_LIST_SUCCESS,
                data: data
            })
        })
        .then((err) => {
            dispatch({
                type: FETCH_EPOSIDE_LIST_ERROR,
                error: err
            })
        })
}