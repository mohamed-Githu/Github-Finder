import { 
    SEARCH_USERS,
    SET_LOADING,
    CLEAR_USERS,
    GET_REPOS,
    GET_USER,
    SET_LOADING_REPO
 } from '../types';

 export default (state, action) => {
    switch (action.type) {
        case SET_LOADING_REPO :
            return {
                ...state,
                reposLoading: true
            }
        case SET_LOADING :
            return {
                ...state,
                loading: true
            }
        case SEARCH_USERS :
            return {
                ...state,
                users: action.payload,
                loading: false
            }
        case GET_USER :
            return {
                ...state,
                user: action.payload,
                loading: false,
            }
        case GET_REPOS :
            return {
                ...state,
                repos: action.payload,
                reposLoading: false
            }
        case CLEAR_USERS :
            return {
                ...state,
                users: []
            }
        default:
            return state;
    }
 }