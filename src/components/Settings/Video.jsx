import React, { useEffect, useRef } from "react";
import { VIDEO_PROVIDER_LIST, FORMAT_LIST } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../Constants/";
import { updateElementData } from "../Constants/index";

const Video = () => {
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
    const url = urlRef.current.value;

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
    <div className="videoSettings">
      <h3>Video</h3>
      <form>
        <div>
          <label>Provider: </label>
          <select
            value={VD ? VD.provider : VIDEO_PROVIDER_LIST[0]}
            onChange={handleOnChange}
            ref={providerRef}
          >
            {VIDEO_PROVIDER_LIST.map(provider => (
              <option key={provider.id} value={provider.name}>
                {provider.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Source: </label>
          <input
            placeholder="URL"
            ref={urlRef}
            onChange={handleOnChange}
            value={VD ? VD.url : ""}
          />
        </div>
        <div>
          {FORMAT_LIST.map((item, i) => (
            <span
              key={item.id}
              style={{
                display: item.for.includes(
                  VD ? VD.provider : VIDEO_PROVIDER_LIST[0]
                )
                  ? "initial"
                  : "none"
              }}
            >
              <label>{item.label}</label>
              <input
                type="checkbox"
                name={item.name}
                onChange={handleOnChange}
                checked={VD ? VD.videoFormat[item.name] : item.defaultVal}
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
