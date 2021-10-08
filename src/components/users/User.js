import React, { useEffect, useContext } from "react";
import Spinner from "../layout/Spinner";
import Repos from "../repos/Repos";
import { Link } from "react-router-dom";
import GithubContext from "../../context/github/githubContext";
import styled from "styled-components";

const UserContainer = styled.div`
  max-width: 40rem;
  margin: 3rem auto;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 2rem;
  border-radius: 5px;
  box-sizing: border-box;
`;

const ClearButtonContainer = styled.div`
  margin-top: 2rem;
  display: flex;
  justify-content: center;
  box-sizing: border-box;

  & > button {
    width: 95%;
    max-width: 40rem;
    font-size: 1.5rem;
    padding: 1rem;
    text-transform: uppercase;
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.white};
    border: none;
    border-radius: 5px;
    outline: none;

    & > a {
      text-decoration: none;
      outline: none;
      color: ${({ theme }) => theme.colors.primary.dark};
    }
  }
`;

const ItemContent = styled.div`
  text-align: left;
  color: ${({ theme }) => theme.colors.primary.lighter};
  font-size: 1.5rem;
  display: flex;
  flex-direction: column;

  & > img {
    margin-bottom: 2rem;
  }

  & > h1 {
    margin: 1rem auto;
    font-weight: 900;
    font-size: 1.8rem;
    text-align: center;
  }
`;

const User = ({ match }) => {
  const githubContext = useContext(GithubContext);
  const { user, loading, getUser, getUserRepos, repos, reposLoading } =
    githubContext;

  useEffect(() => {
    getUser(match.params.login);
    getUserRepos(match.params.login);
    // eslint-disable-next-line
  }, []);

  const { avatar_url, login, html_url, following, followers, public_repos } =
    user;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <>
        <ClearButtonContainer>
          <button>
            <Link to="/">Back to search</Link>
          </button>
        </ClearButtonContainer>
        <UserContainer>
          <ItemContent>
            <img src={avatar_url} alt="user-pic" className="user-item__pic" />
            <div>
              <div>
                <strong className="bold">Name: </strong>
                {login}
              </div>
              <div>
                <strong className="bold">URL: </strong>
                <a href={html_url} target="_blank" rel="noopener noreferrer">
                  {html_url}
                </a>
              </div>
              <div>
                <strong className="bold">Following: </strong>
                {following}
              </div>
              <div>
                <strong className="bold">Followers: </strong>
                {followers}
              </div>
              <div>
                <strong className="bold">Public Repos: </strong>
                {public_repos}
              </div>
            </div>
            <h1>Repos</h1>
            <div className="repos">
              {!reposLoading && <Repos repos={repos} />}
              {reposLoading && <Spinner />}
            </div>
          </ItemContent>
        </UserContainer>
      </>
    );
  }
};

export default User;
