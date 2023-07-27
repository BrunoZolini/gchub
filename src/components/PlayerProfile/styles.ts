import { CustomImage } from 'components';
import { GiWingedShield } from "react-icons/gi";
import styled from "styled-components";
import { Colors } from 'theme';

export const WrapperProfile = styled.div`
  display: flex;
  gap: 16px;
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

export const GuildName = styled.span`
  color: ${Colors.defaultText};
  font-weight: 700;
  font-size: 14px;
  margin-left: 6px;
`;
