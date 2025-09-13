/** @type { import('@storybook/react').Preview } */
import '../src/styles/typography.css'
import { FontStyles } from "../src/styles/fontStyles";
import { createGlobalStyle } from "styled-components";
import { color } from "../src/styles/color";

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