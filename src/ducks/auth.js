import firebase from 'firebase'
import {Record} from 'immutable'
import {appName} from '../config'

export const moduleName = 'auth'
export const SIGN_UP_REQUEST = `${appName}/${moduleName}/SIGN_UP_REQUEST`
export const SIGN_UP_SUCCESS = `${appName}/${moduleName}/SIGN_UP_SUCCESS`
export const SIGN_UP_ERROR = `${appName}/${moduleName}/SIGN_UP_ERROR`

export const SIGN_IN_REQUEST = `${appName}/${moduleName}/SIGN_IN_REQUEST`
export const SIGN_IN_SUCCESS = `${appName}/${moduleName}/SIGN_IN_SUCCESS`
export const SIGN_IN_ERROR = `${appName}/${moduleName}/SIGN_IN_ERROR`

const ReducerRecord = Record({
    user: null,
    error: null,
    loading: false
})

export default function (state = new ReducerRecord(), action) {
    const {type, payload} = action
    switch (type) {
        case SIGN_UP_REQUEST:
            return state.set('loading', true)
        case SIGN_UP_SUCCESS:
            return state
                .set('loading', false)
                .set('user', payload.user)
        case SIGN_UP_ERROR:
            return state
                .set('loading', false)
                .set('error', payload.error)

        case SIGN_IN_REQUEST:
            return state
                .set('loading', true)
        case SIGN_IN_SUCCESS:
            return state
                .set('loading', false)
                .set('user', payload.user)
        case SIGN_IN_ERROR:
            return state
                .set('loading', false)
                .set('error', payload.error)
        default:
            return state
    }
}

export function signUp(email, password) {
    return dispatch => {
        dispatch({
            type: SIGN_UP_REQUEST
        })

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => dispatch({
                type: SIGN_UP_SUCCESS,
                payload: {user}
            }))
            .catch(error => dispatch({
                type: SIGN_UP_ERROR,
                payload: {error}
            }))
    }
}

export function signIn(email, password) {
    return dispatch => {
        dispatch({
            type: SIGN_IN_REQUEST
        })

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(user => dispatch({
                type: SIGN_IN_SUCCESS,
                payload: {user}
            }))
            .catch(error => dispatch({
                    type: SIGN_IN_ERROR,
                    payload: {error}
                })
            )
    }
}