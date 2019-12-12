import React from "react";
import wrapper from "../wrapper";
import ContentEditable from 'react-contenteditable';
import { INITIAL_TEXT_DATA } from "..";



const Text = ( props ) => {

    const { isActive, handleCardDataUpdate } = props;
    

    const contentEditable = React.createRef();

    const [html, setHtml] = React.useState(INITIAL_TEXT_DATA);
    React.useEffect(() => {
        handleCardDataUpdate(html);
   }, [html])


    return (
        <div className='cardContainer'>
            <div className="text-object" style={{border: isActive? '1px dashed black' : ''}} >
                <ContentEditable
                    innerRef={contentEditable}
                    html={html}
                    disabled={false}
                    onChange={e => setHtml(e.target.value)}
                    tagName='article'
                    style={{outline: 'none'}}
                    />
            </div>
        </div>
    )
}



export default wrapper(Text);