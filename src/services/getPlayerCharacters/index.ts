import { MOCK_PLAYER_CHARACTERS, PlayerCharacters } from 'mocks';
import { customLocalStorage } from 'utils';

export const getPlayerCharacters = (): PlayerCharacters => {
  const playerCharacters = customLocalStorage.getItem<PlayerCharacters>('playerCharacters');
  if (!playerCharacters) {
    customLocalStorage.setItem<PlayerCharacters>('playerCharacters', MOCK_PLAYER_CHARACTERS);
    return MOCK_PLAYER_CHARACTERS;
  }
  return playerCharacters;
};
