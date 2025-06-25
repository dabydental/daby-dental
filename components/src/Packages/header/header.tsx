"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "hamburger-react";

export interface headerProps {
  logoUrl?: string;
  logoAlt?: string;
}

const header: React.FunctionComponent<headerProps> = ({ logoUrl, logoAlt }) => {
  const [isOpen, setOpen] = useState(false);

  const showMobileMenus = () => {
    return (
      <div className="header-show_mobile_menu">
        <ul>
          <li>
            <a href="" className="header-show_mobile_menu-nav">
              test
            </a>
          </li>
          <li>
            <a href="" className="header-show_mobile_menu-nav">
              test
            </a>
          </li>
          <li>
            <a href="" className="header-show_mobile_menu-nav">
              test
            </a>
          </li>
        </ul>
      </div>
    );
  };

  return (
    <Stylewrapper className={`header-stylewrapper ${isOpen ? "opened" : ""}`}>
      <div className="header">
        <div className="header-logo">
          <img src={logoUrl} alt={logoAlt} height="60px" />
        </div>
        <div className="header-hamburger ">
          <Hamburger toggled={isOpen} toggle={setOpen} color="var(--white)" />
        </div>
      </div>
      {isOpen && showMobileMenus()}
    </Stylewrapper>
  );
};

const Stylewrapper = styled.div`
  &.header-stylewrapper {
    background-color: var(--black);
    height: 100px;
    width: 100%;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 15px;
    }

    .header-show_mobile_menu {
      background-color: var(--black);
      height: auto;
      width: 100%;
      text-align: center;
      padding-bottom: 30px;

      ul {
        padding: unset;
      }

      li {
        padding-top: 20px;
      }

      .header-show_mobile_menu-nav {
        color: var(--white);
        text-decoration: none;
        font-size: 24px;
        font-family: var(--font-daby-dental-disclaimer);
        font-weight: 600;
      }
    }
  }

  &.header-stylewrapper.opened {
    height: 150px;
  }
`;

export { header };
