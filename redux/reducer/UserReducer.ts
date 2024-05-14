import { createSlice } from '@reduxjs/toolkit';

// User에서 관리해야하는 Slice
const initialState = {
  accessToken: '',
  refreshToken: '',
};

/**
 * TemplateSlice에서 관리할 상태를 지정합니다.
 */
export const UserSlice = createSlice({
  name: 'userReducer',
  initialState,
  reducers: {
    // 모든 사용자 정보를 상태에 저장합니다.
    setAccessToken(state, action) {
      state.accessToken = action.payload.accessToken;
    },
    setRefreshToken(state, action) {
      state.refreshToken = action.payload.refreshToken;
    },
    setAccessTokenAndRefreshToken(state, action) {
      state.accessToken = action.payload.accessToken;
      state.refreshToken = action.payload.refreshToken;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAccessToken } = UserSlice.actions;

export default UserSlice.reducer;
