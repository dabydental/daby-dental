/** @type { import('@storybook/react').Preview } */

import { FontStyles } from "../public/styles/fontStyles";
import { typoStyles } from "../public/styles/typography";
import { createGlobalStyle } from "styled-components";
import { color } from "../public/styles/color";

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
  ${color}
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