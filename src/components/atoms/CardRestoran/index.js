import { resto01 } from '../../../assets';
import { BiTimeFive } from 'react-icons/bi';

const CardRestorant = ({ ...children }) => {
  return (
    <div className="bg-white rounded-md relative overflow-hidden" {...children}>
      <div className="absolute top-0 right-0 bg-gray-300 flex items-center gap-2 w-[80px] p-1 rounded-bl-xl">
        <BiTimeFive />
        <p className="text-xs">5 Menit</p>
      </div>
      <div className="p-[12px] flex justify-start items-top gap-3">
        <div>
          <div className="w-[90px] h-[90px] bg-gray-500 rounded-md overflow-hidden">
            <img src={resto01} alt="resto01" />
          </div>
        </div>
        <div className="w-full">
          <p className="text-md font-semibold">Soup Kitchen</p>
          <div className="grid grid-cols-2 w-full text-sm mt-[12px]">
            <p>Jl.AKP KS Tabun</p>
            <p className="text-red-500">1.0 km</p>
          </div>
          <p className="text-sm">Chinese food</p>
        </div>
      </div>
    </div>
  );
};
export default CardRestorant;
