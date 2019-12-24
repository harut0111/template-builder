import React from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../Constants";
import RichTextEditor from "react-rte";

const Text = () => {
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
      <h3>TEXT</h3>
      <RichTextEditor
        className="textEditor"
        autoFocus
        value={getActiveEl(layout).elData || RichTextEditor.createEmptyValue()}
        onChange={val => handleOnChange(val)}
      />
    </div>
  );
};

export default Text;
