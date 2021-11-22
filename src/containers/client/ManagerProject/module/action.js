import { DELETE_PROJECT_SAGA, GET_ALL_PROJECT_SAGA, REMOVE_USER_FROM_PROJECT_SAGA, SET_PROJECT_LIST } from "./types"

export const actGetAllProjectSaga = () => {
    return {
        type: GET_ALL_PROJECT_SAGA
    }
}
export const actSetProjectList = (data) => {
    return {
        type: SET_PROJECT_LIST,
        payload: data
    }
}
export const actDeleteProject = (id) => {
    return { type: DELETE_PROJECT_SAGA, id }
}
export const actRemoveUserFromProjectSaga = (data) => {
    return {
        type: REMOVE_USER_FROM_PROJECT_SAGA,
        data
    }
}