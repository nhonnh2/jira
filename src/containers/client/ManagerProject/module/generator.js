import { call, delay, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import projectApi from "../../../../apis/projectApi";
import { STATUS_CODE } from "../../../../settings/apiConfig";
import { actSetProjectList } from "./action";
import { GET_ALL_PROJECT_SAGA } from "./types";

function* getAllProjectSaga() {
    try {
        const { data, status } = yield projectApi.getAllProjectApi();
        console.log("data project", data)
        if (status === STATUS_CODE.SUCCESS) {
            yield put(actSetProjectList(data.content))
        }
    } catch (err) {
        console.log(err)
    }
}
export function* followGetAllProject() {
    yield takeLatest(GET_ALL_PROJECT_SAGA, getAllProjectSaga);
}