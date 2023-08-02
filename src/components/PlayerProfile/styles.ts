import { CustomImage } from 'components';
import { AiFillCloseCircle } from 'react-icons/ai';
import { GiCheckMark, GiPencil, GiWingedShield } from 'react-icons/gi';
import styled from 'styled-components';
import { Colors, defaultFontFamily } from 'theme';


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

export const HoverImage = styled.span`
  display: flex;
  position: absolute;
  top: 4px;
  color: ${Colors.darkMidnightNavy};
  background-color: ${Colors.lightBlueGrayTransparent};
  border-radius: 10px;
  font-weight: 700;
  font-size: 14px;
  width: 90%;
  height: 82%;
  text-align: center;
  align-items: center;
  &:hover {
    cursor: pointer;
  }
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

export const ChaserLvlInput = styled.input`
  ${defaultFontFamily}
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
  }
  text-align: center;
  outline: none;
  border: 1px solid ${Colors.midnightNavy};
  background-color: ${Colors.deepNightShade};
  color: ${Colors.lightBlueGray};
  border-radius: 4px;
  font-size: 12px;
  font-weight: 500;
  padding: 2px 8px;
  position: absolute;
  bottom: -4px;
  width: 20px;
  &:hover {
    border-color: ${Colors.mistyIndigo};
  }
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

export const NameInput = styled.input`
  ${defaultFontFamily}
  outline: none;
  border: 1px solid ${Colors.midnightNavy};
  background-color: ${Colors.deepNightShade};
  color: ${Colors.white};
  border-radius: 4px;
  font-size: 16px;
  font-weight: 700;
  padding: 2px 8px;
  width: 100px;
  &:hover {
    border-color: ${Colors.mistyIndigo};
  }
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

export const GuildNameInput = styled.input`
  ${defaultFontFamily}
  outline: none;
  border: 1px solid ${Colors.midnightNavy};
  background-color: ${Colors.deepNightShade};
  color: ${Colors.defaultText};
  border-radius: 4px;
  font-size: 14px;
  font-weight: 700;
  padding: 2px 8px;
  width: 70px;
  margin-left: 6px;
  &:hover {
    border-color: ${Colors.mistyIndigo};
  }
`;

export const WrapperEditingIcons = styled.div`
  background-color: ${Colors.darkGunmetal};
  height: min-content;
  width: min-content;
  padding: 4px 4px 2px 4px;
  border-radius: 40px;
`;

export const WrapperCharsImages = styled.div`
  top: -10px;
  left: -10px;
  position: absolute;
  width: 340px;
  z-index: 16;
  display: flex;
  gap: 10px;
  flex-direction: column;
  background-color: ${Colors.midnightNavy};
  padding: 16px;
  border-radius: 10px;
`;

export const WrapperChars = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
`;

export const ChangeImgTitle = styled.span`
  ${defaultFontFamily}
  font-weight: 700;
`;

export const CloseIcon = styled(AiFillCloseCircle)`
  &:hover {
    cursor: pointer;
    fill: ${Colors.lightBlueGray};
  }
`
