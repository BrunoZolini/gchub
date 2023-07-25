import { Select } from 'components';
import { MOCK_CHARACTERS } from 'mocks';
import { useState } from 'react';
import Profile from '../../assets/images/profile/Undefined-Profile.png';
import * as S from './styles';

interface HomeProps {}
export const Home = ({}: HomeProps) => {
  const [orderBy, setOrderBy] = useState<string | undefined>(undefined);
  const [filter, setFilter] = useState<number | undefined>(undefined);

  const handleFilter = (value: number) => {
    setOrderBy(undefined);
    setFilter((prev) => (prev === value ? undefined : value));
  };
  const handleOrder = (value?: string) => {
    setFilter(undefined);
    setOrderBy(value);
  };

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
              value={orderBy}
              options={[
                { value: 'releaseDate', name: 'Release Date' },
                { value: 'totalAttack', name: 'Total Attack' },
              ]}
              placeHolder='Order by'
              setValue={handleOrder}
            />
          </S.WrapperOrder>
          <S.WrapperCharacters>
            {MOCK_CHARACTERS.slice(1).map((char) => (
              <S.CharImage
                selected={filter === char.id}
                src={char.profileImg}
                key={char.id}
                alt={char.name}
                size='sm'
                onClick={() => handleFilter(char.id)}
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
