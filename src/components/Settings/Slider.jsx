import React, { useRef } from "react";
import { useStateValue } from "../../context";
import { getActiveEl } from "../../utils/getActiveEl";
import { FaRegImage } from "react-icons/fa";
import { updateElState } from "../../context/actions";
import {
  setDurationVal,
  setRemoveImage,
  setAddImage
} from "../../utils/setStateValues";
import { setSliderImageVal } from "../../utils/setStateValues";

const Slider = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const durRef = useRef(null);
  const fileRef = [];

  const SD = getActiveEl(layout).elData;

  const handleOnImgSrcChange = async id => {
    dispatch(
      updateElState(
        await setSliderImageVal(fileRef, els, activeElId, id, SD, layout)
      )
    );
  };

  const handleOnDurationChange = () => {
    dispatch(updateElState(setDurationVal(durRef, els, activeElId, SD)));
  };

  const handleOnAddImage = () => {
    dispatch(updateElState(setAddImage(els, activeElId, SD)));
  };

  const handleOnRemoveImage = id => {
    if (SD.imgSrc.length > 2)
      dispatch(updateElState(setRemoveImage(id, els, activeElId, SD)));
  };
  return (
    <div className="slider">
      <h3>Slider</h3>
      <form>
        <div className="slider-row-1">
          <label>Duration: </label>
          <input
            type="number"
            min="0"
            value={SD.duration}
            placeholder="seconds"
            ref={durRef}
            onChange={handleOnDurationChange}
          />
        </div>
        <div className="slider-images">
          {SD.imgSrc.map(imgSrc => (
            <div className="image-uploader" key={imgSrc.id}>
              <div className="image-preview">
                {imgSrc.value ? (
                  <img src={imgSrc.value} width="100" height="100" alt="img" />
                ) : (
                  <FaRegImage size="100px" />
                )}
              </div>
              <div className="image-tools">
                <span>
                  <label htmlFor={imgSrc.id} className="custom-file-upload">
                    {imgSrc.value ? "Change" : "Insert"}
                  </label>
                  <input
                    id={imgSrc.id}
                    type="file"
                    ref={el => fileRef.push(el)}
                    onChange={() => handleOnImgSrcChange(imgSrc.id)}
                  />
                </span>
                <span
                  className="image-remove"
                  onClick={() => handleOnRemoveImage(imgSrc.id)}
                >
                  Remove
                </span>
              </div>
            </div>
          ))}
        </div>
        <input
          type="button"
          value="Add another image"
          onClick={handleOnAddImage}
        />
      </form>
    </div>
  );
};

export default Slider;
