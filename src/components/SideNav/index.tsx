import { GiCrossedSwords, GiHammerDrop, GiHeavyHelm } from "react-icons/gi";
import GCLogo from '../../assets/images/gc-logo-sm.png';
import * as S from './styles';

interface SideNavProps {}
export const SideNav = ({}: SideNavProps) => {
  return (
    <S.Container>
      <S.Link to='/'>
        <S.WrapperLinkLogo>
          <S.Logo src={GCLogo} alt='Grand Chase Logo' />
          <S.Title>GC Hub</S.Title>
        </S.WrapperLinkLogo>
      </S.Link>
      <S.Link to='/'>
        <S.WrapperLinkItems>
          <GiHeavyHelm size={24}/>
          <S.Text>Profile</S.Text>
        </S.WrapperLinkItems>
      </S.Link>
      <S.Link to='/skill-tree'>
        <S.WrapperLinkItems>
          <GiCrossedSwords size={24}/>
          <S.Text>Skill Tree</S.Text>
        </S.WrapperLinkItems>
      </S.Link>
      <S.Link to='/reinforcement'>
        <S.WrapperLinkItems>
          <GiHammerDrop size={24}/>
          <S.Text>Reinforcement</S.Text>
        </S.WrapperLinkItems>
      </S.Link>
    </S.Container>
  );
};

