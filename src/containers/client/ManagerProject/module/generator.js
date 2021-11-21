import { call, delay, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import projectApi from "../../../../apis/projectApi";
import { actDisplayLoding, actHideLoding } from "../../../../components/Loader/module/action";
import { STATUS_CODE } from "../../../../settings/apiConfig";
import { openNotificationWithIcon } from "../../../../utils/openNotification";
import { actGetAllProjectSaga, actSetProjectList } from "./action";
import { DELETE_PROJECT_SATA, GET_ALL_PROJECT_SAGA } from "./types";
//-------------getAllProject Start----------------------------
function* getAllProjectSaga() {
    yield put(actDisplayLoding());

    try {
        const { data, status } = yield projectApi.getAllProjectApi();
        if (status === STATUS_CODE.SUCCESS) {
            yield put(actSetProjectList(data.content));
            yield put(actHideLoding())

        }
    } catch (err) {
        console.log(err)
    }
}
export function* followGetAllProject() {
        yield takeLatest(GET_ALL_PROJECT_SAGA, getAllProjectSaga);
    }
    //-------------getAllProject End----------------------------

//-------------deleteProject Start--------------------------
function* deleteProjectSaga(action) {
    const { id } = action;
    try {

        const { status } = yield projectApi.deleteProjectApi(id);
        if (status === STATUS_CODE.SUCCESS) {
            yield put(actGetAllProjectSaga());
            openNotificationWithIcon('success', 'xóa thành công, dữ liệu bị xóa sẽ không thể hoàn lại');
        }
    } catch (err) {
        openNotificationWithIcon('error', 'xóa thất bại lỗi từ phía server');
        console.log(err);
    }
}
export function* followDeleteProject() {
    yield takeLatest(DELETE_PROJECT_SATA, deleteProjectSaga);
}