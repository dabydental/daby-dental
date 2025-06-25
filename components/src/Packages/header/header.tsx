"use client";
import React, { useState } from "react";
import styled from "styled-components";
import Hamburger from "hamburger-react";

export interface headerNavProps {
  navName?: string;
  navLink?: string;
  newTab?: boolean;
}
export interface headerProps {
  logoUrl?: string;
  logoAlt?: string;
  navProps?: headerNavProps[];
}

const header: React.FunctionComponent<headerProps> = ({
  logoUrl,
  logoAlt,
  navProps,
}) => {
  const [isOpen, setOpen] = useState(false);

  return (
    <Stylewrapper className={`header-stylewrapper ${isOpen ? "opened" : ""}`}>
      <div className="header">
        <div className="header-logo">
          <img src={logoUrl} alt={logoAlt} height="60px" />
        </div>
        <div className="header-hamburger ">
          <Hamburger
            toggled={isOpen}
            toggle={setOpen}
            color="var(--white)"
            label="Show menu"
          />
        </div>
      </div>
      <div
        className={`header-show_mobile_menu ${
          isOpen ? "expanded" : "collapsed"
        }`}
      >
        <ul>
          {navProps?.map((item, index) => (
            <li key={index}>
              <a
                href={item.navLink}
                className="header-show_mobile_menu-nav"
                target={item.newTab ? "_blank" : "_self"}
              >
                {item.navName}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </Stylewrapper>
  );
};

const Stylewrapper = styled.div`
  &.header-stylewrapper {
    background-color: var(--black);
    height: auto;
    width: 100%;
    .header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 20px 15px;
    }

    .header-show_mobile_menu {
      background-color: var(--black);
      overflow: hidden;
      width: 100%;
      text-align: center;
      padding-bottom: 0;
      max-height: 0;
      transition: max-height 0.5s ease, padding 0.5s ease;

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

    .header-show_mobile_menu.expanded {
      max-height: 500px;
      padding-bottom: 30px;
    }
  }
`;

export { header };
