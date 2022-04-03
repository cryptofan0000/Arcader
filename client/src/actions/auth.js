import {
    HIDE_SIGNUP_MODAL,
    HIDE_SIGNIN_MODAL,
    SHOW_SIGNIN_MODAL,
    SHOW_SIGNUP_MODAL
} from './types'

export const signinModalSet = (flag) => async dispatch => {
    try {
        if(flag) {
            dispatch({
                type: SHOW_SIGNIN_MODAL
            })
        }
        else {
            dispatch({
                type: HIDE_SIGNIN_MODAL
            })
        }
    }
    catch(err) {
        console.log(err)
    }
}

export const signupModalSet = (flag) => async dispatch => {
    try {
        if(flag) {
            dispatch({
                type: SHOW_SIGNUP_MODAL
            })
        }
        else {
            dispatch({
                type: HIDE_SIGNUP_MODAL
            })
        }
    }
    catch(err) {
        console.log(err)
    }
}