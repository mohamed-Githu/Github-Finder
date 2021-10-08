import React, { Fragment, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { Link, withRouter } from "react-router-dom";
import styled from "styled-components";

const NavContainer = styled.nav`
  ${({ theme }) => `
    overflow: hidden;
    background-color: ${theme.colors.white};
    color: ${theme.colors.primary.dark};
    font-size: 2rem;
    text-transform: uppercase;
    letter-spacing: 0.3rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    border-top-left-radius: 5px;
    border-top-right-radius: 5px;
  `}

  @media only screen and (max-width: 26.25em) {
    font-size: 1.8rem;
  }
`;

const Header = styled.h1`
  font-weight: 600;
  margin: auto;
`;

const List = styled.ul`
  display: flex;
  list-style: none;
  font-weight: 400;
  font-size: 1.4rem;
  background-color: ${({ theme }) => theme.colors.primary.dark};
  align-self: stretch;
  align-items: center;
  padding: 2rem;
  margin-right: -1px;

  @media only screen and (max-width: 26.25em) {
    flex-direction: column;
    padding: 1rem;
  }

  ${({ activeIndex, theme }) => `
    & > * {
      padding: 0 1rem;
      text-decoration: none;
      color: ${theme.colors.grey.suttle};

      @media only screen and (max-width: 26.25em) {
        margin: 0.2rem 0;
      }
    }
  
    & > *:nth-child(${activeIndex}) {
      font-weight: 800;
      color: ${theme.colors.white};
    }
  `}
`;

const Navbar = ({ title, location }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    switch (location.pathname) {
      case "/":
        setActiveIndex(1);
        break;
      case "/about":
        setActiveIndex(2);
        break;
      default:
        break;
    }
  }, [location.pathname]);

  return (
    <NavContainer>
      <Header>{title}</Header>
      <Fragment>
        <List activeIndex={activeIndex}>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
        </List>
      </Fragment>
    </NavContainer>
  );
};

export default withRouter(Navbar);

Navbar.defaultProps = {
  title: "github finder",
};

Navbar.propTypes = {
  title: PropTypes.string.isRequired,
};
