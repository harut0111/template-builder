import React, { useRef, useEffect } from "react";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
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
  const socialMediaIcons = [
    <FaFacebook />,
    <FaTwitter />,
    <FaInstagram />,
    <FaYoutube />
  ];

  return (
    <div className="socialMedia">
      <h3>Social Media</h3>
      <div className="socialMedia-main">
        {
          socialMediaIcons[
            SOCIAL_MEDIA_LIST.indexOf(
              socialMediaRef.current && socialMediaRef.current.value
            )
          ]
        }
        <form onChange={handleOnChange}>
          <select
            defaultValue={SMD ? SMD.socialMedia : ""}
            ref={socialMediaRef}
          >
            {SOCIAL_MEDIA_LIST.map((item, i) => (
              <option key={i} value={item}>
                {item}
              </option>
            ))}
          </select>
          <input
            type="url"
            placeholder="URL"
            ref={urlRef}
            defaultValue={SMD ? SMD.url : ""}
          />
          <hr />
          <input type="submit" value="Delete" />
        </form>
        <hr />
      </div>
      <button>Add another service</button>
    </div>
  );
};
export default SocialMedia;
