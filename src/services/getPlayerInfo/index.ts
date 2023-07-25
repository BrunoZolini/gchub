import { MOCK_PLAYER_INFO, PlayerInfo } from 'mocks';

export const getPlayerInfo = (): PlayerInfo => {
  const playerInfo = localStorage.getItem('playerInfo');
  if (!playerInfo) return MOCK_PLAYER_INFO;
  return JSON.parse(playerInfo);
};
