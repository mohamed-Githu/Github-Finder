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
        avatar_url,
        login,
        html_url,
        following,
        followers,
        public_repos
    } = user;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <>
                <div className="button-container">
                    <button className="user-container__button">
                        <Link className="user-container__link" to='/'>Back to search</Link>
                    </button>
                </div>
                <div className="user-container">
                    <div className="user-container__content">
                        <img src={avatar_url} alt="user-pic" className="user-item__pic" />
                        <div>
                            <div><strong className="bold">Name: </strong>{login}</div>
                            <div>
                                <strong className="bold">URL: </strong>
                                <a
                                    href={html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                >
                                    {html_url}
                                </a>
                            </div>
                            <div><strong className="bold">Following: </strong>{following}</div>
                            <div><strong className="bold">Followers: </strong>{followers}</div>
                            <div><strong className="bold">Public Repos: </strong>{public_repos}</div>
                        </div>
                        <p className="user-container__header">Repos</p>
                        <div className="repos">
                            {!reposLoading && <Repos repos={repos} />}
                            {reposLoading && <Spinner />}
                        </div>
                    </div>
                </div>
            </>
        )
    }
}

export default User;
