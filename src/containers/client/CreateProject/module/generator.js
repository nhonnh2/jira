import { call, delay, put, select, takeEvery, takeLatest } from "@redux-saga/core/effects";
import projectApi from "../../../../apis/projectApi";
import { actDisplayLoding, actHideLoding } from "../../../../components/Loader/module/action";
import { STATUS_CODE } from "../../../../settings/apiConfig";
import { CREATE_PROJECT_SAGA } from "./types";
import { history } from "../../../../utils/history";

function* createProjectSaga(action) {
    const { data } = action;
    try {
        const { status } = yield projectApi.createProjectApi(data);
        if (status === STATUS_CODE.SUCCESS) {
            console.log("dataCreateProjectSuccess");
            history.push("/managerproject")
        }
    } catch (err) {
        console.log(err)
    }

}
export function* followCreateProject() {
    yield takeLatest(CREATE_PROJECT_SAGA, createProjectSaga)
}