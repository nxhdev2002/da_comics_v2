import axios from 'axios'
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'

const initialState = {
    loading: false,
    data: [],
    error: null
}

export const fetchComics = createAsyncThunk('comic/fetchComics', () => {
    return axios
        .get('https://nxhdev.pro/mangadex/manga?includes[]=cover_art')
        .then(response => response.data)
})

const comicSlide = createSlice({
    name: 'comic',
    initialState,
    extraReducers: builder => {
        builder.addCase(fetchComics.pending, state => {
            state.loading = true
        })
        builder.addCase(fetchComics.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = ''
        })
        builder.addCase(fetchComics.rejected, (state, action) => {
            state.loading = false
            state.data = []
            state.error = action.error.message
        })
    }
})

export const comicReducer = comicSlide.reducer
