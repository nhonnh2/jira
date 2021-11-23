import taskApi from "../../../../../apis/taskApi";
import { STATUS_CODE } from "../../../../../settings/apiConfig";
import { openNotificationWithIcon } from "../../../../../utils/openNotification";
import { call, delay, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { CREATE_TASK_SAGA } from "./type";
import { actCloseModalForm } from "../../../../../hocs/hocModalForm/module/action";

function* createTaskSaga(action) {
    const { data } = action;
    console.log("data create task", data);

    try {
        const { status } = yield taskApi.createTaskApi(data);
        if (status === STATUS_CODE.SUCCESS) {
            openNotificationWithIcon("success", "thêm task thành công")
        }
    } catch (error) {
        openNotificationWithIcon("error", "thêm thất bại lỗi từ phía server")
        console.log(error)
    }
    yield put(actCloseModalForm());

}
export function* followCreateTaskSaga() {
    yield takeLatest(CREATE_TASK_SAGA, createTaskSaga);
}