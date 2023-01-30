import { useCallback, useEffect, useRef, useState } from 'react';
import Webcam from 'react-webcam';

const videoConstraints = {
  width: 1280,
  height: 720,
  facingMode: 'user',
};

const Scan = () => {
  const [res, setRes] = useState('');
  const webcamRef = useRef(null);
  const capture = useCallback(() => {
    const imageSrc = webcamRef.current.getScreenshot();
    setRes(imageSrc);
  }, [webcamRef]);

  return (
    <div>
      <div>
        <Webcam
          audio={false}
          height={720}
          ref={webcamRef}
          screenshotFormat="image/jpeg"
          width={1280}
          videoConstraints={videoConstraints}
        />
      </div>
      <button onClick={capture} className="bg-red-400">
        Capture photo
      </button>
      <p>{res}</p>
    </div>
  );
};
export default Scan;
