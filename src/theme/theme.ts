import { css } from "styled-components";

export const theme = {
  colors: {
    white: '#FFFFFF',
  },
  text: {
    default: '#7e828b',
    highlight: '#e2e4e9',
    white: '#FFFFFF',
  },
  background: {
    dark: '#101318',
    light: '#999ca3',
    light_hover: '#353940',
    highlight: '#181a20',
    body: '#0e1015',
  },
  border: '#181a20',
  shadow: '#07090e',
  primary: '#db8115',
  secondary: '#f3c414',
};

export const baseBox = css`
  background-color: ${({theme}) => theme.background.highlight};
  border-radius: 8px;
`;

export type AppTheme = typeof theme;
