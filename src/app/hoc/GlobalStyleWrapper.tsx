"use client";

import React from "react";
import { createGlobalStyle } from "styled-components";
import { FontStyles } from "../../styles/fontStyles";
import { color } from "../../styles/color";

const SiteGlobalStyle = createGlobalStyle`
  ${FontStyles}
  ${color}
`;

const GlobalStyleWrapper = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <SiteGlobalStyle />
      {children}
    </>
  );
};

export default GlobalStyleWrapper;
