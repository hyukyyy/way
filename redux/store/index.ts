import { configureStore } from '@reduxjs/toolkit';
import RootReducer from '../reducer';

/**
 * 애플리케이션의 '상태'를 관리하기 위한 Stroe 구성
 */
export const Store = configureStore({
  // combined된 여러개의 리듀서를 store에 저장합니다.
  reducer: RootReducer,

  // 미들 웨어로 logger를 사용합니다.
  //   로거는 사용하지 않아서 우선 제거
  //   middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
