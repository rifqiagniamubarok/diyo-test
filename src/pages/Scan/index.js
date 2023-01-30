import { useState } from 'react';
import { QrReader } from 'react-qr-reader';

const Scan = () => {
  const [res, setRes] = useState('');
  const handleScan = (data) => {
    console.log(data);
  };
  const handleError = (error) => {
    console.error(error);
  };
  console.log(res);
  return (
    <div>
      <QrReader
        onResult={(result, error) => {
          if (!!result) {
            setRes(result?.text);
          }
          if (!!error) {
            console.info(error);
          }
        }}
        style={{ width: '100%' }}
      />
      <p>hello</p>
    </div>
  );
};
export default Scan;
