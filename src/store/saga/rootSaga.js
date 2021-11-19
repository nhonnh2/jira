import { followSignin } from "../../containers/shared/Auth/module/generator";
import { all } from "redux-saga/effects";
import { followCreateProject } from "../../containers/client/CreateProject/module/generator";
import { followGetAllProject } from "../../containers/client/ManagerProject/module/generator";

export function* rootSaga() {
    yield all([followSignin(), followCreateProject(), followGetAllProject()]);
}