import React, { useEffect, useRef } from "react";
import uuid from "uuid";

import {
  VIDEO_PROVIDER_LIST,
  FORMAT_LIST,
  AUDIO_PROVIDER_LIST,
} from "../../configs/constants";
import { updateElementData } from '../../utils/updateElData'
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../../utils/getActiveEl";

const Audio = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

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
    const url = urlRef.current.value.trim();

    const autoplay = autoplayRef.current.checked;
    const loop = loopRef.current.checked;
    const control = controlRef.current.checked;

    const elements = updateElementData(els, activeElId, {
      provider,
      url,
      videoFormat: { autoplay, loop, control }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  useEffect(handleOnChange, []);

  return (
    <div className="audioSettings">
      <h3>Audio</h3>
      <form>
        <div className="audioSettings-provider">
          <label>Provider: </label>
          <select
            onChange={handleOnChange}
            value={VD ? VD.provider : VIDEO_PROVIDER_LIST[0]}
            ref={providerRef}
            className="select-box"
          >
            {AUDIO_PROVIDER_LIST.map((provider, i) => (
              <option key={i} value={provider}>
                {provider}
              </option>
            ))}
          </select>
        </div>

        <div className="audioSettings-source">
          <label>Source: </label>
          <input
            placeholder="URL"
            ref={urlRef}
            value={VD ? VD.url : ""}
            onChange={handleOnChange}
          />
        </div>
        <div className="audioSettings-format">
          {FORMAT_LIST.map((item, i) => (
            <span key={uuid.v4()}>
              <label>{item.label}</label>
              <input
                type="checkbox"
                name={item.name}
                checked={VD ? VD.videoFormat[item.name] : item.defaultVal}
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

export default Audio;