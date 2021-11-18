import { call, delay, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import authApi from "../../../../apis/authApi";
import { actDisplayLoding, actHideLoding } from "../../../../components/Loader/module/action";
import { STATUS_CODE } from "../../../../settings/apiConfig";
import { actLoginSaga, actSetUserLogin } from "./action";
import { LOGINSAGA } from "./types";
import { history } from "../../../../utils/history";

function* signinSaga(act) {
    console.log("signinSaga", act);
    console.log("actDisplayLoding", actDisplayLoding());
    yield put(actDisplayLoding());
    const { userLogin } = act;
    try {
        const { data, status } = yield authApi.loginApi(userLogin);
        if (status === STATUS_CODE.SUCCESS) {
            console.log("data", data.content)
            yield put(actSetUserLogin(data.content));
            yield delay(500)
            yield put(actHideLoding())
            history.push("/mainboard")
        }
    } catch (err) {
        console.log(err)
    }

}
export function* followSignin() {
    yield takeLatest(LOGINSAGA, signinSaga);
}