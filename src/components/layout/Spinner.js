import React, { Fragment } from "react";
import styled from "styled-components";
import spinner from "./spinner.png";

const SpinnerImg = styled.img`
  height: 6rem;
  margin: 10rem auto;
  display: block;
  animation: rotating 1s infinite linear;

  @keyframes rotating {
    from {
      transform: rotate(0);
    }
    to {
      transform: rotate(-360deg);
    }
  }
`;

const Spinner = () => {
  return (
    <Fragment>
      <SpinnerImg src={spinner} alt="" />
    </Fragment>
  );
};

export default Spinner;
