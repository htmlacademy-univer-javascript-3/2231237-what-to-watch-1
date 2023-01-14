import {ReviewProcess} from "../../types/state";
import {createSlice} from "@reduxjs/toolkit";
import {NameSpace} from "../../const";
import {fetchReviewAction} from "../api-actions";

const initialState: ReviewProcess = {
  review: [],
  isDataLoaded: false,
};

export const reviewProcess = createSlice({
  name: NameSpace.Review,
  initialState,
  reducers: {},
  extraReducers: function (builder) {
    builder
      .addCase(fetchReviewAction.pending, (state) => {
        state.isDataLoaded = true
      })
      .addCase(fetchReviewAction.fulfilled, (state, action) => {
        state.review = action.payload
        state.isDataLoaded = false
      })
  }
});
