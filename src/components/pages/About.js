import React from "react";
import styled from "styled-components";

const AboutContainer = styled.div`
  padding: 3rem 5rem;

  & > h1 {
    font-size: 2.5rem;
    letter-spacing: 0.1rem;
    text-transform: uppercase;
    color: ${({ theme }) => theme.colors.white};
    margin: 2rem 0 1rem 0;
    font-weight: 800;
  }

  & > p {
    font-size: 2rem;
    color: ${({ theme }) => theme.colors.grey.light};
  }
`;

const About = () => {
  return (
    <AboutContainer>
      <h1>Github finder app</h1>
      <p>search user accounts from github</p>
    </AboutContainer>
  );
};

export default About;
