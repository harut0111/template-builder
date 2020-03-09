import React from "react";
import { useStateValue } from "../../context";
import { updateElState } from "../../context/actions";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { htmlToDraftJs } from "../../utils/htmlToDraftJs";
import { getActiveEl } from "../../utils/getActiveEl";
import { setTextVal } from "../../utils/setStateValues";

const Text = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const TD = getActiveEl(layout).elData;

  const handleOnStateChange = editorState => {
    dispatch(updateElState(setTextVal(editorState, els, activeElId)));
  };

  return (
    <div className="textSettings">
      <Editor
        defaultEditorState={htmlToDraftJs(TD.markup)}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={handleOnStateChange}
      />
    </div>
  );
};

export default Text;
