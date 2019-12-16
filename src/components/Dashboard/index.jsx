import React from "react";
import { useStateValue } from "../../context";
import { ADD_NEW_ELEMENT } from "../../context/reducer";
import { EL_LIST } from "../Menu";
import uuid from "uuid";

const Dashboard = () => {
  const [{ layout }, dispatchLayouts] = useStateValue();

  const handleOnDrop = e => {
    
    const elLabel = e.dataTransfer.getData("text/plain");
    const Settings = EL_LIST.filter(el => elLabel === el.label)[0].Settings;

    dispatchLayouts({
      type: ADD_NEW_ELEMENT,
      payload: {
        elId: uuid.v4(),
        ElSettings: <Settings />,
        elData: null
      }
    });
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
                {el.elData}
              </div>
            ) : (
              <div
                style={{ border: "1px solid gray", padding: "5px" }}
                className="element"
                key={el.elId}
              >
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
