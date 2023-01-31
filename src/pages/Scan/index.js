import React, { useEffect, useState } from 'react';
import { AiOutlineArrowLeft } from 'react-icons/ai';
import QrReader from 'react-qr-scanner';
import { useNavigate } from 'react-router-dom';

const Scan = () => {
  const navigate = useNavigate();
  const [delay, setDelay] = useState(100);
  const [result, setResult] = useState(null);

  const handleError = (err) => {
    console.error(err);
  };
  const handleScan = (data) => {
    setResult(data);
  };
  const previewStyle = {
    height: 400,
    width: 400,
  };

  useEffect(() => {
    if (result) {
      navigate('/detail-restorant');
    }
  }, [result]);
  return (
    <div className="h-screen w-scren">
      <div className="h-screen w-scren bg-black absolute z-40 top-0 bottom-0 left-0 right-0">
        <div className="h-screen w-scren relative text-white">
          <div className="mt-8 px-4">
            <AiOutlineArrowLeft className="" onClick={() => navigate('/')} />
          </div>
          <div className="w-screen flex justify-center items-center mt-[120px]">
            <div className="rounded-lg relative overflow-hidden w-[325px] h-[200px] bg-red-500 flex justify-center items-center">
              <QrReader
                delay={delay}
                style={previewStyle}
                onError={handleError}
                // legacyMode={legacy}
                onScan={handleScan}
              />
            </div>
          </div>
          <div className="flex justify-center mt-[30px]">
            <p className="text-primary">Silakan scan barcode di meja!</p>
          </div>
        </div>
        <div></div>
      </div>
    </div>
  );
};
export default Scan;
