import React, { useRef } from "react";
import { VIDEO_PROVIDER_LIST, FORMAT_LIST } from "../../configs/constants";
import { useStateValue } from "../../context";
import { updateElState } from "../../context/actions";
import { getActiveEl } from "../../utils/getActiveEl";
import {
  setUrlVal,
  setVideoProviderVal,
  setVideoFormatVals
} from "../../utils/setStateValues";

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

  const handleOnVideoFormatChange = () => {
    dispatch(
      updateElState(
        setVideoFormatVals(
          { autoplayRef, loopRef, controlRef },
          els,
          activeElId
        )
      )
    );
  };

  const handleOnVideoProvChange = () => {
    dispatch(updateElState(setVideoProviderVal(providerRef, els, activeElId)));
  };

  const handleOnURLChange = () => {
    dispatch(updateElState(setUrlVal(urlRef, els, activeElId)));
  };

  return (
    <div className="videoSettings">
      <h3>Video</h3>
      <form>
        <div className="videoSettings-provider">
          <label>Provider: </label>
          <select
            value={VD.provider}
            onChange={handleOnVideoProvChange}
            ref={providerRef}
            allowFullScreen
            className="select-box"
          >
            {VIDEO_PROVIDER_LIST.map(provider => (
              <option key={provider.id} defaultValue={provider.name}>
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
            onChange={handleOnURLChange}
            defaultValue={VD.url.value}
            style={{ borderBottomColor: VD.url.validity ? "#ddd" : "red" }}
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
                onChange={handleOnVideoFormatChange}
                checked={VD.videoFormat[item.name]}
                ref={arrOfRefs[i]}
              />
            </span>
          ))}
        </div>
      </form>
      <p>
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.youtube.com/watch?v=Uy2PzVtUEEU"
        >
          Youtube Video Link
        </a>
      </p>

      <p>
        {" "}
        <a
          rel="noopener noreferrer"
          target="_blank"
          href="https://www.facebook.com/Armeniantouroperator/videos/457300855141378/"
        >
          Facebook Video Link
        </a>
      </p>
    </div>
  );
};

export default Video;
