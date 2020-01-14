import React, { useEffect } from "react";
import { SOCIAL_MEDIA_LIST, getActiveEl } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const SocialMedia = i => {
  const [{ layout }, dispatch] = useStateValue();

  let socialMediaRef = [];
  let urlRef = [];

  const SMD = getActiveEl(layout).elData;

  const handleOnAdd = () => {
    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        if (SMD) {
          elements[i].elData = [...SMD, { socialMedia: "Facebook", url: "" }];
        }
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(() => {
    if (!SMD) {
      const elements = [...layout.elements];

      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
          elements[i].elData = [{ socialMedia: "Facebook", url: "" }];
        }
      });
      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
    //eslint-disable-next-line
  }, []);

  const handleOnRemove = index => {
    if (SMD.length > 1) {
      const elements = [...layout.elements];
      elements.forEach((element, i) => {
        if (element.elId === layout.activeEl.id) {
          const filteredEls = [...element.elData];
          filteredEls.splice(index, 1);
          elements[i].elData = filteredEls;
        }
      });

      dispatch({ type: UPDATE_ELEMENT, payload: elements });
    }
  };

  const handleOnChange = (ev, index) => {
    ev.preventDefault();

    const socialMedia = socialMediaRef[index].value;
    const url = urlRef[index].value;

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
