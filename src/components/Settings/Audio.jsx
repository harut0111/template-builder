import React, { useEffect, useRef } from "react";
import uuid from "uuid";

import {
  VIDEO_PROVIDER_LIST,
  FORMAT_LIST,
  AUDIO_PROVIDER_LIST
} from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../Constants/";

const Video = () => {
  const [{ layout }, dispatch] = useStateValue();

  const providerRef = useRef(null);
  const urlRef = useRef(null);

  const [autoplayRef, loopRef, controlRef] = [
    useRef(null),
    useRef(null),
    useRef(null)
  ];

  const arrOfRefs = [autoplayRef, loopRef, controlRef];
  const VD = getActiveEl(layout).elData;

  const handleOnChange = () => {
    const provider = providerRef.current.value;
    const url = urlRef.current.value;

    const autoplay = autoplayRef.current.checked;
    const loop = loopRef.current.checked;
    const control = controlRef.current.checked;

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = {
          provider,
          url,
          videoFormat: { autoplay, loop, control }
        };
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(handleOnChange, []);

  return (
    <div className="audioSettings">
      <h3>Audio</h3>
      <form onChange={handleOnChange}>
        <div>
          <label>Provider: </label>
          <select
            defaultValue={VD ? VD.provider : VIDEO_PROVIDER_LIST[0]}
            ref={providerRef}
            onChange={handleOnChange}
          >
            {AUDIO_PROVIDER_LIST.map((provider, i) => (
              <option key={i} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Source: </label>
          <input
            placeholder="URL"
            ref={urlRef}
            defaultValue={VD ? VD.url : ""}
            onChange={handleOnChange}
          />
        </div>
        <div>
          {FORMAT_LIST.map((item, i) => (
            <span key={uuid.v4()}>
              <label>{item.label}</label>
              <input
                type="checkbox"
                name={item.name}
                defaultChecked={
                  VD ? VD.videoFormat[item.name] : item.defaultVal
                }
                onChange={handleOnChange}
                ref={arrOfRefs[i]}
              />
            </span>
          ))}
        </div>
      </form>
    </div>
  );
};

export default Video;
