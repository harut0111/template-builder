import React, { useRef } from "react";
import { useStateValue } from "../../context";
import { getActiveEl } from "../Constants";
import { FaRegImage } from "react-icons/fa";
import { UPDATE_ELEMENT } from "../../context/actions";

const Slider = () => {
  const [{ layout }, dispatch] = useStateValue();

  const durRef = useRef(null);
  const fileRef = useRef(null);

  const SD = getActiveEl(layout).elData;

  const handleOnChanage = () => {

    const duration = durRef.current.value;
    const file = fileRef.current.files[0];

    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const elements = [...layout.elements];
        elements.forEach((element, i) => {
          if (element.elId === layout.activeEl.id) {
            elements[i].elData = {
              duration,
              imgSrc: reader.result,
            };
          }
        });
        dispatch({ type: UPDATE_ELEMENT, payload: elements });
      };
    }
  };

  return (
    <div className="slider">
      <h3>Slider</h3>
      <form>
        <div className="slider-row-1">
          <label>Duration: </label>
          <input type="number" placeholder="seconds" ref={durRef} />
        </div>
        <div className="image-uploader">
          <div className="image-preview">
            {SD ? (
              <img src={SD.imgSrc} width="150" height="100" alt="img" />
            ) : (
              <FaRegImage size="100px" />
            )}
          </div>
          <div className="image-tools">
            <span>
              <label htmlFor="file-upload" className="custom-file-upload">
                {SD ? "Change" : "Insert"}
              </label>
              <input
                id="file-upload"
                type="file"
                ref={fileRef}
                onChange={handleOnChanage}
              />
            </span>
            <span className="image-remove">Remove</span>
          </div>
        </div>
        <input type="button" value="Add another image" />
      </form>
    </div>
  );
};

export default Slider;
