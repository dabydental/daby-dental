"use client";
import Link from "next/link";
import styled from "styled-components";
const NotFound = () => {
  return (
    <Stylewrapper className="custom-404">
      <div>
        <h1>404 - Page Not Found</h1>
        <p>The page you are looking for does not exist.</p>
        <Link href="/">Go back to Home</Link>
      </div>
    </Stylewrapper>
  );
};

const Stylewrapper = styled.div`
  &.custom-404 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: var(--white);
    font-family: var(--font-daby-dental-info);
    min-height: 75vh;

    div {
      background-color: var(--black);
      width: 60%;
      padding: 50px;
      border-radius: 20px;
      @media (min-width: 992px) {
        width: 90%;
      }
    }

    a {
      color: var(--white);
      font-weight: bold;
    }
  }
`;

export default NotFound;
