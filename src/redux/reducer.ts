import { actionTypes } from '@/redux/actions'
import { HYDRATE } from 'next-redux-wrapper'

let isAuthenticated = false

const initialState = {
  isAuthenticated: isAuthenticated,
}

function reducer(state:any, action:any) {
  switch (action.type) {
    case HYDRATE: {
      return { ...state, ...action.payload }
    }

    case actionTypes.AUTH_LOGIN_SUCCESS:
      return {
        ...state,
        ...{isAuthenticated: initialState.isAuthenticated}
      }

    case actionTypes.AUTH_LOGOUT_SUCCESS:
      return {
        ...state,
      }

    default:
      return state
  }
}

export default reducer
