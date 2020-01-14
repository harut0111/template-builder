import React, { useRef, useState } from "react";

const Image = () => {
  const [imgSrc, setImgSrc] = useState(null);
  const [deg, setDeg] = useState(0);

  const inputRef = useRef(null);

  const handleOnChanage = () => {
    const reader = new FileReader();

    const file = inputRef.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => setImgSrc(reader.result);
  };

  return (
    <div className="Image">
      <input type="file" ref={inputRef} onChange={handleOnChanage} />
      <div>
        <button onClick={() => setDeg(deg - 90)}>Left</button>
        <button onClick={() => setDeg(deg + 90)}>Right</button>
      </div>
      <div>
        <img
          src={imgSrc}
          width="150"
          height="150"
          alt="img"
          style={{ transform: `rotate(${deg}deg)` }}
        />
      </div>
    </div>
  );
};

export default Image;
