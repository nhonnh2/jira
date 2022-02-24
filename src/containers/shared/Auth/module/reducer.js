import { ACCESS_TOKEN, USER_LOGIN } from '../../../../settings/apiConfig';
import { ERRORLOGIN, REGISTERSAGA, SETUSERLOGIN } from './types';

let user = {};
if (localStorage.getItem(USER_LOGIN)) {
  user = JSON.parse(localStorage.getItem(USER_LOGIN));
}
const initialState = {
  userLogin: user,
  error: '',
};

const authReducer = (state = initialState, { type, payload }) => {
  switch (type) {
    case SETUSERLOGIN:
      localStorage.setItem(USER_LOGIN, JSON.stringify(payload));
      localStorage.setItem(ACCESS_TOKEN, payload?.accessToken);
      return { ...state, userLogin: payload };
    case ERRORLOGIN:
      return { ...state, error: payload };

    default:
      return { ...state };
  }
};
export default authReducer;
