import React, { useRef, useEffect, useCallback, useState } from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../Constants";
import { FaRegImage } from "react-icons/fa";
import { updateElementData } from "../Constants/index";

const Image = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const urlRef = useRef(null);
  const fileRef = useRef(null);

  const [urlWarning, setUrlWarning] = useState(false);

  const ID = getActiveEl(layout).elData;

  const handleOnFileChanage = () => {
    const file = fileRef.current.files[0];
    const reader = new FileReader();
    if (file) {
      reader.readAsDataURL(file);
      reader.onloadend = () => {
        const elements = updateElementData(els, activeElId, {
          imgSrc: reader.result
        });
        dispatch({ type: UPDATE_ELEMENT, payload: elements });
      };
    }
  };

  const handleOnURLChanage = () => {

    const isUrlValid = (userInput) => {
      var res = userInput.match(/(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g);
      if(res == null) return false;
      return true;
    }

    const url = urlRef.current.value.trim();
    if(!isUrlValid(url)) setUrlWarning(true);
    else setUrlWarning(false);
    const elements = updateElementData(els, activeElId, { url });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  const firstDispatch = useCallback(() => {
    const elements = updateElementData(els, activeElId, {
      url: "",
      imgSrc: ""
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  }, [dispatch, activeElId, els]);

  useEffect(firstDispatch, []);

  return (
    <div className="image">
      <h3>Image</h3>
      <form>
        <div className="image-source">
          <label>Link Image:</label>
          <input
            type="url"
            placeholder="URL"
            ref={urlRef}
            onChange={handleOnURLChanage}
            value={ID ? ID.url : ""}
            style={{borderBottomColor: urlWarning ? "red": "#ddd"}}
          />
        </div>
      </form>
      <div className="image-preview">
        {ID && ID.imgSrc ? (
          <img src={ID.imgSrc} width="130" height="80" alt="img" />
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
