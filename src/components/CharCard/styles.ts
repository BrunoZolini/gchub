import styled from 'styled-components';

export const CharCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: ${({ theme }) => theme.background.highlight};
  padding: 16px;
  min-height: 100px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }
`;

export const CharName = styled.div`
  font-size: 18px;
  font-weight: 600;
  margin-left: 16px;
  margin-top: 4px;
`;

export const WrapperCharacter = styled.div`
  display: flex;
`;

export const WrapperItems = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;

export const WrapperTotalAttack = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 12px;
`;

export const TotalAttackTitle = styled.span`
  font-size: 14px;
  font-weight: 600;
`;

export const TotalAttackValue = styled.span`
  font-size: 16px;
  font-weight: 600;
`;
