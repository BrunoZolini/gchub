import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Content = styled.div`
  width: 72px;
  position: absolute;
  pointer-events: auto;
  background-color: ${({ theme }) => theme.background.dark};
  padding: 12px 0;
  box-sizing: border-box;
  height: 100%;
  transition: width 300ms;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1);
  border-right: 1px solid ${({ theme }) => theme.background.highlight};
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: ${({ theme }) => theme.text.white};
  opacity: 0;
  transition: opacity 300ms;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition-delay: 0s, 0s;
  transition-duration: 0.3s, 0.3s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1), cubic-bezier(0.16, 1, 0.3, 1);
  margin-left: 4px;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 14px;
  opacity: 0;
  margin-left: 16px;
  transition: opacity 300ms;
  transform: matrix(1, 0, 0, 1, 0, 0);
  transition-delay: 0s, 0s;
  transition-duration: 0.3s, 0.3s;
  transition-property: opacity, transform;
  transition-timing-function: cubic-bezier(0.16, 1, 0.3, 1), cubic-bezier(0.16, 1, 0.3, 1);
`;

export const Container = styled.div`
  background-color: ${({ theme }) => theme.background.dark};
  color: ${({ theme }) => theme.text.default};
  display: flex;
  flex-direction: column;
  width: 72px;
  height: 100%;
  z-index: 15;
  &:hover {
    ${Content} {
      width: 240px;
      align-items: flex-start;
      box-shadow: ${({ theme }) => theme.shadow} 0px 0px 8px 0px;
    }
    ${Title} {
      opacity: 1;
    }
    ${Text} {
      opacity: 1;
    }
  }
`;

export const Header = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Body = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const LinkHeader = styled(RouterLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text.default};
  text-decoration: none;
  padding: 12px 12px;
  width: 240px;
  margin-left: 6px;
  margin-bottom: 16px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text.highlight};
  }
`;

export const LinkItem = styled(RouterLink)`
  display: flex;
  align-items: center;
  color: ${({ theme }) => theme.text.default};
  text-decoration: none;
  padding: 12px 12px;
  width: 240px;
  margin-left: 13px;
  margin-bottom: 8px;
  &:hover {
    cursor: pointer;
    color: ${({ theme }) => theme.text.highlight};
  }
`;
