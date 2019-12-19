import React from "react";
import { getActiveEl } from "../Constants";
import RichTextEditor from 'react-rte';
import { connect } from 'react-redux'
import { dispatchTextData } from '../../redux/action'

const TextSettings = ({layout, dispatchTextData}) => {


  // const [content, setContent] = React.useState(
  //   RichTextEditor.createEmptyValue()
  // );


  // const handleOnChange = val => {
  //   const elements = [...layout.elements];
  //   elements.forEach((element, i) => {
  //     if (element.elId === layout.activeEl.id) {
  //       elements[i].elData = val;
  //     }
  //   });
  //   // dispatch({ type: UPDATE_ELEMENT, payload: elements });
  //   dispatchTextData(val, layout)
  // };

 

  return (
    <div className="textSettings">
      <h3>TEXT</h3>
      <RichTextEditor
        className="textEditor"
        autoFocus
        value={getActiveEl(layout).elData || RichTextEditor.createEmptyValue()}
        onChange={val => dispatchTextData(val, layout)}
      />
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layout
  }
}

const mapDispatchToPorps = {
  dispatchTextData
}

export default connect(mapStateToProps, mapDispatchToPorps)(TextSettings);
