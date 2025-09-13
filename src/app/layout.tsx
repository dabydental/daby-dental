import type { Metadata } from "next";
import "../styles/typography.css";
import "../styles/globalStyles.css";
import GlobalStyleWrapper from "./hoc/GlobalStyleWrapper";
import StyledComponentsRegistry from "../app/hoc/registry";
import { HeaderHoc } from "./hoc/header";
import { FooterHoc } from "./hoc/footer";

export const metadata: Metadata = {
  title: "Daby dental",
  description: "Created by next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <StyledComponentsRegistry>
          <GlobalStyleWrapper>
            <div className="page-container">
              <HeaderHoc />
              <main className="content">{children}</main>
              <FooterHoc />
            </div>
          </GlobalStyleWrapper>
        </StyledComponentsRegistry>
      </body>
    </html>
  );
}
