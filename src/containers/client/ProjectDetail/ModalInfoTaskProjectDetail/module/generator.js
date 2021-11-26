import taskApi from "../../../../../apis/taskApi";
import { STATUS_CODE } from "../../../../../settings/apiConfig";
import { call, delay, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { actGetProjectDetail } from "../../module/actions";
import { UPDATE_TASK_SAGA } from "./type";

function* updateTaskSaga(action) {
    const { data, idProject } = action;
    try {
        const { status } = yield taskApi.updateTaskApi(data);
        if (status === STATUS_CODE.SUCCESS) {
            yield put(actGetProjectDetail(idProject))
        }
    } catch (error) {
        console.log(error)
    }
}
export function* followUpdateTaskSaga() {
    yield takeLatest(UPDATE_TASK_SAGA, updateTaskSaga);
}