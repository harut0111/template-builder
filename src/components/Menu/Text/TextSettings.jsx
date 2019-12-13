import React from 'react';
import RichTextEditor from 'react-rte';
 
const TextSettings = () => {

  const [content, setContent] = React.useState(RichTextEditor.createEmptyValue());

  console.log('content', content.toString('html'))

  return (
    <div>
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


// import React, {Component} from 'react';
// import RichTextEditor from 'react-rte';
// class TextSettings extends Component {
  

//   state = {
//     value: RichTextEditor.createEmptyValue()
//   }

//   onChange = (value) => {
//     this.setState({value});
//   };

//   render () {
//     return (
//       <RichTextEditor
//         className='textEditor'
//         value={this.state.value}
//         onChange={this.onChange}
//       />
//     );
//   }
// }

// export default TextSettings;