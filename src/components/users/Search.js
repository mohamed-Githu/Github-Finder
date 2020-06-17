import React, { useState, useContext } from 'react'
import Alert from './Alert';
import GithubContext from '../../context/github/githubContext'

const Search = () => {
    const [text, setText] = useState('');
    const [alert, setAlert ] = useState(false);

    const launchAlert = () => {
        setAlert(true);

        setTimeout(() => {
        setAlert(false);
        }, 4000);
    }

    const githubContext = useContext(GithubContext)
    const { searchUsers, users, clearUsers } = githubContext

    const onChange = e => {
        setText( e.target.value );
    };

    const onSubmit = e => {
      e.preventDefault();
      if (text) {
          searchUsers(text);
          setText('');
      } else {
        launchAlert();
      }
    };

    return (
        <div>
            <Alert alert={alert} />
            <form className="search" onSubmit={onSubmit}>

                <input type="text" 
                name="text" 
                className="search__box" 
                placeholder="Search Users"
                value={text}
                onChange={onChange} />

                <button type="submit" className="search__button">Search</button>
            </form>
            { users.length > 0 && (<button onClick={clearUsers}>clear</button>) }
        </div>
    )
}

export default Search;
