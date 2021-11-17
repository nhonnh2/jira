import { followSignin } from "../../containers/shared/Auth/module/generator";
import { all } from "redux-saga/effects";

export function* rootSaga() {
    yield all([followSignin()])
}