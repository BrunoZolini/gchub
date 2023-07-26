import { PlayerInfo } from 'mocks';
import { useEffect, useState } from 'react';
import { getPlayerInfo } from 'services';
import * as S from './styles';

interface PlayerProfileProps {}
export const PlayerProfile = ({}: PlayerProfileProps) => {
  const [playerInfo, setPlayerInfo] = useState({} as PlayerInfo);

  useEffect(() => {
    setPlayerInfo(getPlayerInfo());
  }, []);

  return (
    <S.WrapperProfile>
      <S.WrapperImg>
        <S.ProfileImg src={playerInfo.profileImg} alt='profile-img' size='md' type='rounded' />
        <S.ChaserLvl>{playerInfo.chaserLevel}</S.ChaserLvl>
      </S.WrapperImg>
      <S.WrapperText>
        <S.Name>{playerInfo.name}</S.Name>
        <S.WrapperGuild>
          <S.GuildIcon size={24} />
          <S.GuildName>{playerInfo?.guild}</S.GuildName>
        </S.WrapperGuild>
      </S.WrapperText>
    </S.WrapperProfile>
  );
};
