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
    <div className="Slider">
      <h3>Slider</h3>
      <form>
        <div>
          <label htmlFor="slider-duration"></label>
          <input type="number" id="slider-duration" />
        </div>
        <div>
          <div>{SD ? null : <FaRegImage size="50px" />}</div>
          <div>
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
            <span>Remove</span>
          </div>
        </div>
      </form>
    </div>
  );
};

export default Slider;
