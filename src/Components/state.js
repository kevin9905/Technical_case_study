import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import { getComic } from "../Utils/fetch";

const initialState = {
  data: {},
  loading: true,
};

export const fetchChapter = createAsyncThunk(
  "comics/fetchChapter",
  async (payload) => {
    const response = await getComic(payload);
    return response;
  }
);

export const comicSlice = createSlice({
  name: "comics",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchChapter.fulfilled, (state, action) => {
      state.loading = false;
      state.data = action.payload;
    });
    builder.addCase(fetchChapter.pending, (state, action) => {
      state.loading = true;
    });
  },
});

export const comicsSelector = (state) => state.comics.data;
export const loadingSelector = (state) => state.comics.loading;

export default comicSlice.reducer;
