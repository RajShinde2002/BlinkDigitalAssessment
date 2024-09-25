import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  boards: {},
  grade: "",
  sessions: [],
};

const boardSlice = createSlice({
  name: "boards",
  initialState,
  reducers: {
    setBoardsData: (state, action) => {
      const { boards, grade } = action.payload;
      state.boards = boards;
      state.grade = grade;

      let extractedSessions = [];

      for (const boardName in boards) {
        const board = boards[boardName];
        if (board) {
          Object.entries(board).forEach(([type, details]) => {
            extractedSessions.push({ type, ...details, boardName }); 
          });
        }
      }
      extractedSessions = [...new Set(extractedSessions)]

      state.sessions = extractedSessions; 
    },
  },
});

export const { setBoardsData } = boardSlice.actions;

export default boardSlice.reducer;
