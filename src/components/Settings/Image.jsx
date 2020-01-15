import React, { useRef } from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../Constants";

const Image = () => {
  const [{ layout }, dispatch] = useStateValue();

  const urlRef = useRef(null);
  const fileRef = useRef(null);

  const ID = getActiveEl(layout).elData;

  const handleOnChanage = () => {
    const file = fileRef.current.files[0];
    const url = urlRef.current.value;

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const elements = [...layout.elements];
        elements.forEach((element, i) => {
          if (element.elId === layout.activeEl.id) {
            elements[i].elData = {
              imgSrc: reader.result,
              url
            };
          }
        });
        dispatch({ type: UPDATE_ELEMENT, payload: elements });
      };
    }
  };

  return (
    <div className="Image">
      <form>
        <label>Link Image: </label>
        <input
          type="url"
          placeholder="URL"
          ref={urlRef}
          onChange={handleOnChanage}
          value={ID ? ID.url: ''}
        />
        <input type="file" ref={fileRef} onChange={handleOnChanage}  />
      </form>

      <div>
        {ID ? (
          <img
            src={ID.imgSrc}
            width="100"
            height="100"
            alt="img"
            // style={{ transform: `rotate(${deg}deg)` }}
          />
        ) : null}
      </div>
    </div>
  );
};

export default Image;
