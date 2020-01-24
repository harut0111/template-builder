import React, { useRef, useEffect, useCallback } from "react";
import { useStateValue } from "../../context";
import { getActiveEl } from "../Constants";
import { FaRegImage } from "react-icons/fa";
import { UPDATE_ELEMENT } from "../../context/actions";
import uuid from "uuid";

const Slider = () => {
  const [{ layout }, dispatch] = useStateValue();

  const durRef = useRef(null);
  let fileRef = [];

  const SD = getActiveEl(layout).elData;

  const handleOnImgSrcChange = id => {
    const reader = new FileReader();
    const file = fileRef.filter(file => file.id === id)[0].files[0];

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const elements = [...layout.elements];
        elements.forEach((element, i) => {
          if (element.elId === layout.activeEl.id) {
            elements[i].elData = {
              ...SD,
              imgSrc: elements[i].elData.imgSrc.map(imgSrc =>
                imgSrc.id === id ? { ...imgSrc, value: reader.result } : imgSrc
              )
            };
          }
        });
        dispatch({ type: UPDATE_ELEMENT, payload: elements });
      };
    }
  };

  const handleOnDurationChange = () => {
    const duration = +durRef.current.value;
    const elements = [...layout.elements];

    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = { ...SD, duration };
      }
    });

    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  const memoizedCallback_OrigineState = useCallback(() => {
    if (!SD) {
      const elements = [...layout.elements];

      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
          elements[i].elData = {
            duration: 1000,
            imgSrc: [
              { id: uuid.v4(), value: null },
              { id: uuid.v4(), value: null }
            ]
          };
        }
      });

      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  }, [SD, layout.elements, layout.activeEl.id, dispatch]);

  useEffect(() => {
    memoizedCallback_OrigineState();
  }, [memoizedCallback_OrigineState]);

  const handleOnAddImage = () => {
    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = {
          ...SD,
          imgSrc: [...SD.imgSrc, { id: uuid.v4(), value: null }]
        };
      }
    });

    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  const handleOnRemoveImage = id => {
    if (SD.imgSrc.length > 2) {
      const duration = +durRef.current.value;

      const elements = [...layout.elements];
      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
          elements[i].elData = {
            duration,
            imgSrc: SD.imgSrc.filter(item => item.id !== id)
          };
        }
      });

      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  };

  return (
    <div className="slider">
      <h3>Slider</h3>
      {SD ? (
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
                    <img
                      src={imgSrc.value}
                      width="100"
                      height="100"
                      alt="img"
                    />
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
      ) : null}
    </div>
  );
};

export default Slider;
