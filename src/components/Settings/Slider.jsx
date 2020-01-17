import React, { useRef } from "react";
import { useStateValue } from "../../context";
import { getActiveEl } from "../Constants";
import { FaRegImage } from "react-icons/fa";

const Slider = () => {
  const [{ layout }, dispatch] = useStateValue();

  const urlRef = useRef(null);
  const fileRef = useRef(null);

  const SD = getActiveEl(layout).elData;

  return (
    <div className="slider">
      <h3>Slider</h3>
      <form>
        <div className='slider-row-1'>
          <label>Duration: </label>
          <input type="number" placeholder='seconds'/>
        </div>
        <div className='image-uploader'>
          <div className='image-icon'>{SD ? null : <FaRegImage size="100px" />}</div>
          <div className='image-tools'>
            <span>
              <label htmlFor="file-upload" className="custom-file-upload">
                {SD ? "Change" : "Insert"}
              </label>
              <input
                id="file-upload"
                type="file"
                ref={fileRef}
                // onChange={handleOnChanage}
              />
            </span>
            <span className='image-remove'>Remove</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Slider;
