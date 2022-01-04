import { createSlice } from '@reduxjs/toolkit';

const initialState = {
    items:[]
};

export const favoritesSlice = createSlice({
    name:'favorites',
    initialState,
    reducers:{
        addFavorite(state,action){
            state.items.push(action.payload);
            
        },
        deleteFavorite(state, action) {
            state.items = state.items.filter((item) => {
                return item.city !== action.payload
              })
        }
    },
}) 

export const {addFavorite, deleteFavorite} = favoritesSlice.actions;
export default favoritesSlice.reducer;
