import styled from 'styled-components';

export const Container = styled.main`
  display: flex;
  width: 100%;
  height: 100%;
  background: #474a52;
  color: #e2e4e9;
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
