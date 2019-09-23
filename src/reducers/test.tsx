import { CHANGE_USER } from '../constants/ActionType'

const initState = {
  user: 'Anonymous'
}

const test = (state = initState, action: any) => {
  switch (action.type) {
    case CHANGE_USER:
      return {...state, user:action.payload}
    default:
      return state
  }
};

export default test;