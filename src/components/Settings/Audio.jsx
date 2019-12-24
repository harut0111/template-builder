import React, { useState, useEffect } from "react";
import uuid from "uuid";

import { VIDEO_PROVIDER_LIST, AUDIO_PROVIDER_LIST } from "../Constants";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../Constants/";

const Audio = () => {
  const [{ layout }, dispatch] = useStateValue();

  const [provider, setProvider] = useState(VIDEO_PROVIDER_LIST[0]);
  const [url, setUrl] = useState("");
  const [videoFormat, setVideFormat] = useState({
    autoplay: false,
    loop: false,
    control: true
  });

  const VD = getActiveEl(layout).elData;

  useEffect(() => {
    if (VD) {
      setProvider(VD.provider);
      setUrl(VD.url);
      setVideFormat(VD.videoFormat);
    }
  }, [VD]);

  const handleOnSubmit = ev => {
    ev.preventDefault();

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = {
          provider,
          url,
          videoFormat
        };
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  const handleCheckboxChange = e => {
    setVideFormat({
      ...videoFormat,
      [e.target.name]: !videoFormat[e.target.name]
    });
  };

  return (
    <div className="videoSettings">
      <h3>Video</h3>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Provider: </label>
          <select
            value={provider.value}
            onChange={e => setProvider({ ...provider, value: e.target.value })}
          >
            {VIDEO_PROVIDER_LIST.map((item, i) => (
              <option key={i} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>

        <div>
          <label>Source: </label>
          <input
            placeholder="URL"
            value={url}
            onChange={e => setUrl(e.target.value)}
          />
        </div>

        {AUDIO_PROVIDER_LIST.map(item => (
          <span key={uuid.v4()}>
            <label>{item.label}</label>
            <input
              type="checkbox"
              name={item.name}
              checked={videoFormat[item.name]}
              onChange={handleCheckboxChange}
            />
          </span>
        ))}
        <input type="submit" value="Ok" />
      </form>
    </div>
  );
};

export default Audio;
