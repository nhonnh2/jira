import { call, delay, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import projectApi from "../../../../../apis/projectApi";
import { actDisplayLoding, actHideLoding } from "../../../../../components/Loader/module/action";
import { actCloseModalForm } from "../../../../../hocs/hocModalForm/module/action";
import { STATUS_CODE } from "../../../../../settings/apiConfig";
import { actGetAllProjectSaga } from "../../module/action";
import { UPDATE_PROJECT_SAGA } from "./types";

function* updateProjectSaga(action) {
    const { projectNew } = action;
    yield put(actDisplayLoding())
    try {
        const { status } = yield projectApi.updateProjectApi(projectNew);
        if (status === STATUS_CODE.SUCCESS) {
            yield put(actCloseModalForm());
            yield put(actGetAllProjectSaga());
            yield put(actHideLoding())

        }
    } catch (err) {
        console.log(err)
    }

}
export function* followUpdateProjectSaga() {
    yield takeLatest(UPDATE_PROJECT_SAGA, updateProjectSaga)
}