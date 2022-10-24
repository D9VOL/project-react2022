import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],

};

const getGenre = createAsyncThunk (
    'genresSlice/getAll',
    async (_,{rejectWithValue})=> {
        try {
            const {data} = await genreService.getAll();
            return data;
        }catch (e) {
            return rejectWithValue(e.response.data);
        }
    }
)

const genreSlice = createSlice({
    name: 'genreSlice',
    initialState,
    reducers: {},
    extraReducers: builder =>
        builder
            .addCase(getGenre.fulfilled,(state,action)=>{
                state.genres = action.payload;
                state.errors = null;
                state.loading = true;
            })

});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getGenre
};

export {
    genreActions,
    genreReducer
}

