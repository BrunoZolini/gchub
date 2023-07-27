import styled from 'styled-components';
import { Colors } from 'theme';

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  background: ${Colors.darkMidnightNavy};
  color: ${Colors.defaultText};
  position: relative;
`;

export const Content = styled.div`
  width: 100%;
  height: 100%;
  overflow-y: auto;
`;

export const Header = styled.div`
  width: 100%;
  height: 72px;
`;

export const WrapperContent = styled.div`
  box-sizing: border-box;
  justify-content: center;
  padding: 0 16px;
  display: flex;
  gap: 16px;
  width: 100%;
`;
