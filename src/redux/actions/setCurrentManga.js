import { SET_CURRENT_MANGA } from "../constants";

export const setCurrentManga = (uuid) => dispatch => {
    console.log(uuid)
    dispatch({
        type: SET_CURRENT_MANGA,
        data: uuid
    })
}