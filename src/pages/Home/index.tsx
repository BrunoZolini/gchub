import { CharCard, CharsGrid, PlayerProfile, Select } from 'components';

import { MOCK_CHARACTERS, PlayerCharacter, PlayerCharacters } from 'mocks';
import { useEffect, useMemo, useState } from 'react';
import { getPlayerCharacters } from 'services/getPlayerCharacters';
import { convertNumberToK } from 'utils';
import * as S from './styles';

interface HomeProps {}
export const Home = ({}: HomeProps) => {
  const [orderBy, setOrderBy] = useState<string | undefined>('id');
  const [filter, setFilter] = useState<number | undefined>(undefined);
  const [playerChars, setPlayerChars] = useState([] as PlayerCharacters);

  useEffect(() => {
    setPlayerChars(getPlayerCharacters());
  }, []);

  const handleFilter = (value: number) => {
    setFilter((prev) => (prev === value ? undefined : value));
  };

  const handleOrder = (value?: string) => {
    setFilter(undefined);
    setOrderBy(value);
  };

  const playerCharacters = useMemo(() => {
    const filteredChar = playerChars.find((char) => char.id === filter);
    if (filteredChar) return [filteredChar];
    if (orderBy === 'totalAttack') return [...playerChars].sort((a, b) => b.totalAttack - a.totalAttack);
    return playerChars;
  }, [filter, orderBy, playerChars]);

  const playerAttackSummary = useMemo(() => {
    const arr = playerChars.reduce((acc, char) => {
      const powerGroup = Math.ceil(char.totalAttack / 100000) * 100;
      const group = acc[powerGroup];
      if (powerGroup === 0) {
        const groupZero = acc[100];
        if (!groupZero) return { ...acc, 100: [char] };
        return { ...acc, 100: [...groupZero, char] };
      }
      if (!group) return { ...acc, [powerGroup]: [char] };
      return { ...acc, [powerGroup]: [...group, char] };
    }, {} as { [key: number]: PlayerCharacter[] });

    return arr;
  }, [playerChars]);

  return (
    <S.Container>
      <PlayerProfile />
      <S.Content>
        <S.Column>
          <S.WrapperFilters>
            <S.WrapperOrder>
              <Select
                ariaLabel='Order by'
                htmlFor='orderBy'
                value={orderBy}
                options={[
                  { value: 'id', name: 'Release Date' },
                  { value: 'totalAttack', name: 'Total Attack' },
                ]}
                placeHolder='Order by'
                setValue={handleOrder}
              />
            </S.WrapperOrder>
            <CharsGrid
              characters={MOCK_CHARACTERS.slice(1)}
              selectedId={filter}
              imgGap='8px'
              imgSize='sm'
              handleClick={handleFilter}
              title='name'
            />
          </S.WrapperFilters>

          <S.WrapperTotalAttackSummary>
            {Object.keys(playerAttackSummary)
              .sort((a, b) => Number(b) - Number(a))
              .map((attackGroup, index) => (
                <S.TotalAttackSummary key={attackGroup}>
                  <S.TotalAttackTitle $isFirst={index === 0}>
                    Total Attack: {convertNumberToK(Number(attackGroup) * 1000)} -{' '}
                    {convertNumberToK((Number(attackGroup) - 100) * 1000)}
                  </S.TotalAttackTitle>
                  <S.WrapperTotalAttackImg>
                    <CharsGrid
                      characters={playerAttackSummary[Number(attackGroup)].sort(
                        (a, b) => Number(b.totalAttack) - Number(a.totalAttack)
                      )}
                      imgGap='0px'
                      imgSize='sm'
                      title='totalAttack'
                    />
                  </S.WrapperTotalAttackImg>
                </S.TotalAttackSummary>
              ))}
          </S.WrapperTotalAttackSummary>
        </S.Column>

        <S.Column>
          <S.WrapperPlayerChars>
            {playerCharacters.map((char) => (
              <CharCard key={char.id} char={char} />
            ))}
          </S.WrapperPlayerChars>
        </S.Column>
      </S.Content>
    </S.Container>
  );
};
