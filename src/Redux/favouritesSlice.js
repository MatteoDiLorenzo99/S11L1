import { createSlice } from '@reduxjs/toolkit';

const favouritesSlice = createSlice({
  name: 'favourites',
  initialState: [],
  reducers: {
    addToFavourites: (state, action) => {
      if (!state.some(company => company === action.payload)) {
        state.push(action.payload);
      }
    },
    removeFromFavourites: (state, action) => {
      return state.filter(company => company !== action.payload);
    },
  },
});

export const { addToFavourites, removeFromFavourites } = favouritesSlice.actions;
export default favouritesSlice.reducer;
