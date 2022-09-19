import { combineReducers } from "redux";
import { fetchComicListReducer } from './fetchComicList'
import { fetchPopularListReducer } from "./fetchPopularList";
import { fetchEposideReducer } from "./fetchEposide";
import { setCurrentMangaReducer } from "./setCurrentManga";
import { fetchPictureListReducer } from "./fetchPictureList";
import { setAppbarReducer } from "./setAppbar";
const allReducer = combineReducers({
    comic: fetchComicListReducer,
    popular: fetchPopularListReducer,
    eposide: fetchEposideReducer,
    current: setCurrentMangaReducer,
    picture: fetchPictureListReducer,
    appbar: setAppbarReducer
})

export default rootReducer = (state, action) => allReducer(state, action);
