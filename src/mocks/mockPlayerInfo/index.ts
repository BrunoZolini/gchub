import Profile from '../../assets/images/profile/Undefined-Profile.png';

export const MOCK_PLAYER_INFO = {
  name: 'UserName',
  guild: 'GuildName',
  chaserLevel: 0,
  profileImg: Profile,
};

export type PlayerInfo = typeof MOCK_PLAYER_INFO;
