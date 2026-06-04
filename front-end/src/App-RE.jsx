import { Route, Routes } from 'react-router';
import Apage from './components/pages/A';
import Bpage from './components/pages/B';
import Cpage from './components/pages/C';

import NotFound from './components/pages/NotFound';
import CommonLayout from './components/pages/CommonLayout';
import LayoutIndex from './components/pages/LayoutIndex';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/a' element={<Apage />} />
        <Route path='/b' element={<Bpage />} />
        <Route path='/c' element={<Cpage />} />
        <Route path='/commonLayout' element={<CommonLayout />}>
          <Route index element={<LayoutIndex />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
