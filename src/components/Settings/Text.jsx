import React from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/reducer";
import { getActiveEl } from "../Constants";

const TextSettings = () => {
  const [{ layout }, dispatch] = useStateValue();


  // const [content, setContent] = React.useState(
  //   RichTextEditor.createEmptyValue()
  // );


  const handleOnChange = val => {
    const elements = [...layout.elements];
    elements.forEach((element, i) => {
      if (element.elId === layout.activeEl.id) {
        elements[i].elData = val;
      }
    });

    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  return (
    <div className="textSettings">
      {/* <RichTextEditor
        className="textEditor"
        autoFocus
        value={getActiveEl(layout) || RichTextEditor.createEmptyValue()}
        onChange={val => handleOnChange(val)}
      /> */}


      <input
        type="text"
        placeholder='type some text'
        value={getActiveEl(layout).elData || ''}
        onChange={ev => handleOnChange(ev.target.value)}
      />
    </div>
  );
};

export default TextSettings;
