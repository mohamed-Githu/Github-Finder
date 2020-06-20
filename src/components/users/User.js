import React, { useEffect, useContext } from 'react'
import Spinner from '../layout/Spinner';
import Repos from '../repos/Repos';
import { Link } from 'react-router-dom';
import GithubContext from '../../context/github/githubContext';

const User = ({ match }) => {
    const githubContext = useContext(GithubContext);
    const { user, loading, getUser, getUserRepos, repos, reposLoading } = githubContext;

    useEffect(() => {
        getUser(match.params.login);
        getUserRepos(match.params.login);
        // eslint-disable-next-line
    }, [])


    const {
        name, avatar_url, location, bio, blog,
        login, html_url, following, followers,
        public_repos, public_gists, hireable
    } = user;
    
    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="user-container">
                <button className="user-container__button">
                    <Link className="user-container__link" to='/'>Back to search</Link>
                </button>
                <div className="user-container__content">
                    <div>
                        <img src={avatar_url} alt="user-pic" className="user-item__pic"/>
                        <div>{name}</div>
                        <div>{location}</div>
                        <div>{bio}</div>
                        <div>{blog}</div>
                        <div>{login}</div>
                        <div>{html_url}</div>
                        <div>{following}</div>
                        <div>{followers}</div>
                        <div>{public_repos}</div>
                        <div>{public_gists}</div>
                        <div>{hireable}</div>
                    </div>
                    <div className="repos">
                        { !reposLoading && <Repos repos={repos} /> }
                        { reposLoading && <Spinner /> }
                    </div>
                </div>
            </div>
        )
    }
}

export default User;
