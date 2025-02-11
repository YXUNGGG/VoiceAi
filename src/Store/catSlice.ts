import { createSlice } from "@reduxjs/toolkit";

export type catState = {
  cats: any[],
  isLoading: boolean;
  error: string | null,
}

const initialState: catState = {
  cats: [],
  isLoading: false,
  error: null,
}

export const catSlice = createSlice({
  name: 'cats',
  initialState,
  reducers: {
    getCatsFetch: state => {
      state.isLoading = true;
    },

    getCatsSuccess: (state, action) => {
      state.cats = action.payload;
      state.isLoading = false;
    },
    getCatsFailure: (state, action) => {
      state.error = action.payload;
      state.isLoading = false;
    }
  }
});

export const { getCatsFetch, getCatsSuccess, getCatsFailure} = catSlice.actions;
export default catSlice.reducer;