import React from "react";
import uuid from "uuid";

import { SOCIAL_MEDIA_LIST } from "../../configs/constants";
import { getActiveEl } from "../../utils/getActiveEl";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getSocialMediaIcon } from "../../utils/getSocialMediaIcon";

const SocialMedia = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  let socialMediaRef = [];
  let urlRef = [];

  const SMD = getActiveEl(layout).elData;

  const handleOnAdd = () => {
    const elements = els.map(obj => {
      if (obj.elId === activeElId) {
        return Object.assign({}, obj, {
          elData: [...SMD, { socialMedia: "Facebook", url: "", id: uuid() }]
        });
      }
      return obj;
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  const handleOnRemove = i => {
    if (SMD.length > 1) {
      const elements = els.map(obj => {
        if (obj.elId === activeElId) {
          return Object.assign({}, obj, {
            elData: obj.elData.filter((item, index) => index !== i)
          });
        }
        return obj;
      });
      console.log("elements", elements);
      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  };

  const handleOnChange = i => {
    const socialMedia = socialMediaRef[i].value;
    const url = urlRef[i].value;

    const elements = els.map(obj => {
      if (obj.elId === activeElId) {
        const CSMD = [...SMD];
        CSMD[i] = { ...CSMD[i], socialMedia, url };
        return Object.assign({}, obj, {
          elData: CSMD
        });
      }
      return obj;
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  return (
    <div className="socialMedia">
      <h3>Social Media</h3>
      {SMD?.map(({ socialMedia, url, id }, i) => (
        <div className="socialMedia-main" key={id} id={id}>
          {getSocialMediaIcon(socialMedia)}
          <form onSubmit={e => e.preventDefault()}>
            <select
              value={socialMedia}
              ref={el => socialMediaRef.push(el)}
              onChange={() => handleOnChange(i)}
            >
              {SOCIAL_MEDIA_LIST.map(({ label, id }) => (
                <option key={id} value={label}>
                  {label}
                </option>
              ))}
            </select>
            <input
              type="url"
              placeholder="URL"
              ref={el => urlRef.push(el)}
              onChange={() => handleOnChange(i)}
              value={url}
            />
            <hr />
            <input
              type="button"
              value="Delete"
              onClick={() => handleOnRemove(i)}
            />
          </form>
          <hr />
        </div>
      ))}
      <button onClick={handleOnAdd}>Add another service</button>
    </div>
  );
};
export default SocialMedia;
