import { useState } from 'react';
import { MdFavorite } from 'react-icons/md';
import { GiTable } from 'react-icons/gi';
import { IoIosArrowBack } from 'react-icons/io';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';
import { useNavigate } from 'react-router-dom';

import { resto03 } from '../../assets/index';
import {
  getMainStateAll,
  inputIdDetailMenu,
} from '../../config/redux/main/mainState';
import { useDispatch, useSelector } from 'react-redux';
import { numberFormat } from '../../config/currency';

const Menu = ({ dataMenu }) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { charts, totalPrice } = useSelector(getMainStateAll);
  const [isFavorite, setIsFavorite] = useState(false);

  const [variant, setVariant] = useState(0);

  const handleBack = () => {
    navigate('/');
  };

  const handleToDetail = (id) => {
    dispatch(inputIdDetailMenu(id));
    navigate('/detail-restorant/detail-menu');
  };

  const handleToViewBasket = () => {
    navigate('/detail-restorant/checkout');
  };

  return (
    <div>
      <div className=" h-[226px] w-screen relative">
        <div className="bg-red-300 h-[210px] w-screen relative overflow-hidden">
          <div
            className="w-[28px] h-[28px] bg-primary rounded-full absolute top-4 left-4 flex justify-center items-center"
            onClick={handleBack}
          >
            <IoIosArrowBack className="fill-white w-[24px]" />
          </div>
          <div className="w-[120px] h-[28px] bg-primary rounded-md  absolute bottom-4 left-4 flex justify-center items-center text-white gap-2">
            <GiTable className="fill-white" />
            <p className="font-semibold text-sm ">No. Meja 1</p>
          </div>
          <div>
            <img src={resto03} alt="gambar" />
          </div>
        </div>
        <div
          className="absolute h-[32px] w-[32px] bg-white rounded-full bottom-0 right-[16px] flex justify-center items-center"
          onClick={() => setIsFavorite(!isFavorite)}
        >
          <MdFavorite
            className={`${isFavorite ? 'fill-pink-700' : 'fill-gray-600'}`}
          />
        </div>
      </div>
      <div className="px-4">
        <p className="text-2xl font-semibold">Dominico Coffe</p>
        <p className="text-sm">Kopi</p>
        <p className="text-sm">Jalan Mayang No.24 Medaa</p>
        <div className="flex justify-between items-center mt-8">
          <div className="flex justify-start items-center text-sm gap-1">
            <AiOutlineClockCircle className="fill-primary" />
            <p className="text-primary">BUKA</p>
            <p className="text-black">until 19.00 today</p>
          </div>
          <div className="flex justify-end items-center gap-1 rounded-md text-xs text-white fill-white bg-primary p-1">
            <FaMapMarkerAlt />
            <p>100000 km</p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-12">
        <div className="grid grid-cols-3 text-xs">
          <div
            className={`${variant === 0 && 'bg-primary'} rounded-md p-2`}
            onClick={() => setVariant(0)}
          >
            <p className={`text-center ${variant === 0 && 'text-white'} `}>
              Dominico Premium
            </p>
          </div>
          <div
            className={`${variant === 1 && 'bg-primary'} rounded-md p-2`}
            onClick={() => setVariant(1)}
          >
            <p className={`text-center ${variant === 1 && 'text-white'} `}>
              Dominico Blend
            </p>
          </div>
          <div
            className={`${variant === 2 && 'bg-primary'} rounded-md p-2`}
            onClick={() => setVariant(2)}
          >
            <p className={`text-center ${variant === 2 && 'text-white'} `}>
              Non Coffee
            </p>
          </div>
        </div>
      </div>
      <div className="px-4 mt-4">
        {variant === 0 ? (
          <div className="grid grid-cols-1 gap-3">
            {dataMenu.map((menu, index) => (
              <div
                className="flex justify-between items-start"
                key={index}
                onClick={() => handleToDetail(menu.id)}
              >
                <div className="flex justify-start gap-1 items-start text-sm font-semibold">
                  <div className="w-[60px] h-[60px] bg-primary rounded-md relative overflow-hidden">
                    <img src={menu.img} alt={`gmbr${index + 1}`} />
                  </div>
                  <p>{menu.name}</p>
                </div>
                <div className="text-sm font-semibold">
                  <p className="text-right">{menu.harga}</p>
                </div>
              </div>
            ))}
          </div>
        ) : variant === 1 ? (
          <div></div>
        ) : (
          variant === 2 && <div></div>
        )}
      </div>
      {charts.length > 0 && (
        <div
          className="bg-primary grid grid-cols-3  items-center left-4 right-4 bottom-4 px-4 py-2 rounded-lg absolute text-white"
          onClick={handleToViewBasket}
        >
          <div className="bg-primarydarker w-[40px] h-[34px] rounded-md flex justify-center items-center">
            <p>{charts.length}</p>
          </div>
          <div className=" ">
            <p className="text-center">View Basket</p>
          </div>
          <div className="text-right">Rp {numberFormat(totalPrice)}</div>
        </div>
      )}
    </div>
  );
};
export default Menu;
