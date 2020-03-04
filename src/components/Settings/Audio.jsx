import React, { useRef } from "react";
import uuid from "uuid";

import { FORMAT_LIST, AUDIO_PROVIDER_LIST } from "../../configs/constants";
import { useStateValue } from "../../context";
import { updateElState } from "../../context/actions";
import { getActiveEl } from "../../utils/getActiveEl";
import {
  setUrlVal,
  setVideoProviderVal,
  setVideoFormatVals
} from "../../utils/setStateValues";

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
    <div className="audioSettings">
      <h3>Audio</h3>
      <form>
        <div className="audioSettings-provider">
          <label>Provider: </label>
          <select
            onChange={handleOnVideoProvChange}
            value={VD.provider}
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
            onChange={handleOnURLChange}
            value={VD.url.value}
            style={{ borderBottomColor: VD.url.validity ? "#ddd" : "red" }}
          />
        </div>
        <div className="audioSettings-format">
          {FORMAT_LIST.map((item, i) => (
            <span key={uuid.v4()}>
              <label>{item.label}</label>
              <input
                type="checkbox"
                name={item.name}
                checked={VD.videoFormat[item.name]}
                onChange={handleOnVideoFormatChange}
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
