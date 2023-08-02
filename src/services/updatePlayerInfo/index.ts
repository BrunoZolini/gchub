import { PlayerInfo } from 'mocks';
import { customLocalStorage } from 'utils';

export const updatePlayerInfo = (playerInfo: PlayerInfo) => {
  customLocalStorage.setItem<PlayerInfo>('playerInfo', playerInfo);
};
