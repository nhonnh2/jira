import { CREATE_TASK_SAGA } from "./type"

export const actCreateTaskSaga = (data) => {
    return { type: CREATE_TASK_SAGA, data }
}