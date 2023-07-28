import { CustomImage } from 'components';
import { GiCheckMark, GiPencil, GiWingedShield } from 'react-icons/gi';
import styled from 'styled-components';
import { Colors } from 'theme';

export const WrapperProfile = styled.div<{ isEditing: boolean }>`
  display: flex;
  gap: 16px;
  width: min-content;
  &:hover {
    cursor: ${(props) => (!props.isEditing ? 'pointer' : 'auto')};
  }
`;

export const WrapperImg = styled.div`
  display: flex;
  justify-content: center;
  position: relative;
  padding-bottom: 6px;
`;

export const ProfileImg = styled(CustomImage)`
  padding: 1px;
  border: 2px solid ${Colors.midnightNavy};
`;

export const ChaserLvl = styled.span`
  background-color: ${Colors.darkMidnightNavy};
  border-radius: 40px;
  font-size: 12px;
  font-weight: 700;
  padding: 2px 8px;
  position: absolute;
  bottom: 0;
`;

export const WrapperText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 6px;
`;

export const Name = styled.span`
  color: ${Colors.lightBlueGray};
  font-weight: 700;
  font-size: 24px;
`;

export const WrapperGuild = styled.div`
  display: flex;
  align-items: center;
`;

export const GuildIcon = styled(GiWingedShield)`
  fill: ${Colors.goldenrod};
`;
export const PencilIcon = styled(GiPencil)`
  fill: ${Colors.slateGray};
`;
export const CheckIcon = styled(GiCheckMark)`
  fill: ${Colors.slateGray};
  cursor: pointer;
`;

export const GuildName = styled.span`
  color: ${Colors.defaultText};
  font-weight: 700;
  font-size: 14px;
  margin-left: 6px;
`;

export const WrapperEditingIcons = styled.div`
  background-color: ${Colors.darkGunmetal};
  height: min-content;
  width: min-content;
  padding: 4px 4px 2px 4px;
  border-radius: 40px;
`;

export const ChangeImage = styled.span``
