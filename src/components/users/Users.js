import React, { useContext } from "react";
import styled from "styled-components";
import Spinner from "../layout/Spinner";
import Useritem from "./Useritem";
import GithubContext from "../../context/github/githubContext";

const UsersContainer = styled.div`
  padding: 3rem 6rem;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: min-content;
  grid-row-gap: 3rem;
  grid-column-gap: 8rem;

  @media only screen and (max-width: 59.375em) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 40.625em) {
    grid-template-columns: repeat(1, 1fr);
  }

  @media only screen and (max-width: 26.25em) {
    padding: 3rem 2rem;
  }
`;

const ClearButton = styled.button`
  grid-column: 1 / -1;
  font-size: 1.5rem;
  padding: 1rem;
  text-transform: uppercase;
  cursor: pointer;
`;

const Users = () => {
  const githubContext = useContext(GithubContext);
  const { loading, users, clearUsers } = githubContext;

  if (loading) {
    return <Spinner />;
  } else {
    return (
      <UsersContainer>
        {users.length > 0 && (
          <ClearButton onClick={clearUsers}>clear list</ClearButton>
        )}

        {users.map((user) => (
          <Useritem user={user} key={user.id} />
        ))}
      </UsersContainer>
    );
  }
};

export default Users;
