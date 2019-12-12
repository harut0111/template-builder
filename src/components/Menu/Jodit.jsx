import React from 'react';

import 'jodit';
import 'jodit/build/jodit.min.css';
import JoditEditor from "jodit-react";

class Example  extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            content: 'content',
        }
    }

    updateContent(value) {
        this.setState({content:value})
    }

    render() {
        return <JoditEditor
            value={this.state.content}
            config={{
                readonly: false // all options from https://xdsoft.net/jodit/play.html
            }}
            onChange={this.updateContent.bind(this)}
        />
    }
}

export default Example;