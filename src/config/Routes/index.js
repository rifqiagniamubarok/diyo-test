import { BrowserRouter, Routes as Router, Route } from 'react-router-dom';
import MainApp from '../../pages/MainApp';

const Routes = () => {
  return (
    <BrowserRouter>
      <Router>
        <Route path="/*" element={<MainApp />} />
      </Router>
    </BrowserRouter>
  );
};
export default Routes;
