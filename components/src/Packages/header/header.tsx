"use client";
import React from "react";
import styled from "styled-components";

export interface headerProps {
  logoUrl?: string;
  logoAlt?: string;
}

const header: React.FunctionComponent<headerProps> = ({
  logoUrl,
  logoAlt
}) => {
  return (
    <Stylewrapper className="header">
     <img src={logoUrl} alt={logoAlt}/>
    </Stylewrapper>
  );
};

const Stylewrapper = styled.div`
  &.header {
    background-color: var(--black);
    height: 120px;
    width: 100%;
  }
`;

export { header };
