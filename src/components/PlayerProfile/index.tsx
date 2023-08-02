import { CharsGrid } from 'components/CharsGrid';
import { MOCK_CHARACTERS, PlayerInfo } from 'mocks';
import { useEffect, useState } from 'react';
import { getPlayerInfo, updatePlayerInfo } from 'services';

import { onlyPositiveNumbers } from 'utils';
import * as S from './styles';

interface PlayerProfileProps {}
export const PlayerProfile = ({}: PlayerProfileProps) => {
  const [playerInfo, setPlayerInfo] = useState<PlayerInfo>();
  const [editingStatus, setEditingStatus] = useState<'hoverIn' | 'hoverOut' | 'editing'>('hoverOut');
  const [hoverImage, setHoverImage] = useState(false);
  const [charsImagesOpen, setCharsImagesOpen] = useState(false);

  useEffect(() => {
    setPlayerInfo(getPlayerInfo());
  }, []);

  const isEditing = editingStatus === 'editing';

  const handleMouseOver = () => !isEditing && setEditingStatus('hoverIn');

  const handleMouseOut = () => !isEditing && setEditingStatus('hoverOut');

  const handleClick = () => !isEditing && setEditingStatus('editing');

  const handleSave = () => {
    setEditingStatus('hoverIn');
    if (!playerInfo) return;
    updatePlayerInfo(playerInfo);
  };

  const editProfile = (key: keyof PlayerInfo, value: string) => {
    setPlayerInfo((prev) => ({ ...(prev ?? ({} as PlayerInfo)), [key]: value }));
  };

  const handleCloseSelectImage = () => {
    setCharsImagesOpen(false);
    setHoverImage(false);
  };

  const handleSelectImage = (id: number) => {
    const selectedImage = MOCK_CHARACTERS.find((char) => char.id === id)?.profileImg;
    if (!selectedImage) return handleCloseSelectImage();
    editProfile('profileImg', selectedImage);
    handleCloseSelectImage();
  };

  if (!playerInfo) return <div>Loading</div>;

  return (
    <S.WrapperProfile
      $isEditing={isEditing}
      onMouseOver={handleMouseOver}
      onMouseOut={handleMouseOut}
      onClick={handleClick}
    >
      <S.WrapperImg onMouseOver={() => setHoverImage(true)} onMouseOut={() => setHoverImage(false)}>
        <S.ProfileImg src={playerInfo.profileImg} alt='profile-img' size='md' type='rounded' />

        {isEditing && hoverImage && <S.HoverImage onClick={() => setCharsImagesOpen(true)}>Change Image</S.HoverImage>}
        {isEditing && charsImagesOpen && (
          <S.WrapperCharsImages>
            <S.WrapperChars>
              <S.ChangeImgTitle>Select your profile image</S.ChangeImgTitle>
              <S.CloseIcon aria-label='close' size={20} onClick={handleCloseSelectImage} />
            </S.WrapperChars>
            <CharsGrid
              characters={MOCK_CHARACTERS}
              handleClick={handleSelectImage}
              imgSize='sm'
              imgGap='4px'
              imgType='rounded'
            />
          </S.WrapperCharsImages>
        )}
        {!isEditing && <S.ChaserLvl title={`C-Lv. ${playerInfo.chaserLevel}`}>{playerInfo.chaserLevel}</S.ChaserLvl>}
        {isEditing && (
          <S.ChaserLvlInput
            type='text'
            value={playerInfo.chaserLevel}
            maxLength={3}
            onChange={(e) => editProfile('chaserLevel', onlyPositiveNumbers(e.target.value))}
          />
        )}
      </S.WrapperImg>
      <S.WrapperText>
        {!isEditing && <S.Name>{playerInfo.name}</S.Name>}
        {isEditing && (
          <S.NameInput type='text' value={playerInfo.name} onChange={(e) => editProfile('name', e.target.value)} />
        )}
        <S.WrapperGuild>
          <S.GuildIcon size={24} />
          {!isEditing && <S.GuildName>{playerInfo.guild}</S.GuildName>}
          {isEditing && (
            <S.GuildNameInput
              type='text'
              value={playerInfo.guild}
              onChange={(e) => editProfile('guild', e.target.value)}
            />
          )}
        </S.WrapperGuild>
      </S.WrapperText>
      {editingStatus !== 'hoverOut' && (
        <S.WrapperEditingIcons>
          {editingStatus === 'hoverIn' && <S.PencilIcon size={20} />}
          {isEditing && <S.CheckIcon onClick={handleSave} size={20} />}
        </S.WrapperEditingIcons>
      )}
    </S.WrapperProfile>
  );
};
