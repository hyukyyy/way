import { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../redux/reducer';

// redux의 userSlice에서 accessToken && refreshToken 일 때를
// login 상태로 간주

const useIsLoggedIn = () => {
  const [isLoggedIn, setIsLoggedIn] = useState<boolean>(false);

  const accessToken = useSelector(
    (state: RootState) => state.userReducer.accessToken,
  );
  const refreshToken = useSelector(
    (state: RootState) => state.userReducer.refreshToken,
  );

  useEffect(() => {
    if (accessToken && refreshToken) {
      setIsLoggedIn(true);
    } else {
      setIsLoggedIn(false);
    }
  }, [accessToken, refreshToken]);

  return isLoggedIn;
};

export default useIsLoggedIn;
