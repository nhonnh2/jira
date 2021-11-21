import { UPDATE_PROJECT_SAGA } from "./types"

export const actUpdateProjectSaga = (projectNew) => {
    return { type: UPDATE_PROJECT_SAGA, projectNew }
}