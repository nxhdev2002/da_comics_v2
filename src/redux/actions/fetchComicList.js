import {
    FETCH_COMIC_LIST_PENDING,
    FETCH_COMIC_LIST_SUCCESS,
    FETCH_COMIC_LIST_ERROR,
} from "../constants";
import {
    fetch_list_comic,
} from '../../services'

export const fetchComicList = () => dispatch => {
    dispatch({
        type: FETCH_COMIC_LIST_PENDING,
    })
    fetch_list_comic()
        .then((result) => {
            dispatch({
                type: FETCH_COMIC_LIST_SUCCESS,
                data: result
            })
        })
        .catch((err) => {
            dispatch({
                type: FETCH_COMIC_LIST_ERROR,
                error: err
            })
        })
}