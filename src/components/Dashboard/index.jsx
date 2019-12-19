import React from "react";
import { connect } from 'react-redux'
import uuid from "uuid";

import { EL_LIST, filterElement, EL_DATA_LIST } from "../Constants";
import Toolbar from "../../core/Toolbar";
import { dispatchFilteredEls, dispatchId, dispatchLayouts } from "../../redux/action";

const Dashboard = (props) => {
  
  const {layout, dispatchFilteredEls, dispatchId, dispatchLayouts} = props;

  
  console.log('layout', layout);

  const handleOnDrop = e => {
    const elLabel = e.dataTransfer.getData("text/plain");
    const el = EL_LIST.filter(el => el.label === elLabel)[0];
    
    dispatchLayouts(el, () => uuid.v4())
  };

  const handleOnToolClick = (ev, id) => {
    ev.stopPropagation();
    const filteredEls = filterElement(layout, id);
    dispatchFilteredEls(filteredEls);
  };



  return (
    <div className="dashboard">
      <div className="dashboard-main">
        <div className="dashboard-main-header">dashboard-main-header</div>
        <div
          className="dashboard-main-body"
          onDrop={handleOnDrop}
          onDragOver={e => e.preventDefault()}
        >
          {layout.elements.map(el => (
            <div
              className={`element ${
                el.elId === layout.activeEl.id ? "element-active" : ""
              }`}
              key={el.elId}
              onClick={() => dispatchId(el.elId)}
            >
              <Toolbar
                className={"textSettings-toolbar"}
                onClick={ev => handleOnToolClick(ev, el.elId)}
              />
              {EL_DATA_LIST.map((item, i) =>
                item.label === el.elLabel ? (
                  <div key={el.elId + i}><item.Data  elData={el.elData} /></div>
                ) : null  
              )}
            </div>
          ))}
        </div>
        <div className="dashboard-main-footer">dashboard-main-footer</div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layout,
  }
}

const mapDispatchToProps = {
    dispatchFilteredEls,
    dispatchId,
    dispatchLayouts,
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
