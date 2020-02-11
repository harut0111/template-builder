import React, { useRef, useEffect } from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../Constants";
import { FaRegImage } from "react-icons/fa";

const Image = () => {
  const [{ layout }, dispatch] = useStateValue();

  const urlRef = useRef(null);
  const fileRef = useRef(null);

  const ID = getActiveEl(layout).elData;

  const handleOnFileChanage = () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const elements = layout.elements.map(obj => {
          if (obj.elId === layout.activeEl.id) {
            return {
              ...obj,
              elData: { ...obj.elData, imgSrc: reader.result }
            };
          }
          return obj;
        });
        dispatch({ type: UPDATE_ELEMENT, payload: elements });
      };
    }
  };

  const handleOnURLChanage = () => {
    const url = urlRef.current.value;

    const elements = layout.elements.map(obj => {
      if (obj.elId === layout.activeEl.id) {
        return {
          ...obj,
          elData: { ...obj.elData, url }
        };
      }
      return obj;
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(() => {
    const elements = layout.elements.map(obj => {
      if (obj.elId === layout.activeEl.id) {
        return {
          ...obj,
          elData: {
            url: "",
            imgSrc: ""
          }
        };
      }
      return obj;
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  }, []);


  return (
    <div className="image">
      <h3>Image</h3>
      <form>
        <label>Link Image:</label>
        <input
          type="url"
          placeholder="URL"
          ref={urlRef}
          onChange={handleOnURLChanage}
          value={ID ? ID.url : ""}
        />
      </form>
      <div className="image-preview">
        {ID && ID.imgSrc ? (
          <img src={ID.imgSrc} width="150" height="100" alt="img" />
        ) : (
          <div className="icon-wrapper">
            <FaRegImage size="70px" />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="file-upload" className="custom-file-upload">
          {ID ? "Change" : "Insert"}
        </label>
        <input
          id="file-upload"
          type="file"
          ref={fileRef}
          onChange={handleOnFileChanage}
        />
      </div>
    </div>
  );
};

export default Image;
