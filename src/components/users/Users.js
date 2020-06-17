import React, { useContext } from 'react';
import Spinner from '../layout/Spinner';
import Useritem from './Useritem';
import GithubContext from '../../context/github/githubContext';

const Users = () => {
    const githubContext = useContext(GithubContext);
    const { loading, users } = githubContext;

    if (loading) {
        return <Spinner />
    } else {
        return (
            <div className="users-container">
                {users.map(user => (
                    <Useritem user={user} key={user.id} />
                ))}
            </div>
        )
    }
}

export default Users
