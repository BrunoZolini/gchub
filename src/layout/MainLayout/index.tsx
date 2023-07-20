import { SideNav } from 'components';
import { Outlet } from 'react-router-dom';
import * as S from './styles';

interface MainLayoutProps {}
export const MainLayout = ({}: MainLayoutProps) => {
  return (
    <S.Container>
      <SideNav />
      <Outlet />
    </S.Container>
  );
};
