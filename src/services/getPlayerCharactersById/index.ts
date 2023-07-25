import { MOCK_PLAYER_CHARACTERS, PlayerCharacter, PlayerCharacters } from 'mocks';
import { customLocalStorage } from 'utils';

export const getPlayerCharactersById = (id: number): PlayerCharacter => {
  const playerCharacters = customLocalStorage.getItem<PlayerCharacters>('playerCharacters');
  const result = playerCharacters ?? MOCK_PLAYER_CHARACTERS;
  const data = result.find((char) => char.id === id);
  if (!data) throw new Error('Invalid id');
  return data;
};
