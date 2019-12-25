import React, { useRef, useEffect } from "react";
import { FaFacebook } from "react-icons/fa";
import { SOCIAL_MEDIA_LIST, getActiveEl } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const SocialMedia = () => {
  const [{ layout }, dispatch] = useStateValue();

  const socialMediaRef = useRef(null);
  const urlRef = useRef(null);

  const handleOnChange = () => {
    const socialMedia = socialMediaRef.current.value;
    const url = urlRef.current.value;

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = {
          socialMedia,
          url
        };
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(handleOnChange, []);

  const SMD = getActiveEl(layout).elData;

  return (
    <div className="socialMedia">
      <h3>Social Media</h3>
      <FaFacebook />
      <form onChange={handleOnChange}>
        <select defaultValue={SMD ? SMD.socialMedia : ""} ref={socialMediaRef}>
          {SOCIAL_MEDIA_LIST.map((item, i) => (
            <option key={i} value={item}>
              {item}
            </option>
          ))}
        </select>
        <input type="url" placeholder='URL' ref={urlRef} defaultValue={SMD ? SMD.url : ""} />
      </form>
    </div>
  );
};
export default SocialMedia;
