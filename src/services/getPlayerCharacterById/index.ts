import { MOCK_PLAYER_CHARACTERS, PlayerCharacter, PlayerCharacters } from 'mocks';
import { customLocalStorage } from 'utils';

export const getPlayerCharacterById = (id: number): PlayerCharacter => {
  let playerCharacters = customLocalStorage.getItem<PlayerCharacters>('playerCharacters');
  if (!playerCharacters) {
    customLocalStorage.setItem<PlayerCharacters>('playerCharacters', MOCK_PLAYER_CHARACTERS);
    playerCharacters = MOCK_PLAYER_CHARACTERS
  }
  const data = playerCharacters.find((char) => char.id === id);
  if (!data) throw new Error('Invalid id');
  return data;
};
