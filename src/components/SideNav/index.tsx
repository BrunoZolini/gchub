import { GiCrossedSwords, GiHammerDrop, GiHeavyHelm } from 'react-icons/gi';
import GCLogo from '../../assets/images/gc-logo-sm.png';
import * as S from './styles';

interface SideNavProps {}
export const SideNav = ({}: SideNavProps) => {
  return (
    <S.Container>
      <S.Content>
        <S.Header>
          <S.LinkHeader to='/'>
            <S.Logo src={GCLogo} alt='Grand Chase Logo' />
            <S.Title>GC Hub</S.Title>
          </S.LinkHeader>
        </S.Header>

        <S.Body>
          <S.LinkItem to='/'>
            <GiHeavyHelm size={24} />
            <S.Text>Profile</S.Text>
          </S.LinkItem>
          <S.LinkItem to='/skill-tree'>
            <GiCrossedSwords size={24} />
            <S.Text>Skill Tree</S.Text>
          </S.LinkItem>
          <S.LinkItem to='/reinforcement'>
            <GiHammerDrop size={24} />
            <S.Text>Reinforcement</S.Text>
          </S.LinkItem>
        </S.Body>

        <S.Footer></S.Footer>
      </S.Content>
    </S.Container>
  );
};
