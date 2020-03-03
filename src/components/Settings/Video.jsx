import React, { useRef } from "react";
import { VIDEO_PROVIDER_LIST, FORMAT_LIST } from "../../configs/constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../../utils/getActiveEl";
import { updateElementData } from "../../utils/updateElData";

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
  
  return (
    <div className="videoSettings">
      <h3>Video</h3>
      <form>
        <div className="videoSettings-provider">
          <label>Provider: </label>
          <select
            value={VD.provider}
            onChange={handleOnChange}
            ref={providerRef}
            allowFullScreen
            className="select-box"
          >
            {VIDEO_PROVIDER_LIST.map(provider => (
              <option key={provider.id} value={provider.name}>
                {provider.name}
              </option>
            ))}
          </select>
        </div>

        <div className="videoSettings-source">
          <label>Source: </label>
          <input
            placeholder="URL"
            ref={urlRef}
            onChange={handleOnChange}
            value={VD.url}
          />
        </div>
        <div className="videoSettings-format">
          {FORMAT_LIST.map((item, i) => (
            <span
              key={item.id}
              style={{
                display: item.for.includes(VD.provider) ? "flex" : "none"
              }}
            >
              <label>{item.label}</label>
              <input
                type="checkbox"
                name={item.name}
                onChange={handleOnChange}
                checked={VD.videoFormat[item.name]}
                ref={arrOfRefs[i]}
              />
            </span>
          ))}
        </div>
      </form>
      <p>https://www.youtube.com/watch?v=mWZ6b_I-Djg</p>
    </div>
  );
};

export default Video;
