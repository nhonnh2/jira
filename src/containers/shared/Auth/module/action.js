import { LOGINSAGA, SETUSERLOGIN } from "./types"

export const actLoginSaga = (email, password) => ({
    type: LOGINSAGA,
    userLogin: { email, password }
})
export const actSetUserLogin = (data) => ({
    type: SETUSERLOGIN,
    payload: data
})