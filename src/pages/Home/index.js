import { useNavigate } from 'react-router-dom';
import { CardRestorant } from '../../components/atoms';

const Home = () => {
  const navigate = useNavigate();
  const handleToDetail = () => {
    navigate('/detail-restorant');
  };
  return (
    <div className="">
      <div className="w-screen bg-primary p-[16px]">
        <p className="text-xl font-bold text-white">DIYO</p>
      </div>
      <div className="p-[16px]">
        <div>
          <p className="text-sm font-semibold text-gray-600">Semua Restoran</p>
        </div>
        <div className="grid grid-cols-1 gap-4 mt-4">
          {[...Array(10)].map((_, index) => (
            <CardRestorant key={index} onClick={handleToDetail} />
          ))}
        </div>
      </div>
    </div>
  );
};
export default Home;
