import React, { useRef } from "react";
import { useStateValue } from "../../context";
// import { UPDATE_ELEMENT } from "../../context/actions";

// import { getActiveEl } from "../Constants";
// import uuid from "uuid";
import { PROVIDER_LIST } from "../Constants";

const Video = () => {
  const [{ layout }, dispatch] = useStateValue();

  const urlRef = useRef(null);
  const providerRef = useRef(null);

  const autoplayRef = useRef(null);
  const loopRef = useRef(null);
  const controlRef = useRef(null);

  const handleOnSubmit = ev => {
    ev.preventDefault();

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
    // dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  return (
    <div className="videoSettings">
      <h3>Video</h3>
      <form onSubmit={handleOnSubmit}>
        <div>
          <label>Provider: </label>
          <select ref={providerRef}>
            {PROVIDER_LIST.map((item, i) => (
              <option key={i} value={item.value}>
                {item.name}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label>Source: </label>
          <input placeholder="URL" ref={urlRef} />
        </div>
        <div>
          <span>
            <label>Autoplay: </label>
            <input type="checkbox" ref={autoplayRef} />
          </span>
          <span>
            <label>Loop: </label>
            <input type="checkbox" ref={loopRef} />
          </span>
          <span>
            <label>Control: </label>
            <input type="checkbox" ref={controlRef} />
          </span>
        </div>
        <input type="submit" value="Ok" />
      </form>
    </div>
  );
};

export default Video;
