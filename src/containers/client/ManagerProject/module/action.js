import { GET_ALL_PROJECT_SAGA, SET_PROJECT_LIST } from "./types"

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