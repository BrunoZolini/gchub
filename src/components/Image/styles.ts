import styled from 'styled-components';

interface ImgProps {
  type: 'square' | 'circle' | 'rounded';
  size: 'sm' | 'md' | 'lg' | 'xl';
}

const sizes = {
  sm: '20px',
  md: '40px',
  lg: '80px',
  xl: '160px',
};

const types = {
  square: '0px',
  circle: '999px',
  rounded: '8px',
};

export const Img = styled.img<ImgProps>`
  width: ${({ size }) => sizes[size]};
  border-radius: ${({ type }) => types[type]};
`;
