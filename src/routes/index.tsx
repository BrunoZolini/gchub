import { MainLayout } from 'layout';
import { CharSkillTree, Character, Home, SkillTree } from 'pages';
import { Route, Routes } from 'react-router-dom';

export const PrivateRoutes = () => {
  return (
    <Routes>
      <Route path='/' element={<MainLayout />}>
        <Route index element={<Home />} />
        <Route path=':character' element={<Character />} />
        <Route path='skill-tree' element={<SkillTree />} />
        <Route path='skill-tree/:character' element={<CharSkillTree />} />
      </Route>
    </Routes>
  );
};
