import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  topLevelKeys: [],
  allGrades: [],
  monthlyGradesData: [],
  yearlyGradesData: [],
};

function getTopLevelKeys(data) {
  return Object.keys(data.reduce((acc, cur) => ({ ...acc, ...cur }), {}));
}

function getAllGrades(data) {
  const allGrades = new Set();

  function extractGrades(obj) {
    if (Array.isArray(obj)) {
      obj.forEach(item => extractGrades(item));
    } else if (typeof obj === 'object' && obj !== null) {
      if (obj.grade) {
        allGrades.add(obj.grade);
      }
      Object.values(obj).forEach(value => extractGrades(value));
    }
  }

  extractGrades(data);
  return Array.from(allGrades);
}

function getMonthlyGradesData(data) {
  return data.find(item => item.monthly)?.monthly || [];
}

function getYearlyGradesData(data) {
  return data.find(item => item.yearly)?.yearly || [];
}

const courseDetailSlice = createSlice({
  name: 'courseDetail',
  initialState,
  reducers: {
    setCourseData: (state, action) => {
      const data = action.payload;
      state.topLevelKeys = getTopLevelKeys(data);
      state.allGrades = getAllGrades(data);
      state.monthlyGradesData = getMonthlyGradesData(data);
      state.yearlyGradesData = getYearlyGradesData(data);
    },
  },
});

export const { setCourseData } = courseDetailSlice.actions;
export default courseDetailSlice.reducer;