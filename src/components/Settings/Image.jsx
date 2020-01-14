import React, { useRef, useState } from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../Constants";

const Image = () => {
  const [{ layout }, dispatch] = useStateValue();

  // const [imgSrc, setImgSrc] = useState(null);
  const [deg, setDeg] = useState(0);

  const inputRef = useRef(null);

  const ID = getActiveEl(layout).elData;

  const handleOnChanage = () => {
    const reader = new FileReader();

    const file = inputRef.current.files[0];
    reader.readAsDataURL(file);
    reader.onloadend = () => {
      const elements = [...layout.elements];
      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
          elements[i].elData = {
            imgSrc: reader.result
          };
        }
      });
      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    };
  };

  console.log("ID", ID);
  return (
    <div className="Image">
      <input type="file" ref={inputRef} onChange={handleOnChanage} />
      <div>
        <button onClick={() => setDeg(deg - 90)}>Left</button>
        <button onClick={() => setDeg(deg + 90)}>Right</button>
      </div>
      <div>
        {ID ? (
          <img
            src={ID.imgSrc}
            width="150"
            height="150"
            alt="img"
            style={{ transform: `rotate(${deg}deg)` }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Image;
