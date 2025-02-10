import { createSlice } from "@reduxjs/toolkit";

export type catState = {
  cats: any[],
  isLoading: boolean;
}

const initialState: catState = {
  cats: [],
  isLoading: false,
}


export const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    getCatFetch: state => {
      state.isLoading = true;
    },

    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: state => {
      state.isLoading = false;
    }
  }
});

export const { getCatFetch, getCatsSuccess, getCatsFailure} = catSlice.actions;

export default catSlice.reducer;