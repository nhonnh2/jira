import { SET_TASK_DETAIL_REDUX } from "./type"

const initialState = {
    taskDetalModal: {}
}

const taskReducer = (state = initialState, { type, payload }) => {
    switch (type) {

        case SET_TASK_DETAIL_REDUX:
            console.log("taskDetalModal", payload);
            return {...state, taskDetalModal: payload }

        default:
            return state
    }
}
export default taskReducer