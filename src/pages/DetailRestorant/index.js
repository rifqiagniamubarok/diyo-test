import { Checkout, Menu, DetailMenu } from '../index';
import { Routes as Router, Route } from 'react-router-dom';

import { resto02, resto03 } from '../../assets/index';

const dataMenu = [
  { id: 1, name: 'Premium Late', harga: 10000, img: resto02 },
  { id: 2, name: 'Premium Super', harga: 20000, img: resto03 },
];

const DetailRestorant = () => {
  return (
    <div className="bg-bgprimary min-h-screen">
      <div>
        <Router>
          <Route path="" element={<Menu dataMenu={dataMenu} />} />
          <Route
            path="detail-menu"
            element={<DetailMenu dataMenu={dataMenu} />}
          />
          <Route path="checkout" element={<Checkout />} />
        </Router>
      </div>
    </div>
  );
};
export default DetailRestorant;
