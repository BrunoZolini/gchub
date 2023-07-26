import styled, { css } from 'styled-components';

interface ImgProps {
  type: 'square' | 'circle' | 'rounded';
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const sizeSM = css`
  width: 40px;
  height: 30px;
`;
const sizeMD = css`
  width: 75px;
  height: 56px;
`;
const sizeLG = css`
  width: 100px;
  height: 74px;
`;

const sizeXL = css`
  width: 160px;
  height: 118px;
`;

const sizes = {
  sm: sizeSM,
  md: sizeMD,
  lg: sizeLG,
  xl: sizeXL,
};

const types = {
  square: '0px',
  circle: '999px',
  rounded: '8px',
};

export const Img = styled.img<ImgProps>`
  ${(props) => sizes[props.size]}
  border-radius: ${({ type }) => types[type]};
`;
