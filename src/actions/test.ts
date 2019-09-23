import { CHANGE_USER } from '../constants/ActionType'

const changeUser = (user: string) => ({
    type: CHANGE_USER,
    payload: user
})

const test = { changeUser };

export default test;