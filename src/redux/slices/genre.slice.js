import {createAsyncThunk, createSlice,} from "@reduxjs/toolkit";

import {genreService} from "../../services";

const initialState = {
    genres: [],
    loading: false,
    errors: null
};

const getAll = createAsyncThunk (
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
            .addCase(getAll.fulfilled,(state,action)=>{
                state.genres = action.payload;
                state.errors = null;
                state.loading = true;
            })
            .addCase(getAll.pending,(state,action)=> {
                state.loading = true;
            })
            .addDefaultCase((state,action)=>{
                const [pathElement] = action.type.split('/').splice(-1);
                if (pathElement === 'reject'){
                    state.errors = action.payload;
                    state.loading = false;
                }
            })
});

const {reducer: genreReducer} = genreSlice;

const genreActions = {
    getAll
};

export {
    genreActions,
    genreReducer
}
