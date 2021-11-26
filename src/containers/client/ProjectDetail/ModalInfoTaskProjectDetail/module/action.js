import { SET_TASK_DETAIL_REDUX, UPDATE_TASK_SAGA } from "./type"

export const actSetTaskDetailRedux = (task) => {
    return {
        type: SET_TASK_DETAIL_REDUX,
        payload: task
    }
}
export const actUpdateTaskSaga = (data, idProject) => {
    return {
        type: UPDATE_TASK_SAGA,
        data,
        idProject
    }
}