import React, { useState, useContext } from "react";
import Alert from "./Alert";
import GithubContext from "../../context/github/githubContext";
import styled from "styled-components";

const SearchForm = styled.form`
  ${({ theme }) => `
    max-width: 95%;
    margin: 0 auto;
    margin-top: 2rem;

    @media only screen and (max-width: 26.25em) {
      margin: 2rem;
      max-width: 100%;
    }

    & > input {
      padding: 1.5rem 2rem;
      font-size: 1.5rem;
      border: none;
      border-radius: 2px;
      background-color: ${theme.colors.grey.ultraSuttle};
      box-shadow: 0 1rem 2rem ${theme.colors.suttleBlack[2]};
      border-bottom: 3px solid transparent;
      width: 100%;
      box-sizing: border-box;
      border-bottom: 3px solid ${theme.colors.white};
      color: ${theme.colors.grey.dark};
      outline: none;
      
      &::placeholder {
        color: ${theme.colors.white};
        opacity: .5;
      }
    }
  `}
`;

const Search = () => {
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);

  const launchAlert = () => {
    setAlert(true);

    setTimeout(() => {
      setAlert(false);
    }, 5000);
  };

  const githubContext = useContext(GithubContext);
  const { searchUsers } = githubContext;

  const onChange = (e) => {
    setText(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    if (text) {
      searchUsers(text);
      setText("");
    } else {
      launchAlert();
    }
  };

  return (
    <div>
      {alert && <Alert alert={alert} />}
      <SearchForm onSubmit={onSubmit}>
        <input
          type="text"
          name="text"
          placeholder="Search Users"
          value={text}
          onChange={onChange}
        />
      </SearchForm>
    </div>
  );
};

export default Search;
