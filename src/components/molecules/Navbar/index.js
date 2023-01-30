import { TbBarcode } from 'react-icons/tb';
import { AiFillHome } from 'react-icons/ai';
import { RiTimeFill } from 'react-icons/ri';
import { MdFavorite } from 'react-icons/md';
import { MdAccountCircle } from 'react-icons/md';
import { useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const location = useLocation();
  const loactionFix = location.pathname;
  const navigate = useNavigate();

  const handleToRestoran = () => {
    navigate('/');
  };
  const handleToPesanan = () => {
    navigate('/pesanan');
  };
  const handleToScan = () => {
    navigate('/scan');
  };
  const handleToFavorit = () => {
    navigate('/favorit');
  };
  const handleToAkun = () => {
    navigate('/akun');
  };

  return (
    <div className="h-[90px] fixed bottom-0 w-screen z-10">
      <div className="relattive bottom-0">
        <div className="h-[60px] top-0 flex justify-center items-top">
          <div className="h-[60px] w-[60px] rounded-full bg-white z-30 flex justify-center items-center relative border-b-2">
            <div
              className="h-[52px] w-[52px] rounded-full bg-primary z-40 flex justify-center items-center"
              onClick={handleToScan}
            >
              <TbBarcode className="text-white h-[35px] w-[35px]" />
            </div>
          </div>
        </div>
        <div className="h-[60px] absolute bg-white z-20 w-screen bottom-0 shadowMini-top grid grid-cols-5 border-t">
          <div
            className="flex flex-col justify-center items-center"
            onClick={handleToRestoran}
          >
            <AiFillHome
              className={`${
                loactionFix === '/' ? 'text-primary' : 'text-gray-400'
              } w-[28px] h-[28px] `}
            />
            <p className="text-xs text-gray-400">Restoran</p>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={handleToPesanan}
          >
            <RiTimeFill
              className={`${
                loactionFix === '/pesanan' ? 'text-primary' : 'text-gray-400'
              } w-[28px] h-[28px] `}
            />
            <p className="text-xs text-gray-400">Pesanan</p>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={handleToScan}
          >
            <div className="w-[28px] h-[28px]"></div>
            <p className="text-xs text-gray-400">Scan</p>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={handleToFavorit}
          >
            <MdFavorite
              className={`${
                loactionFix === '/favorit' ? 'text-primary' : 'text-gray-400'
              } w-[28px] h-[28px] `}
            />
            <p className="text-xs text-gray-400">Favorit</p>
          </div>
          <div
            className="flex flex-col justify-center items-center"
            onClick={handleToAkun}
          >
            <MdAccountCircle
              className={`${
                loactionFix === '/akun' ? 'text-primary' : 'text-gray-400'
              } w-[28px] h-[28px] `}
            />
            <p className="text-xs text-gray-400">Akun</p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default Navbar;
