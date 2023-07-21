import { SideNav } from 'components';
import { Outlet } from 'react-router-dom';
import * as S from './styles';

interface MainLayoutProps {}
export const MainLayout = ({}: MainLayoutProps) => {
  return (
    <S.Container>
      <SideNav />
      <S.Content>
        <S.Header />
        <Outlet />
      </S.Content>
    </S.Container>
  );
};
