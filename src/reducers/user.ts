import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({
  name: 'user',
  initialState: {
    username: '',
  },
  reducers: {
    saveUsername: (state, action) => {
      state.username = action.payload; // username
    },
  },
});

const {saveUsername} = userSlice.actions;
export {saveUsername};
export default userSlice.reducer;
