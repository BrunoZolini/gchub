import styled from 'styled-components';
import { Colors } from 'theme';

export const CharCardContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  justify-content: space-between;
  background-color: ${Colors.deepCharcoal};
  padding: 16px;
  min-height: 100px;
  width: 100%;
  &:hover {
    cursor: pointer;
  }

  &:first-child {
    border-top-left-radius: 8px;
    border-top-right-radius: 8px;
  }
  &:last-child {
    border-bottom-left-radius: 8px;
    border-bottom-right-radius: 8px;
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
  min-width: 164px;
`;

export const WrapperItems = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  min-width: 190px;
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
