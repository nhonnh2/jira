import userApi from "../../../apis/userApi";
import { STATUS_CODE } from "../../../settings/apiConfig";
import { actSetListSearch } from "./actions";
import { call, delay, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { ADD_USER_PROJECT_SAGA, GET_USER_SAGA } from "./types";
import projectApi from "../../../apis/projectApi";
import { actGetAllProjectSaga } from "../../../containers/client/ManagerProject/module/action";
import { openNotificationWithIcon } from "../../../utils/openNotification";
//------------getUser Start------------------------------
function* getUserSaga(action) {
    const { key } = action;
    try {
        const { status, data } = yield userApi.getUserApi(key);
        if (status === STATUS_CODE.SUCCESS) {
            console.log("getUserApi", data.content);
            yield put(actSetListSearch(data.content));
        }
    } catch (err) {
        console.log(err)
    }
}
export function* followGetUserSaga() {
        yield takeLatest(GET_USER_SAGA, getUserSaga);
    }
    //------------getUser End------------------------------

//------------add User project Start ------------------
function* addUserProjectSaga(action) {
    const { data } = action;
    data['userId'] = data['valueSelect'];
    delete data['valueSelect'];
    console.log("data select user", data);
    try {
        const { status } = yield projectApi.assignUserProjectApi(data);
        if (status === STATUS_CODE.SUCCESS) {
            yield put(actGetAllProjectSaga());
            openNotificationWithIcon('success', 'thêm user cho project thành công')
        }
    } catch (error) {
        console.log(error)
        openNotificationWithIcon('error', 'thêm user cho project thất bại, lỗi từ phía server')

    }
}
export function* followAddUserProjectSaga() {
        yield takeLatest(ADD_USER_PROJECT_SAGA, addUserProjectSaga);
    }
    //------------add User project End ------------------