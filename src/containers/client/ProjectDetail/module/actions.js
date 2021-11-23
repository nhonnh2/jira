import { GET_PROJECT_DETAIL_SAGA, SET_PROJECT_DETAIL } from "./types"

export const actGetProjectDetail = (idProject) => {
    return {
        type: GET_PROJECT_DETAIL_SAGA,
        idProject
    }
}
export const actSetProjectDetail = (project) => {
    return { type: SET_PROJECT_DETAIL, payload: project }
}