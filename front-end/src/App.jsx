import { Route, Routes } from 'react-router';

import HomePage from './components/pages/HomePage';
import ReportMemInfo from './components/pages/ReportMemInfo';
import ReportMyHistory from './components/pages/ReportMyHistory';
import ReportTask from './components/pages/ReportTask';

import NotFound from './components/pages/NotFound';
import CommonLayout from './components/pages/CommonLayout';
import LayoutIndex from './components/pages/LayoutIndex';

const App = () => {
  return (
    <>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/ReportMemInfo' element={<ReportMemInfo />} />
        <Route path='/ReportMyHistory' element={<ReportMyHistory />} />
        <Route path='/ReportTask' element={<ReportTask />} />

        <Route path='/commonLayout' element={<CommonLayout />}>
          <Route index element={<LayoutIndex />} />
        </Route>
        <Route path='*' element={<NotFound />} />
      </Routes>
    </>
  );
};

export default App;
