import React from "react";
import styled from "styled-components";

export interface buttonProps {
  buttonLabel?: string;
}

const customButton: React.FunctionComponent<buttonProps> = ({
  buttonLabel,
}) => {
  return (
    <Stylewrapper className="customButton">
      <button>{buttonLabel}</button>
    </Stylewrapper>
  );
};

const Stylewrapper = styled.div`
  &.customButton {
    button {
      background-color: teal;
      color: white;
      padding: 20px;
      border-radius: 10px;
      border: none;
    }
  }
`;

export { customButton };
