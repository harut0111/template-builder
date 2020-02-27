import React from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";
import { getActiveEl } from "../../utils/getActiveEl";
import RichTextEditor from "react-rte";

import { EditorState, convertToRaw, convertFromRaw } from "draft-js";
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";

import draftToHtml from 'draftjs-to-html';
// import draftToMarkdown from 'draftjs-to-markdown';
// import htmlToDraft from 'html-to-draftjs';

const Text = () => {
  // const [editorState, setEditorState] = React.useState(
  //   EditorState.createEmpty()
  // );

  const initial = {"entityMap":{},"blocks":[{"key":"637gr","text":"Initialized from content state.","type":"unstyled","depth":0,"inlineStyleRanges":[],"entityRanges":[],"data":{}}]};
  // const [content, setContent] = React.useState({blocks: [{"text": "" }], entityMap: {} })
  const [content, setContent] = React.useState(initial)

  console.log('content', content)
  // console.log("editorState", editorState);

  // const jsObj = convertToRaw(editorState.getCurrentContent());
  const json = JSON.stringify(content)
  // console.log('jsObj', jsObj)
  // console.log('json', json)
  localStorage.setItem('content', json)

  
  // const convertedObj = JSON.parse(json);
  // console.log('convertedObj', convertedObj)


  const convertedObj = JSON.parse(localStorage.getItem('content'));

  // const state = convertFromRaw(convertedObj)
  // console.log('state', state)
  
  return (
    <div>
      <Editor
        // editorState={EditorState.createWithContent(state)}
        // initialContentState={{}}
        initialContentState={convertedObj}
        wrapperClassName="demo-wrapper"
        editorClassName="demo-editor"
        // onEditorStateChange={editorState => setEditorState(editorState)}
        onContentStateChange={data => setContent(data)}
      />
      {/* <textarea
        disabled
        // value={draftToHtml(convertToRaw(editorState.getCurrentContent()))}
        value={draftToHtml(content)}
      /> */}
      <div>
        {/* {<td dangerouslySetInnerHTML={{__html: draftToHtml(convertToRaw(editorState.getCurrentContent()))}} />} */}
        <div dangerouslySetInnerHTML={{__html: draftToHtml(content)}} />
      </div>
    </div>
  );
};

export default Text;

// const Text = () => {
//   const [{ layout }, dispatch] = useStateValue();

//   // const [content, setContent] = React.useState(
//   //   RichTextEditor.createEmptyValue()
//   // );

//   const handleOnChange = val => {
//     const elements = [...layout.elements];
//     elements.forEach((element, i) => {
//       if (element.elId === layout.activeEl.id) {
//         elements[i].elData = val;
//       }
//     });
//     dispatch({ type: UPDATE_ELEMENT, payload: elements });
//   };

//   return (
//     <div className="textSettings">
//       <h3>Text</h3>
//       <RichTextEditor
//         className="textEditor"
//         autoFocus
//         placeholder={"Type some text..."}
//         value={getActiveEl(layout).elData || RichTextEditor.createEmptyValue()}
//         onChange={val => handleOnChange(val)}
//       />
//     </div>
//   );
// };

// export default Text;
