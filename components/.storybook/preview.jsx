/** @type { import('@storybook/react').Preview } */

import { FontStyles } from "../public/styles/fontStyles";
import { typoStyles } from "../public/styles/typography";
import { createGlobalStyle } from "styled-components";

const preview = {
  parameters: {
    actions: { argTypesRegex: "^on[A-Z].*" },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
    },
    layout: "fullscreen",
  },
};

const SiteGlobalStyle = createGlobalStyle`
  ${FontStyles}
  ${typoStyles}
`;

const styles = (Story, context) => {
  return (
    <>
      <SiteGlobalStyle />
      <Story {...context} />
    </>
  );
};

export const decorators = [styles];
export default preview;