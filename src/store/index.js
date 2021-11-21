import { createStore, combineReducers, applyMiddleware } from "redux";
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import createMiddleWareSaga from "redux-saga";
import { rootSaga } from "./saga/rootSaga";
import loaderReducer from "../components/Loader/module/reducer";
import authReducer from "../containers/shared/Auth/module/reducer";
import historyReducer from "./historyReducer"
import modalFormReducer from "../hocs/hocModalForm/module/reducer"
import projectManagerReducer from "../containers/client/ManagerProject/module/reducer";
import searChDebouceReducer from "../components/SearchDebounce/module/reducer";
const middleWareSaga = createMiddleWareSaga();
const rootReducer = combineReducers({
    loaderReducer,
    authReducer,
    projectManagerReducer,
    modalFormReducer,
    searChDebouceReducer
});
const store = createStore(rootReducer,
    composeWithDevTools(applyMiddleware(thunk, middleWareSaga))
);
middleWareSaga.run(rootSaga);
export default store;