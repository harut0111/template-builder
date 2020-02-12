import React, { useEffect, useCallback } from "react";
import { SOCIAL_MEDIA_LIST, getActiveEl } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

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
          elData: [...SMD, { socialMedia: "Facebook", url: "" }]
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
            elData: [{ socialMedia: "Facebook", url: "" }]
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
      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  };

  const handleOnChange = (ev, index) => {
    ev.preventDefault();

    const socialMedia = socialMediaRef[index].value;
    const url = urlRef[index].value;

    const elements = els.map(obj => {
      if (obj.elId === activeElId) {
        const CSMD = [...SMD];
        CSMD[index] = { socialMedia, url };
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
      {SMD
        ? SMD.map((el, i) => (
            <div className="socialMedia-main" key={i} id={i}>
              {
                SOCIAL_MEDIA_LIST.filter(
                  item => item.label === el.socialMedia
                )[0].Icon
              }
              <form onSubmit={e => e.preventDefault()}>
                <select
                  value={el.socialMedia}
                  ref={el => socialMediaRef.push(el)}
                  onChange={ev => handleOnChange(ev, i)}
                >
                  {SOCIAL_MEDIA_LIST.map((item, i) => (
                    <option key={i} value={item.label}>
                      {item.label}
                    </option>
                  ))}
                </select>
                <input
                  type="url"
                  id={`inp-${i}`}
                  placeholder="URL"
                  ref={el => urlRef.push(el)}
                  onChange={ev => handleOnChange(ev, i)}
                  value={el.url}
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
