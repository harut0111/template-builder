import htmlToDraft from "html-to-draftjs";
import { EditorState, ContentState } from "draft-js";

//  const useEditorState = (params) => {

//     const [editorState, setEditorState] = React.useState(
//         EditorState.createEmpty()
//       );

//     const htmlToDraftJs = html => {

//         const blocksFromHtml = htmlToDraft(html);
//         const { contentBlocks, entityMap } = blocksFromHtml;
//         const contentState = ContentState.createFromBlockArray(
//           contentBlocks,
//           entityMap
//         );
//         const editorState = EditorState.createWithContent(contentState);
//         return editorState;
//       };

//       const markup = draftToHtml(convertToRaw(editorState.getCurrentContent()))

//       return markup

// }

// export default useEditorState;

export const htmlToDraftJs = html => {
  const blocksFromHtml = htmlToDraft(html);
  const { contentBlocks, entityMap } = blocksFromHtml;
  const contentState = ContentState.createFromBlockArray(
    contentBlocks,
    entityMap
  );
  const editorState = EditorState.createWithContent(contentState);
  return editorState;
};
