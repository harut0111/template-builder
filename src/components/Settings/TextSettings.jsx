import React from 'react';
import RichTextEditor from 'react-rte';
 
const TextSettings = () => {

  const [content, setContent] = React.useState(RichTextEditor.createEmptyValue());

  console.log('content', content.toString('html'))

  return (
    <div className='textSettings'>
      <RichTextEditor
        className='textEditor'
        autoFocus
        value={content}
        onChange={(val) => setContent(val)}
      />
    </div>
  )
}

export default TextSettings