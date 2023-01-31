import { Routes as Router, Route } from 'react-router-dom';
import { Navbar } from '../../components/molecules';
import { Home, Pesanan, Scan, Favorit, Akun, DetailRestorant } from '../index';

const MainApp = () => {
  return (
    <div className="bg-bgprimary min-h-screen">
      <Navbar />
      <div>
        <Router>
          <Route path="" element={<Home />} />
          <Route path="pesanan" element={<Pesanan />} />
          <Route path="scan" element={<Scan />} />
          <Route path="favorit" element={<Favorit />} />
          <Route path="akun" element={<Akun />} />
          <Route path="detail-restorant" element={<DetailRestorant />} />
        </Router>
      </div>
    </div>
  );
};
export default MainApp;
