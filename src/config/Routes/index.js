import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import { DetailRestorant } from '../../pages';
import MainApp from '../../pages/MainApp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/*" element={<MainApp />} />
        <Route path="detail-restorant/*" element={<DetailRestorant />} />
      </Router>
    </BrowserRouter>
  );
};
export default Routes;
