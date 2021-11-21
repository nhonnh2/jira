import { ADD_USER_PROJECT_SAGA, GET_USER_SAGA, SET_LIST_SEARCH } from "./types"

export const actSetListSearch = (data) => {
    return { type: SET_LIST_SEARCH, payload: data }
}
export const actGetUserSaga = (key) => { return { type: GET_USER_SAGA, key } }
export const actAddUserProjectSaga = (data) => { return { type: ADD_USER_PROJECT_SAGA, data } }