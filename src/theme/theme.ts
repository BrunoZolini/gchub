import { css } from 'styled-components';
import { Colors } from 'theme';

export const theme = {
  colors: {
    transparent: "#00000000",
    white: "#FFFFFF",
    lightBlueGrayTransparent: "#e2e4e926",
    lightBlueGray: "#e2e4e9",
    mistyIndigo: "#484b5126",
    goldenrod: "#f3c414",
    pumpkinOrange: "#db8115",
    slateBlueGray: "#999ca3",
    slateGray: "#7e828b",
    midnightNavy: "#272a30",
    nightSteelBlue: "#272a3040",
    darkMidnightNavy: "#0e1015",
    deepCharcoal: "#181a20",
    darkGunmetal: "#353940",
    darkMidnightBlue: "#07090e",
    midnightBlack: "#101318"
  },
} as const;

export const defaultFontFamily = css`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
`;

export const baseBox = css`
  background-color: ${Colors.deepCharcoal};
  border-radius: 8px;
`;

export type AppTheme = typeof theme;
