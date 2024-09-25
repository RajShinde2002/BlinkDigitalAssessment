import { configureStore } from "@reduxjs/toolkit";
import courseDetailReducer from "./slices/courseDetailSlice";
import boardReducer from "./slices/boardSlice";
import yearlyBoardReducer from "./slices/yearlyBoardSlice";

const store = configureStore({
  reducer: {
    pricing: courseDetailReducer,
    board: boardReducer,
    yearly: yearlyBoardReducer,
  },
});

export default store;
