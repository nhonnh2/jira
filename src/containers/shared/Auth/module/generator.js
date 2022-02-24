import {
  call,
  delay,
  put,
  select,
  takeEvery,
  takeLatest,
} from '@redux-saga/core/effects';
import authApi from '../../../../apis/authApi';
import {
  actDisplayLoding,
  actHideLoding,
} from '../../../../components/Loader/module/action';
import {
  ACCESS_TOKEN,
  STATUS_CODE,
  USER_LOGIN,
} from '../../../../settings/apiConfig';
import { actLoginSaga, actSetError, actSetUserLogin } from './action';
import { LOGINSAGA, LOGOUTSAGA, REGISTERSAGA } from './types';
import { history } from '../../../../utils/history';

function* signinSaga(act) {
  yield put(actDisplayLoding());
  const { userLogin } = act;
  try {
    const { data, status } = yield authApi.loginApi(userLogin);
    console.log('datalogin', data);
    if (status === STATUS_CODE.SUCCESS) {
      console.log('data', data.content);
      yield put(actSetUserLogin(data.content));
      yield delay(500);
      yield put(actHideLoding());
    }
  } catch (err) {
    yield put(actSetError(err.response.data.message));
    yield put(actHideLoding());
    yield delay(3000);
    yield put(actSetError(''));
  }
}
function* signupSaga(act) {
  yield put(actDisplayLoding());
  const { userRegister } = act;
  try {
    const { data, status } = yield authApi.registerApi(userRegister);
    console.log(data);
    if (status === STATUS_CODE.SUCCESS) {
      console.log('data', data.content);
      const { email, passWord } = data.content;
      console.log('email password', { email, passWord });
      const { data: data2, status: status2 } = yield authApi.loginApi({
        email,
        passWord,
      });
      console.log(status2);
      if (status2 === STATUS_CODE.SUCCESS) {
        console.log('data2', data2.content);
        yield put(actSetUserLogin(data2.content));
        yield delay(500);
        yield put(actHideLoding());
      }
    }
  } catch (err) {
    yield put(actSetError(err.response.data.message));
    yield put(actHideLoding());
    yield delay(3000);
    yield put(actSetError(''));
  }
}
function* logoutSaga() {
  yield put(actDisplayLoding());
  yield put(actSetUserLogin({}));
  yield put(actHideLoding());
}
export function* followSignin() {
  yield takeLatest(LOGINSAGA, signinSaga);
  yield takeLatest(REGISTERSAGA, signupSaga);
  yield takeLatest(LOGOUTSAGA, logoutSaga);
}
