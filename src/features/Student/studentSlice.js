import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import studentApi from 'api/studentApi';

// rtk: reduxtoolkit name cho khoi bi trung

export const getRtkStudentList = createAsyncThunk(
  'stkStudents/getRtkStudentList',
  async (payload) => {
    // no se tu dong dispatch 3 action
    const response = await studentApi.getAll(payload);
    return response;
  }
);

const studentSlice = createSlice({
  name: 'stkStudents',
  initialState: {
    list: [],
  },
  reducers: {
    // chi la vi du
    resetStudentList(state) {
      state.list = [];
    },
  },
  extraReducers: {
    //[getRtkStudentList.fulfilled] co the thay bang custom name: 'name_gi_cung_duoc/fulfield'
    // lang nghe cac action
    [getRtkStudentList.fulfilled]: (state, action) => {
      state.list = action.payload.data || [];
    },
  },
});

const { reducer, actions } = studentSlice;
export const { resetStudentList } = actions;
export default reducer;
