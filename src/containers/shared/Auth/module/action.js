import {
  LOGINSAGA,
  SETUSERLOGIN,
  ERRORLOGIN,
  REGISTERSAGA,
  LOGOUTSAGA,
} from './types';

export const actLoginSaga = (email, password) => ({
  type: LOGINSAGA,
  userLogin: { email, password },
});
export const actRegisterSaga = (data) => ({
  type: REGISTERSAGA,
  userRegister: data,
});
export const actLogoutSaga = (data) => ({
  type: LOGOUTSAGA,
});
export const actSetUserLogin = (data) => ({
  type: SETUSERLOGIN,
  payload: data,
});
export const actSetError = (error) => ({ type: ERRORLOGIN, payload: error });
