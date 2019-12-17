import React, { useState } from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

// import { getActiveEl } from "../Constants";
import uuid from "uuid";
import { PROVIDER_LIST, VIDEO_FORMAT_LIST } from "../Constants";

const Video = () => {
  const [{ layout }, dispatch] = useStateValue();

  console.log('layout', layout);

  const [provider, setProvider] = useState(PROVIDER_LIST[0]);
  const [url, setUrl] = useState('')
  const [videFormat, setVideFormat] = useState({
    autoplay: false,
    loop: false,
    control: false
  });

  const handleOnChange = ev => {

    ev.preventDefault();

    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = {provider: provider.value, url, videFormat};
      }
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  const handleCheckboxChange = e => {
    setVideFormat({
      ...videFormat,
      [e.target.name]: !videFormat[e.target.name]
    });
  };

  return (
    <div className="videoSettings">
      <h3>Video</h3>
      <form onChange={handleOnChange}>
        <div>
          <label>Provider: </label>
          <select
            value={provider}
            onChange={e => setProvider({...provider, value: e.target.value})}
          >
            {PROVIDER_LIST.map(item => (
              <option key={uuid.v4()} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Source: </label>
          <input placeholder="URL" value={url} onChange={e => setUrl(e.target.value)}/>
        </div>
        <div>
          {VIDEO_FORMAT_LIST.map(item => (
            <span key={uuid.v4()}>
              <label>{item.label}</label>
              <input
                type="checkbox"
                name={item.name}
                checked={videFormat[item.name]}
                onChange={handleCheckboxChange}
              />
            </span>
          ))}
        </div>
      </form>
      {/* <input
        type="number"
        value={getActiveEl(layout).elData || ""}
        onChange={ev => handleOnChange(ev.target.value)}
      /> */}
    </div>
  );
};

export default Video;
