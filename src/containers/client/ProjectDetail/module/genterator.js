import projectApi from "../../../../apis/projectApi";
import { STATUS_CODE } from "../../../../settings/apiConfig";
import { call, delay, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import { actDisplayLoding, actHideLoding } from "../../../../components/Loader/module/action";
import { actSetProjectDetail } from "./actions";
import { GET_PROJECT_DETAIL_SAGA } from "./types";

//-----------getProjectDetailSaga Start-------------------
function* getProjectDetailSaga(action) {
    yield put(actDisplayLoding());
    const { idProject } = action;
    try {
        const { status, data } = yield projectApi.getProjectDetailApi(idProject);
        if (status === STATUS_CODE.SUCCESS) {
            yield put(actSetProjectDetail(data.content));
            yield put(actHideLoding());
        }
    } catch (error) {
        console.log(error)
    }
}
export function* followGetProjectDetailSaga() {
        yield takeLatest(GET_PROJECT_DETAIL_SAGA, getProjectDetailSaga)
    }
    //-----------getProjectDetailSaga End-------------------