import React from "react";
import { useStateValue } from "../../context";
import {
  ADD_NEW_ELEMENT,
  REMOVE_ELEMENT,
  CHANGE_ACTIVE_ELEMENT
} from "../../context/actions";
import uuid from "uuid";
import { EL_LIST, filterElement, EL_DATA_LIST } from "../Constants";
import Toolbar from "../../core/Toolbar";

const Dashboard = () => {
  const [{ layout }, dispatch] = useStateValue();

  const handleOnDrop = e => {
    const elLabel = e.dataTransfer.getData("text/plain");
    const el = EL_LIST.filter(el => el.label === elLabel)[0];

    dispatch({
      type: ADD_NEW_ELEMENT,
      payload: {
        elLabel: el.label,
        elId: uuid.v4(),
        ElSettings: <el.Settings />,
        elData: null
      }
    });
  };

  const handleOnToolClick = (ev, id)=> {
    // console.log('id', id);
    ev.stopPropagation()
    const filteredEls = filterElement(layout, id);
    dispatch({ type: REMOVE_ELEMENT, payload: filteredEls });
  };

  const handleOnElementClick = id => {
    // console.log("id", id);
    dispatch({ type: CHANGE_ACTIVE_ELEMENT, payload: id });
  };

  // <item.Data elData={el.elData}/>:null
  // console.log('test', test);

  const test = (item, el) => {
    // console.log('item, el', item, el);
    if(item.label == el.elLabel) {
      console.log('asdfasfsdafas')
      return <item.Data/>
    }
    return null
  }

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
              className={`element ${el.elId === layout.activeEl.id ? 'element-active': ''}`}
              key={el.elId}
              onClick={() => handleOnElementClick(el.elId)}
            >
              <Toolbar
                className={"textSettings-toolbar"}
                onClick={(ev) => handleOnToolClick(ev,el.elId)}
              />
              {/* <div>asdf</div> */}
              {/* {console.log('el--->', el.elLabel)} */}
              {EL_DATA_LIST.map((item, i) => item.label === el.elLabel ? <item.Data key={uuid.v4()} elData={el.elData}/>: null) }
              {/* {<EL_DATA_LIST[1].Data /> */}
              {/* <div dangerouslySetInnerHTML={{ __html: el.elData && el.elData.toString('html') }} /> */}
            </div>
          ))}
        </div>
        <div className="dashboard-main-footer">dashboard-main-footer</div>
      </div>
    </div>
  );
};

export default Dashboard;
