import React, { useEffect, useCallback } from "react";
import { SOCIAL_MEDIA_LIST } from "../../configs/constants";
import { getActiveEl } from "../../utils/getActiveEl";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getSocialMediaIcon } from "../../utils/getSocialMediaIcon";
import uuid from "uuid";

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
          elData: [...SMD, {id: uuid(), socialMedia: "Facebook", url: "" }]
        });
      }
      return obj;
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  const memoizedCallback = useCallback(() => {
    if (!SMD) {
      const elements = els.map(obj => {
        if (obj.elId === activeElId) {
          return Object.assign({}, obj, {
            elData: [{id: uuid(), socialMedia: "Facebook", url: "" }]
          });
        }
        return obj;
      });
      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  }, [SMD, els, dispatch, activeElId]);

  useEffect(() => {
    memoizedCallback();
  }, [memoizedCallback]);

  const handleOnRemove = index => {
    if (SMD.length > 1) {
      const elements = els.map(obj => {
        if (obj.elId === activeElId) {
          return Object.assign({}, obj, {
            elData: [...obj.elData].splice(index, 1)
          });
        }
        return obj;
      });
      console.log('elements', elements)
      // dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  };

  const handleOnChange = (ev, index) => {
    ev.preventDefault();

    const socialMedia = socialMediaRef[index].value;
    const url = urlRef[index].value;

    const elements = els.map(obj => {
      if (obj.elId === activeElId) {
        const CSMD = [...SMD];
        CSMD[index] = {...CSMD[index], socialMedia, url };
        return Object.assign({}, obj, {
          elData: CSMD
        });
      }
      return obj;
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  console.log('SMD', SMD);
  return (
    <div className="socialMedia">
      <h3>Social Media</h3>
      {SMD
        ? SMD.map(({socialMedia, url, id }, i) => (
            
            <div className="socialMedia-main" key={id} id={id}>
              {getSocialMediaIcon(socialMedia)}
              <form onSubmit={e => e.preventDefault()}>
                <select
                  value={socialMedia}
                  ref={el => socialMediaRef.push(el)}
                  onChange={ev => handleOnChange(ev, i)}
                >
                  {SOCIAL_MEDIA_LIST.map(({label, id}) => (
                    <option key={id} value={label}>
                      {label}
                    </option>
                  ))}
                </select>
                <input
                  type="url"
                  placeholder="URL"
                  ref={el => urlRef.push(el)}
                  onChange={ev => handleOnChange(ev, i)}
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
          ))
        : null}

      <button onClick={handleOnAdd}>Add another service</button>
    </div>
  );
};
export default SocialMedia;
