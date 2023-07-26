import styled from 'styled-components';
import { baseBox } from 'theme';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const Content = styled.div`
  box-sizing: border-box;
  min-width: 520px;
  display: flex;
  gap: 16px;
  position: relative;
`;

export const Column = styled.div`
  height: 100%;
  width: max-content;
  box-sizing: border-box;
  overflow-y: auto;
  display: flex;
  flex-direction: column;
  gap: 16px;
`;

export const WrapperFilters = styled.div`
  ${baseBox}
  display: flex;
  flex-direction: column;
  gap: 20px;
  box-sizing: border-box;
  background-color: ${({ theme }) => theme.background.highlight};
  border-radius: 8px;
  padding: 24px;
  width: 328px;
`;

export const WrapperOrder = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const WrapperPlayerChars = styled.div`
  width: 656px;
  border-radius: 8px;
  display: flex;
  flex-direction: column;
  overflow: scroll;
  overflow-x: hidden;
  height: 738px;
  gap: 2px;
  &::-webkit-scrollbar {
    width: 0;
  }
`;

export const TotalAttackTitle = styled.span<{ isFirst?: boolean }>`
  border-radius: ${(props) => (props.isFirst ? '8px 8px 0 0' : '0')};
  font-size: 14px;
  font-weight: 600;
  padding: 10px 16px;
  background-color: ${({ theme }) => theme.colors.transparent};
  background-image: linear-gradient(
    ${({ theme }) => theme.colors.transparent},
    ${({ theme }) => theme.colors.night_steel_blue}
  );
`;

export const WrapperTotalAttackImg = styled.div`
  padding: 10px 16px;
`;

export const TotalAttackSummary = styled.div`
  display: flex;
  flex-direction: column;
`;

export const WrapperTotalAttackSummary = styled.div`
  ${baseBox}
  box-sizing: border-box;
  width: 328px;
  display: flex;
  flex-direction: column;
`;
