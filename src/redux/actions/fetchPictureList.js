import {
    FETCH_PICTURE_LIST_ERROR,
    FETCH_PICTURE_LIST_PENDING,
    FETCH_PICTURE_LIST_SUCCESS
} from "../constants";
import {
    fetch_picture_list
} from "../../services";
export const fetchPictureList = (uuid, chapter) => dispatch => {
    dispatch({
        type: FETCH_PICTURE_LIST_PENDING,
    })
    fetch_picture_list(uuid, chapter)
        .then((data) => {
            dispatch({
                type: FETCH_PICTURE_LIST_SUCCESS,
                data: data
            })
        })
        .then((err) => {
            dispatch({
                type: FETCH_PICTURE_LIST_ERROR,
                error: err
            })
        })
}