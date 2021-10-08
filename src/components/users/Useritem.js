import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import { Link } from "react-router-dom";

const UserItemContainer = styled.div`
  ${({ theme }) => `
    background-color: ${theme.colors.suttleBlack[1]};
    border: none;
    text-align: center;
    border-bottom: 3px solid ${theme.colors.primary.lighter};
  `}
`;

const ImageContainer = styled.div`
  ${({ theme }) => `
    background-color: ${theme.colors.primary.lighter};
    text-align: center;
    padding: 4rem 0;
    clip-path: polygon(0 0, 100% 0, 100% 80%, 0 100%);
    border-top-right-radius: 5px;
    border-top-left-radius: 5px;
  `}

  & > img {
    border-radius: 50%;
    width: 12rem;
    margin: 2rem auto;
    margin-top: 0;
  }
`;

const UserName = styled.p`
  font-size: 2rem;
  color: ${({ theme }) => theme.colors.white};
  margin-top: 1rem;
`;

const ItemLink = styled(Link)`
  ${({ theme }) => `
    text-decoration: none;
    font-size: 1.8rem;
    padding: 0.5rem 0.1rem;
    width: 8rem;
    color: ${theme.colors.white};
    border-bottom: 1px solid ${theme.colors.white};
    display: flex;
    justify-content: space-between;
    transition: all 0.2s;
    letter-spacing: 0.1rem;
    margin: 3rem auto;

    &:hover {
      transform: scale(1.01) translateY(-2px);
      outline: none;
    }
  `}
`;

const Useritem = ({ user: { login, avatar_url } }) => {
  return (
    <UserItemContainer>
      <ImageContainer>
        <img src={avatar_url} alt="user-pic" />
      </ImageContainer>
      <UserName>{login}</UserName>
      <ItemLink to={`/user/${login}`}>
        <span>More</span> <span>&rArr;</span>
      </ItemLink>
    </UserItemContainer>
  );
};

Useritem.propTypes = {
  user: PropTypes.object.isRequired,
};

export default Useritem;
