import React from "react";
import styled from "styled-components";

const AlertStyles = styled.div`
  margin: 1rem 0;
  background-color: rgb(161, 40, 46);
  padding: 0.5rem;
  font-size: 1.4rem;
`;

const Alert = (props) => {
  return (
    <AlertStyles>
      {props.alert && (
        <div>
          <p>Please enter something</p>
        </div>
      )}
    </AlertStyles>
  );
};

export default Alert;
