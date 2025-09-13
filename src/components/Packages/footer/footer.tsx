import React from "react";
import styled from "styled-components";
import { instagramIcon } from "../../assets/instagram_logo";
import { facebookIcon } from "../../assets/facebook_logo";
import { whatsappIcon } from "../../assets/whatsapp_logo";

export interface locationProps {
  city?: string;
  street?: string;
  phone?: string;
}
export interface footerProps {
  logoAlt?: string;
  logoUrl?: string;
  location?: locationProps[];
  copyright?: string;
}

const footer: React.FunctionComponent<footerProps> = ({
  logoAlt,
  logoUrl,
  location,
  copyright,
}) => {
  return (
    <Stylewrapper className="footer">
      <div className="footer-logo">
        <img src={logoUrl} alt={logoAlt} height="75px" />
      </div>

      <div className="footer-contents">
        <div className="footer-socialmedia">
          <div className="footer-socialmedia-facebook">
            <a
              href="https://www.facebook.com/share/1AA1NKzBnz/?mibextid=wwXIfr"
              aria-label="facebook"
            >
              {facebookIcon()}
            </a>
          </div>
          <div className="footer-socialmedia-instagram">
            <a
              href="https://www.instagram.com/daby.dental?igsh=ZTRraHRwYmM2bHZn"
              aria-label="instagram"
            >
              {instagramIcon()}
            </a>
          </div>
          <div className="footer-socialmedia-whatsapp">
            <a href="https://wa.me/+23057600232" aria-label="whatsapp">
              {whatsappIcon()}
            </a>
          </div>
        </div>

        <div className="footer-location">
          {location?.map((item) => (
            <div className="footer-location-info">
              <h3>{item?.city}</h3>
              <p>
                {item?.street?.includes(",")
                  ? item.street.split(",").map((part, index, arr) => (
                      <React.Fragment key={index}>
                        {part.trim()}
                        {index < arr.length - 1 && <br />}
                      </React.Fragment>
                    ))
                  : item?.street}
              </p>
              <p>{item?.phone}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="footer-copyright">{copyright}</div>
    </Stylewrapper>
  );
};

const Stylewrapper = styled.div`
  &.footer {
    width: 100%;
    height: 400px;
    background-color: var(--black);

    @media (min-width: 992px) {
      height: 350px;
    }

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

    .footer-location {
      margin-top: 50px;
      display: flex;
      justify-content: space-around;

      .footer-location-info {
        border-left: 2px solid var(--white);
        @media (min-width: 992px) {
          padding-right: 50px;
        }

        h3 {
          color: var(--white);
          font-family: var(--font-daby-dental-paragraph);
          font-weight: bolder;
          margin: unset;
          padding-left: 10px;
        }

        p {
          color: var(--white);
          font-family: var(--font-daby-dental-paragraph);
          margin: unset;
          padding-left: 10px;
          font-size: 14px;
        }
      }
    }

    .footer-copyright {
      color: var(--white);
      text-align: center;
      font-family: var(--font-daby-dental-paragraph);
      font-size: 12px;
      padding-top: 55px;
    }

    .footer-contents {
      @media (min-width: 992px) {
        display: flex;
        justify-content: space-around;
        flex-direction: row-reverse;
        align-items: end;
      }
    }
  }
`;

export { footer };
