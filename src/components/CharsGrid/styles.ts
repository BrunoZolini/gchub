import { CustomImage } from 'components';
import styled, { css } from 'styled-components';

export const Container = styled.div<{ imgGap: string }>`
  display: flex;
  flex-wrap: wrap;
  gap: ${(props) => props.imgGap};
`;

const selectedChar = css`
  background-color: ${({ theme }) => theme.primary};
`;

const clickableChar = css`
  &:hover {
    cursor: pointer;
  }
`;

export const CharImage = styled(CustomImage)<{ selected: boolean; clickable?: boolean }>`
  ${(props) => props.selected && selectedChar}
  ${(props) => props.clickable && clickableChar}
  box-sizing: border-box;
  border-radius: 4px;
  padding: 2px;
`;
