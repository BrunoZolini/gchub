import { Link as RouterLink } from 'react-router-dom';
import styled from 'styled-components';

export const Container = styled.div`
  background-color: #101318;
  border-right: 1px solid #181a20;
  color: #7f828b;
  display: flex;
  flex-direction: column;
  width: 72px;
  padding: 12px 0;
  transition: width 300ms;
  position: fixed;
  height: 100%;
  h1 {
    display: none;
  }
  p {
    display: none;
  }
  &:hover {
    width: 240px;
    align-items: flex-start;
    h1 {
      display: inline-block;
    }
    p {
      display: inline-block;
    }
  }
`;

export const Logo = styled.img`
  width: 40px;
`;

export const WrapperLinkLogo = styled.div`
  position: relative;
  margin-left: 4px;
  margin-bottom: 4px;
  display: flex;
  align-items: center;
  gap: 10px;
`;
export const WrapperLinkItems = styled.div`
  position: relative;
  margin-left: 12px;
  display: flex;
  align-items: center;
`;

export const Title = styled.h1`
  font-weight: 700;
  font-size: 20px;
  color: #ffffff;
  position: absolute;
  width: max-content;
  left: 48px;
`;

export const Text = styled.p`
  width: max-content;
  font-weight: 600;
  font-size: 14px;
  position: absolute;
  left: 40px;
`;

export const Link = styled(RouterLink)`
  margin-bottom: 10px;
  color: #7e828b;
  text-decoration: none;
  padding: 8px 12px;
  &:hover {
    cursor: pointer;
    color: #e2e4e9bf;
  }
`;
