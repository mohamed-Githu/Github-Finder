import React, { useState, useContext } from 'react'
import Alert from './Alert';
import GithubContext from '../../context/github/githubContext'
import icon from './search-icon.png'

const Search = () => {
    const [text, setText] = useState('');
    const [alert, setAlert ] = useState(false);

    const launchAlert = () => {
        setAlert(true);

        setTimeout(() => {
        setAlert(false);
        }, 5000);
    }

    const githubContext = useContext(GithubContext)
    const { searchUsers } = githubContext

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
            { alert &&  <Alert alert={alert} />}
            <form className="search" onSubmit={onSubmit}>

                <input type="text" 
                name="text" 
                className="search__input" 
                placeholder="Search Users"
                value={text}
                onChange={onChange} />

                <button type="submit" className="search__button">
                    <img src={ icon } alt="search icon" className="search-icon"/>
                </button>
            </form>
        </div>
    )
}

export default Search;
