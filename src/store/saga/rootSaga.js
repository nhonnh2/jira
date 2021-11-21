import { followSignin } from "../../containers/shared/Auth/module/generator";
import { all } from "redux-saga/effects";
import { followCreateProject } from "../../containers/client/CreateProject/module/generator";
import { followDeleteProject, followGetAllProject } from "../../containers/client/ManagerProject/module/generator";
import { followUpdateProjectSaga } from "../../containers/client/ManagerProject/modal/ModalEdit/module/generator";
import { followAddUserProjectSaga, followGetUserSaga } from "../../components/SearchDebounce/module/generator";

export function* rootSaga() {
    yield all([followSignin(), followCreateProject(), followGetAllProject(), followUpdateProjectSaga(),
        followDeleteProject(), followGetUserSaga(), followAddUserProjectSaga()
    ]);
}