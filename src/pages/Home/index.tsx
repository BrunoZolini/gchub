import { Select } from 'components';
import { MOCK_CHARACTERS } from 'mocks';
import { useState } from 'react';
import Profile from '../../assets/images/profile/Undefined-Profile.png';
import * as S from './styles';

interface HomeProps {}
export const Home = ({}: HomeProps) => {
  const [filter, setFilter] = useState<string>('');

  return (
    <S.Container>
      <S.Column>
        <S.WrapperProfile>
          <S.WrapperImg>
            <S.ProfileImg src={Profile} alt='profile-img' size='md' type='rounded' />
            <S.ChaserLvl>300</S.ChaserLvl>
          </S.WrapperImg>
          <S.WrapperText>
            <S.Name>UserName</S.Name>
            <S.WrapperGuild>
              <S.GuildIcon size={24} />
              <S.GuildName>GuildName</S.GuildName>
            </S.WrapperGuild>
          </S.WrapperText>
        </S.WrapperProfile>
        <S.WrapperFilters>
          <S.WrapperOrder>
            <Select
              ariaLabel='Order by'
              htmlFor='orderBy'
              options={[
                { value: 'releaseDate', name: 'Release Date' },
                { value: 'totalAttack', name: 'Total Attack' },
              ]}
              placeHolder='Order by'
              setValue={setFilter}
            />
          </S.WrapperOrder>
          <S.WrapperCharacters>
            {MOCK_CHARACTERS.slice(1).map((char) => (
              <S.CharImage
                selected={filter === char.name}
                src={char.profileImg}
                key={char.id}
                alt={char.name}
                size='sm'
                onClick={() => setFilter(prev => prev === char.name ? '' : char.name)}
              />
            ))}
          </S.WrapperCharacters>
        </S.WrapperFilters>
      </S.Column>

      <S.Column></S.Column>
      <S.Column></S.Column>
    </S.Container>
  );
};
