import React, { useRef, useEffect } from "react";
// import uuid from 'uuid';
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";
import { SOCIAL_MEDIA_LIST, getActiveEl } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const SocialMedia = i => {
  const [{ layout }, dispatch] = useStateValue();

  const socialMediaRef = useRef(null);
  const urlRef = useRef(null);

  const SMD = getActiveEl(layout).elData;
  console.log("SMD", SMD);

  const handleOnAdd = () => {
    const socialMedia = socialMediaRef.current.value;
    const url = urlRef.current.value;

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        if (SMD) {
          elements[i].elData = [...SMD, { socialMedia: "Facebook", url: "" }];
        } else {
          elements[i].elData = [{ socialMedia, url }];
        }
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(() => {
    if(!SMD) {
      const elements = [...layout.elements];
  
      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
            elements[i].elData = [{ socialMedia: 'Facebook', url: '' }];
        }
      });
      dispatch({ type: UPDATE_ELEMENT, payload: elements });

    }

  } , []);

  const handleOnRemove = index => {
    if (SMD.length > 1) {
      const elements = [...layout.elements];
      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
          elements[i].elData = SMD.slice(index);
        }
      });
      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  };

  const handleOnChange = (ev, index) => {
    ev.preventDefault();

    const socialMedia = socialMediaRef.current.value;
    const url = urlRef.current.value;

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        const CSMD = [...SMD];
        CSMD[index] = { socialMedia, url };
        elements[i].elData = CSMD;
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  const socialMediaIcons = [
    <FaFacebook />,
    <FaTwitter />,
    <FaInstagram />,
    <FaYoutube />
  ];

  return (
    <div className="socialMedia">
      <h3>Social Media</h3>
      {console.log(SMD)}
      {SMD
        ? SMD.map((el, i) => (
            <div className="socialMedia-main" key={i}>
              {socialMediaIcons[SOCIAL_MEDIA_LIST.indexOf(el.socialMedia)]}
              <form onChange={ev => handleOnChange(ev, i)}>
                <select defaultValue={el.socialMedia} ref={socialMediaRef}>
                  {SOCIAL_MEDIA_LIST.map((item, i) => (
                    <option key={i} value={item}>
                      {item}
                    </option>
                  ))}
                </select>
                <input placeholder="URL" ref={urlRef} defaultValue={el.url} />
                <hr />
                <input
                  type="button"
                  value="Delete"
                  onClick={() => handleOnRemove(i)}
                />
              </form>
              <hr />
            </div>
          ))
        : null}

      <button onClick={handleOnAdd}>Add another service</button>
    </div>
  );
};
export default SocialMedia;
