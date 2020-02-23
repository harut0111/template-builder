import React from "react";
import { FaRegImage } from "react-icons/fa";
import { getActiveEl } from "../../configs/constants";

const _ImageUploader = () => {

    const [{ layout }, dispatch] = useStateValue();
    const SD = getActiveEl(layout).elData;

  return (
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
  );
};

export default _ImageUploader;
