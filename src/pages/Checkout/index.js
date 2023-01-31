import { FiArrowLeft } from 'react-icons/fi';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { MdOutlineFoodBank } from 'react-icons/md';
import { ImCancelCircle } from 'react-icons/im';
import {
  deleteChart,
  getMainStateAll,
} from '../../config/redux/main/mainState';
import { numberFormat } from '../../config/currency';
import { useEffect, useState } from 'react';

const Checkout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [kodePromo, setKodePromo] = useState('');

  const { charts, totalPrice } = useSelector(getMainStateAll);

  useEffect(() => {
    if (charts.length === 0) {
      navigate('/detail-restorant');
    }
  }, [charts]);

  function handleBack() {
    navigate('/detail-restorant');
  }

  const addMenu = () => {
    navigate('/detail-restorant');
  };

  const deleteBasket = (id) => {
    dispatch(deleteChart(id));
  };

  return (
    <div>
      <div className="px-4 h-[50px] w-screen flex items-center gap-5 bg-primary font-semibold text-xl text-white">
        <div onClick={handleBack}>
          <FiArrowLeft />
        </div>
        <div>
          <p>Pesanan (Meja-diyo-119-1)</p>
        </div>
      </div>
      <div className="px-4 flex justify-between items-center mt-4">
        <p className="text-xl font-semibold">Pesananku</p>
        <div
          className="flex items-center px-4 py-2 gap-2 rounded-lg border-2"
          onClick={addMenu}
        >
          <div className="bg-primary fill-white rounded-md flex justify-center items-center w-6 h-6">
            <MdOutlineFoodBank className="text-white" />
          </div>
          <p className="text-sm">Add Menu</p>
        </div>
      </div>
      <div className="px-4 mt-4">
        <div className="grid grid-cols-1 gap-5">
          {charts.map((chart, index) => (
            <div className="flex justify-between items-center" key={index}>
              <div className="flex justify-start items-center gap-4">
                <div className="w-[34px] h-[30px] bg-primary rounded-md flex justify-center items-center">
                  <p className="text-white font-semibold text-sm">2x</p>
                </div>
                <div>
                  <p className="text-lg font-semibold">{chart.name}</p>
                  <p className="text-xs">{chart.note ? chart.note : '--'}</p>
                </div>
              </div>
              <div className="flex justify-end items-center gap-3">
                <p className="text-lg font-semibold">
                  {numberFormat(chart.harga)}
                </p>
                <ImCancelCircle
                  className="fill-primary"
                  onClick={() => deleteBasket(chart.id)}
                />
              </div>
            </div>
          ))}
        </div>
        <div className="px-4 mt-6 mb-4">
          <hr className="border" />
        </div>
        <div className="px-4 flex justify-between items-center">
          <p>Subtotal</p>
          <p>Rp {numberFormat(totalPrice)}</p>
        </div>
        <div className="px-4 mt-6 mb-4">
          <hr className="border-4" />
        </div>
        <div className="px-4 flex justify-between items-center">
          <p>Kode Promo</p>
          <input
            placeholder="Masukan"
            className={`text-right w-full focus:outline-none p-2 bg-transparent focus:border-2 focus:border-primary rounded-md w-[150px] ${
              kodePromo && 'border-2 border-primary'
            }`}
          />
        </div>
      </div>
      {charts.length > 0 && (
        <div className="bg-primary grid grid-cols-3  items-center left-4 right-4 bottom-4 px-4 py-2 rounded-lg absolute text-white">
          <div className="bg-primarydarker w-[40px] h-[34px] rounded-md flex justify-center items-center">
            <p>{charts.length}</p>
          </div>
          <div className=" ">
            <p className="text-center">Checkout</p>
          </div>
          <div className="text-right">Rp {numberFormat(totalPrice)}</div>
        </div>
      )}
    </div>
  );
};
export default Checkout;
