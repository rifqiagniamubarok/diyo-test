import { useEffect, useState } from 'react';
import { IoIosArrowBack } from 'react-icons/io';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

import { resto03 } from '../../assets/index';
import {
  addToCharts,
  clearIdDetailMenu,
  getMainStateAll,
} from '../../config/redux/main/mainState';

import { numberFormat } from '../../config/currency';

const DetailMenu = ({ dataMenu }) => {
  const [data, setData] = useState(null);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [note, setNote] = useState('');
  const [qty, setQty] = useState(0);

  const { idDetailMenu, charts } = useSelector(getMainStateAll);

  useEffect(() => {
    if (!idDetailMenu) {
      navigate('/detail-restorant');
    } else {
      setData(dataMenu.find((menu) => menu.id === idDetailMenu));
      if (charts.filter((chart) => chart.id === idDetailMenu).length !== 0) {
        const collection = charts.find((chart) => chart.id === idDetailMenu);
        setQty(collection.qty);
        setNote(collection.note);
      }
    }
  }, [idDetailMenu, dataMenu, navigate]);

  const handleBack = () => {
    dispatch(clearIdDetailMenu());
    navigate('/detail-restorant');
  };

  const handleAddToBasket = () => {
    let collection = {
      id: idDetailMenu,
      name: data.name,
      harga: data.harga,
      qty: qty,
      note: note,
    };
    dispatch(addToCharts(collection));
    navigate('/detail-restorant');
  };
  return (
    <div>
      <div className=" h-[210px] w-screen relative">
        <div className="bg-red-300 h-[210px] w-screen relative overflow-hidden">
          <div
            className="w-[28px] h-[28px] bg-primary rounded-full absolute top-4 left-4 flex justify-center items-center"
            onClick={handleBack}
          >
            <IoIosArrowBack className="fill-white w-[24px]" />
          </div>
          <div>
            <img src={data?.img} alt="gambar" />
          </div>
        </div>
      </div>
      <div className="px-4 flex justify-between mt-2">
        <p className="text-xl  font-semibold">{data?.name}</p>
        <p className="text-xl text-primary font-semibold">
          {numberFormat(Number(data?.harga))}
        </p>
      </div>
      <div className="px-4 mt-2">
        <hr className="w-full border-1 border-primary" />
      </div>
      <div className="px-4 mt-4 text-sm">
        <p className="font-semibold">Special Request</p>
        <input
          value={note}
          onChange={(e) => setNote(e.target.value)}
          placeholder="Catatan untuk restoran"
          className={`mt-4 w-full focus:outline-none p-4 bg-transparent focus:border-2 focus:border-primary rounded-md ${
            note && 'border-2 border-primary'
          }`}
        />
      </div>
      <div className="px-4 mt-20 flex justify-center items-center gap-3 font-semibold">
        <div
          className="border rounded-sm w-[24px] h-[24px] flex justify-center items-center text-primary"
          onClick={() => {
            if (qty > 0) {
              setQty(qty - 1);
            }
          }}
        >
          <p>-</p>
        </div>
        <div>
          <p className="text-xl">{qty}</p>
        </div>
        <div
          className="border rounded-sm w-[24px] h-[24px] flex justify-center items-center text-primary"
          onClick={() => {
            setQty(qty + 1);
          }}
        >
          <p>+</p>
        </div>
      </div>
      {qty > 0 && (
        <div
          className="bg-primary grid grid-cols-3  items-center left-4 right-4 bottom-4 px-4 py-2 rounded-lg fixed text-white"
          onClick={handleAddToBasket}
        >
          <div className="bg-primarydarker w-[40px] h-[34px] rounded-md flex justify-center items-center">
            <p>{qty}</p>
          </div>
          <div className=" ">
            <p className="text-center">Add to Basket</p>
          </div>
          <div className="text-right">Rp {numberFormat(qty * data.harga)}</div>
        </div>
      )}
    </div>
  );
};
export default DetailMenu;
