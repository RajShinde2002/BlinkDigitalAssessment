import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  boards: {},
  grade: '',
  filteredBoards: {},
};

const coursesSlice = createSlice({
  name: 'courses',
  initialState,
  reducers: {
    setYearlyCoursesData: (state, action) => {
      const { boards = {}, grade = "Grade 6" } = action.payload || {};
      state.boards = boards;
      state.grade = grade;
    },
    
    filterBoards: (state, action) => {
      const filterKey = action.payload || "CBSE";
      if (state.boards[filterKey]) {
        state.filteredBoards = { [filterKey]: state.boards[filterKey] };
      } else {
        state.filteredBoards = {};
      }
    },
  },
});

export const { setYearlyCoursesData, filterBoards } = coursesSlice.actions;

export default coursesSlice.reducer;