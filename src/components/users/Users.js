import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import Useritem from './Useritem';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users, clearUsers } = githubContext;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="users-container">
                {users.length && <button className="users-container__clear" onClick={clearUsers}>
                    clear list
                </button>}

                {users.map(user => (
                    <Useritem user={user} key={user.id} />
                ))}
            </div>
        )
    }
}

export default Users
