import React, { useRef } from "react";
import { useStateValue } from "../../context";
import { updateElState } from "../../context/actions";
import { getActiveEl } from "../../utils/getActiveEl";
import { FaRegImage } from "react-icons/fa";
import { setUrlVal, setImageVal } from "../../utils/setStateValues";

const Image = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const urlRef = useRef(null);
  const fileRef = useRef(null);

  const ID = getActiveEl(layout).elData;

  const handleOnFileChanage = async () => {
    dispatch(updateElState(await setImageVal(fileRef, els, activeElId)));
  };

  const handleOnURLChanage = () => {
    dispatch(updateElState(setUrlVal(urlRef, els, activeElId)));
  };

  return (
    <div className="image">
      <h3>Image</h3>
      <form>
        <div className="image-source">
          <label>Link Image: </label>
          <input
            type="url"
            placeholder="URL"
            ref={urlRef}
            onChange={handleOnURLChanage}
            value={ID.url.value}
            style={{ borderBottomColor: ID.url.validity ? "#ddd" : "red" }}
          />
        </div>
      </form>
      <div className="image-preview">
        {ID.imgSrc ? (
          <img src={ID.imgSrc} width="130" height="80" alt="img" />
        ) : (
          <div className="icon-wrapper">
            <FaRegImage size="70px" />
          </div>
        )}
      </div>
      <div>
        <label htmlFor="file-upload" className="custom-file-upload">
          {ID.imgSrc ? "Change" : "Insert"}
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
