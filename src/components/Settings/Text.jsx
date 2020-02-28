import React from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { updateElementData } from "../../utils/updateElData";
import { convertToRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import draftToHtml from "draftjs-to-html";
import { htmlToDraftJs } from "../../utils/htmlToDraftJs";

const Text = () => {
  const [{ layout }, dispatch] = useStateValue();
  const els = layout.elements;
  const activeElId = layout.activeEl.id;

  const handleOnChange = editorState => {
    const markup = draftToHtml(convertToRaw(editorState.getCurrentContent()));
    const elements = updateElementData(els, activeElId, {
      markup
    });
    dispatch({ type: UPDATE_ELEMENT, payload: elements });
  };

  return (
    <div>
      <Editor
        defaultEditorState={htmlToDraftJs(localStorage.content)}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        onEditorStateChange={handleOnChange}
      />
    </div>
  );
};

export default Text;
