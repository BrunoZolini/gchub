import { MainLayout } from 'layout';
import { Home } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path=':character' element={<Home />} />
        <Route path='skill-tree' element={<Home />} />
        <Route path='skill-tree/:character' element={<Home />} />
      </Route>
    </Routes>
  );
};
