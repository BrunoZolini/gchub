import { Label as RadixLabel } from '@radix-ui/react-label';
import * as Select from '@radix-ui/react-select';
import styled from 'styled-components';
import { Colors, defaultFontFamily } from 'theme';

export const Root = styled(Select.Root)``;

export const Trigger = styled(Select.Trigger)`
  ${defaultFontFamily}
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 5px;
  padding: 0 16px;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  min-width: 146px;
  height: 36px;
  gap: 12px;
  background-color: ${Colors.midnightNavy};
  color: ${Colors.white};
  border: none;
  &:hover {
    cursor: pointer;
    background-color: ${Colors.darkGunmetal};
  }
  &:focus {
    box-shadow: 0 0 0 2px ${Colors.midnightBlack};
  }
`;
export const Value = styled(Select.Value)`
  ${defaultFontFamily}
`;

export const Icon = styled(Select.Icon)``;

export const Portal = styled(Select.Portal)``;

export const Content = styled(Select.Content)`
  overflow: hidden;
  background-color: ${Colors.darkMidnightBlue};
  border-radius: 6px;
`;

export const ScrollUpButton = styled(Select.ScrollUpButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: ${Colors.midnightNavy};
  color: ${Colors.white};
  cursor: default;
`;

export const Viewport = styled(Select.Viewport)`
  padding: 5px;
`;
export const Item = styled(Select.Item)`
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  color: ${Colors.white};
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
    background-color: ${Colors.deepCharcoal};
    color: ${Colors.white};
  }
`;

export const ScrollDownButton = styled(Select.ScrollDownButton)`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 25px;
  background-color: ${Colors.midnightNavy};
  color: ${Colors.white};
  cursor: default;
`;

export const ItemText = styled(Select.ItemText)`
  ${defaultFontFamily}
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
  ${defaultFontFamily}
  height: fit-content;
  margin: auto 1rem auto 0;
  color: ${Colors.white};
  font-size: 14px;
  font-weight: 600;
`;
