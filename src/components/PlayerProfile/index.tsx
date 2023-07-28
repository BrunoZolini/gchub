import { PlayerInfo } from 'mocks';
import { useEffect, useState } from 'react';
import { getPlayerInfo } from 'services';
import * as S from './styles';

interface PlayerProfileProps {}
export const PlayerProfile = ({}: PlayerProfileProps) => {
  const [playerInfo, setPlayerInfo] = useState({} as PlayerInfo);
  const [editingStatus, setEditingStatus] = useState<'hoverIn' | 'hoverOut' | 'editing'>('hoverOut');

  useEffect(() => {
    setPlayerInfo(getPlayerInfo());
  }, []);

  const handleMouseOver = () => {
    if (editingStatus !== 'editing') setEditingStatus('hoverIn');
  };

  const handleMouseOut = () => {
    if (editingStatus !== 'editing') setEditingStatus('hoverOut');
  };

  const handleClick = () => {
    if (editingStatus !== 'editing') setEditingStatus('editing');
  };

  console.log(editingStatus);
  return (
    <S.WrapperProfile
      isEditing={editingStatus === 'editing'}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <S.WrapperImg>
        <S.ProfileImg src={playerInfo.profileImg} alt='profile-img' size='md' type='rounded' />
        <S.ChangeImage></S.ChangeImage>
        <S.ChaserLvl>{playerInfo.chaserLevel}</S.ChaserLvl>
      </S.WrapperImg>
      <S.WrapperText>
        <S.Name>{playerInfo.name}</S.Name>
        <S.WrapperGuild>
          <S.GuildIcon size={24} />
          <S.GuildName>{playerInfo?.guild}</S.GuildName>
        </S.WrapperGuild>
      </S.WrapperText>
      {editingStatus !== 'hoverOut' && (
        <S.WrapperEditingIcons>
          {editingStatus === 'hoverIn' && <S.PencilIcon size={20} />}
          {editingStatus === 'editing' && <S.CheckIcon onClick={() => setEditingStatus('hoverIn')} size={20} />}
        </S.WrapperEditingIcons>
      )}
    </S.WrapperProfile>
  );
};
