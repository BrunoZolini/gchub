import { MOCK_PLAYER_CHARACTERS, PlayerCharacters } from 'mocks';
import { customLocalStorage } from 'utils';

export const getPlayerCharacters = (): PlayerCharacters => {
  const playerCharacters = customLocalStorage.getItem<PlayerCharacters>('playerCharacters');
  return playerCharacters ?? MOCK_PLAYER_CHARACTERS;
};
