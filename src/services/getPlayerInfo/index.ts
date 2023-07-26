import { MOCK_PLAYER_INFO, PlayerInfo } from 'mocks';
import { customLocalStorage } from 'utils';


export const getPlayerInfo = (): PlayerInfo => {
  const playerInfo = customLocalStorage.getItem<PlayerInfo>('playerInfo');
  if (!playerInfo) {
    customLocalStorage.setItem<PlayerInfo>('playerInfo', MOCK_PLAYER_INFO);
    return MOCK_PLAYER_INFO;
  }
  return playerInfo;
};
