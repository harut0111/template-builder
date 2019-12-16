import React from "react";
import { useStateValue } from "../../context";
import { ADD_NEW_ELEMENT, REMOVE_ELEMENT } from "../../context/reducer";
import uuid from "uuid";
import { EL_LIST, filterElement } from "../Constants";
import Toolbar from "../../core/Toolbar";

const Dashboard = () => {
  const [{ layout }, dispatch] = useStateValue();

  const handleOnDrop = e => {
    const elLabel = e.dataTransfer.getData("text/plain");
    const Settings = EL_LIST.filter(el => el.label === elLabel )[0].Settings;

    dispatch({
      type: ADD_NEW_ELEMENT,
      payload: {
        elId: uuid.v4(),
        ElSettings: <Settings />,
        elData: null
      }
    });
  };

  const handleOnClick = id => {
    const filteredEls = filterElement(layout, id);
    dispatch({ type: REMOVE_ELEMENT, payload: filteredEls });
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
          {layout.elements.map(el =>
            el.elId === layout.activeEl.id ? (
              <div
                style={{ border: "2px solid lightgreen", padding: "5px" }}
                className="element"
                key={el.elId}
              >
                <Toolbar
                  className={"textSettings-toolbar"}
                  onClick={() => handleOnClick(el.elId)}
                />
                {el.elData}
              </div>
            ) : (
              <div
                style={{ border: "1px solid gray", padding: "5px" }}
                className="element"
                key={el.elId}
              >
                <Toolbar
                  className={"textSettings-toolbar"}
                  onClick={() => handleOnClick(el.elId)}
                />
                {el.elData}
              </div>
            )
          )}
        </div>
        <div className="dashboard-main-footer">dashboard-main-footer</div>
      </div>
    </div>
  );
};

export default Dashboard;
