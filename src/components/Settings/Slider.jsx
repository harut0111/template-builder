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

  const handleOnChanage = id => {
    // const file = fileRef.current.files[0];
    // console.log("layout", layout);

    const duration = durRef.current.value;
    const reader = new FileReader();
    const file = fileRef.filter(file => file.id === id)[0].files[0];

    // const file1 = fileRef.filter(file => file.id === id)[0];
    // console.log('object', file1)

    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const elements = [...layout.elements];
        // console.log("elements", elements);
        elements.forEach((element, i) => {
          if (element.elId === layout.activeEl.id) {
            // console.log("elements[i]", elements[i].elData);
            elements[i].elData = {
              duration,
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

  const memoizedCallback = useCallback(() => {
    if (!SD) {
      const elements = [...layout.elements];

      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
          elements[i].elData = {
            duration: 0,
            imgSrc: [
              { id: uuid.v4(), value: null },
              { id: uuid.v4(), value: null }
            ]
          };
        }
      });

      // console.log("elements", elements);
      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  }, [SD, layout.elements, layout.activeEl.id, dispatch]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  return (
    <div className="slider">
      <h3>Slider</h3>
      {SD ? (
        <form>
          <div className="slider-row-1">
            <label>Duration: </label>
            <input type="number" placeholder="seconds" ref={durRef} />
          </div>
          <div className="slider-images">
            {SD.imgSrc.map(imgSrc => (
              <div className="image-uploader" key={imgSrc.id}>
                <div className="image-preview">
                  {imgSrc.value ? (
                    <img
                      src={imgSrc.value}
                      width="150"
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
                      onChange={() => handleOnChanage(imgSrc.id)}
                    />
                  </span>
                  <span className="image-remove">Remove</span>
                </div>
              </div>
            ))}
          </div>
          <input type="button" value="Add another image" />
        </form>
      ) : null}
    </div>
  );
};

export default Slider;
