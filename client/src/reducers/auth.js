import {
    SHOW_SIGNIN_MODAL,
    HIDE_SIGNIN_MODAL,
    SHOW_SIGNUP_MODAL,
    HIDE_SIGNUP_MODAL
} from '../actions/types'

const initialState = {
    isAuthenticated: null,
    showSigninModal: false,
    showSignupModal: false
}

function authReducer(state = initialState, action) {
    const { type } = action

    switch (type) {
        case SHOW_SIGNIN_MODAL:
            return {
                ...state,
                showSigninModal: true,
            }

        case HIDE_SIGNIN_MODAL:
            return {
                ...state,
                showSigninModal: false,
            }

        case SHOW_SIGNUP_MODAL:
            return {
                ...state,
                showSignupModal: true,
            }

        case HIDE_SIGNUP_MODAL:
            return {
                ...state,
                showSignupModal: false,
            }
        
        default:
            return state
    }
}

export default authReducer