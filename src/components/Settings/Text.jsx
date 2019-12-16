import React from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT_DATA } from "../../context/reducer";

const TextSettings = () => {
  const [{ layout }, dispatch] = useStateValue();


  const getActiveEl = layout => {
    const filteredItem = layout.elements.filter(el => el.elId === layout.activeEl.id)
    return filteredItem[0];
  };



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

    dispatch({ type: UPDATE_ELEMENT_DATA, payload: elements });
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
