import { CREATE_PROJECT_SAGA } from "./types";

export const actCreateProjectSaga = (data) => ({
    type: CREATE_PROJECT_SAGA,
    data
})