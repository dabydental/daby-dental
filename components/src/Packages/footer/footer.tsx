import React from "react";
import styled from "styled-components";
import { instagramIcon } from "../../assets/instagram_logo";
import { facebookIcon } from "../../assets/facebook_logo";
import { whatsappIcon } from "../../assets/whatsapp_logo";

export interface footerProps {
  logoAlt?: string;
  logoUrl?: string;
}

const footer: React.FunctionComponent<footerProps> = ({ logoAlt, logoUrl }) => {
  return (
    <Stylewrapper className="footer">
      <div className="footer-logo">
        <img src={logoUrl} alt={logoAlt} height="75px" />
      </div>

      <div className="footer-socialmedia">
        <div className="footer-socialmedia-facebook">
          <a href="https://www.facebook.com/share/1AA1NKzBnz/?mibextid=wwXIfr">
            {facebookIcon()}
          </a>
        </div>
        <div className="footer-socialmedia-instagram">
          <a href="https://www.instagram.com/daby.dental?igsh=ZTRraHRwYmM2bHZn">
            {instagramIcon()}
          </a>
        </div>
        <div className="footer-socialmedia-whatsapp">
          <a href="https://wa.me/+23057600232">{whatsappIcon()}</a>
        </div>
      </div>
    </Stylewrapper>
  );
};

const Stylewrapper = styled.div`
  &.footer {
    width: 100%;
    height: 400px;
    background-color: var(--black);

    .footer-logo {
      text-align: center;
      padding-top: 30px;
    }

    .footer-socialmedia {
      display: flex;
      justify-content: center;
      padding-top: 30px;

      div {
        padding: 0px 20px;
      }
    }
  }
`;

export { footer };
