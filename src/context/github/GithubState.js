import React , { useReducer } from 'react';
import axios from 'axios';
import GithubContext from './githubContext';
import GithubReducer from './githubReducer';
import { SEARCH_USERS, SET_LOADING, SET_LOADING_REPO,
        CLEAR_USERS, GET_REPOS, GET_USER } from '../types';

const id = '873032912a449f13ec69';
const secret = 'aeb749eda476c697eac939f98cd6d99eab313d00';

const GithubState = props => {
    const initialState = {
        users: [],
        user: {},
        repos: [],
        loading: false,
        reposLoading: false
    }

    const [state, dispatch] = useReducer(GithubReducer, initialState);

    const searchUsers = async text => {
        dispatch({ type: SET_LOADING })
    
        const res = await axios.get(`https://api.github.com/search/users?q=${text}
        &client_id=${id}
        &client_secret=${secret}`);

        dispatch({
            type: SEARCH_USERS,
            payload: res.data.items
        })
    }

    const clearUsers = () => dispatch({ type: CLEAR_USERS })

    const getUser = async username => {
        dispatch({ type: SET_LOADING })
    
        const res = await axios.get(`https://api.github.com/users/${username}?
        &client_id=${id}
        &client_secret=${secret}`);
    
        dispatch({
            type: GET_USER,
            payload: res.data
        })
    }

    const getUserRepos = async username => {
        dispatch({ type: SET_LOADING_REPO })

        const res = await axios.get(`https://api.github.com/users/${username}/repos?
        per_page=5&sort=created:asc
        &client_id=${id}
        &client_secret=${secret}`);

        dispatch({
            type: GET_REPOS,
            payload: res.data
        })
    }
    return (
        <GithubContext.Provider value={{ 
            users: state.users,
            user: state.user,
            repos: state.repos,
            loading: state.loading,
            reposLoading: state.reposLoading,
            searchUsers,
            clearUsers,
            getUser,
            getUserRepos }}
        >
            {props.children}
        </GithubContext.Provider>
    )
}

export default GithubState;