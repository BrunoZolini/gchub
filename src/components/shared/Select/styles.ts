import { Label as RadixLabel } from '@radix-ui/react-label';
import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';

export const Root = styled(Select.Root)``;

export const Trigger = styled(Select.Trigger)`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 600;
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  line-height: 1;
  min-width: 120px;
  height: 36px;
  gap: 12px;
  background-color: ${({ theme }) => theme.background.select};
  color: ${({ theme }) => theme.text.white};
  border: none;
  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.background.select_hover};
  }
  &:focus {
    box-shadow: 0 0 0 2px black;
  }
`;
export const Value = styled(Select.Value)`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
`;

export const Icon = styled(Select.Icon)``;

export const Portal = styled(Select.Portal)``;

export const Content = styled(Select.Content)`
  overflow: hidden;
  background-color: ${({ theme }) => theme.background.select_content};
  border-radius: 6px;
`;

export const ScrollUpButton = styled(Select.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: ${({ theme }) => theme.background.select};
  color: ${({ theme }) => theme.text.white};
  cursor: default;
`;

export const Viewport = styled(Select.Viewport)`
  padding: 5px;
`;
export const Item = styled(Select.Item)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${({ theme }) => theme.text.white};
  border-radius: 3px;
  display: flex;
  align-items: center;
  height: 36px;
  padding: 0 16px;
  position: relative;
  user-select: none;
  width: 140px;
  &[data-disabled] {
    color: grey;
    pointer-events: none;
  }
  &[data-highlighted] {
    outline: none;
    background-color: ${({ theme }) => theme.background.highlight};
    color: ${({ theme }) => theme.text.white};
  }
`;

export const ScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: ${({ theme }) => theme.background.select};
  color: ${({ theme }) => theme.text.white};
  cursor: default;
`;

export const ItemText = styled(Select.ItemText)`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
`;

export const ItemIndicator = styled(Select.ItemIndicator)`
  position: absolute;
  right: 16px;
  width: 25px;
  display: inline-flex;
  align-items: center;
  justify-content: center;
`;

export const Label = styled(RadixLabel)`
  font-family: 'Inter', Arial, Helvetica, sans-serif;
  height: fit-content;
  margin: auto 1rem auto 0;
  font-size: 12px;
  color: ${({ theme }) => theme.text.white};
  font-size: 14px;
  font-weight: 600;
`;
