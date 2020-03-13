import React from "react";
import { useStateValue } from "../../context";
import {
  changeActiveElement,
  addNewElement,
  removeElement
} from "../../context/actions";
import uuid from "uuid";
import { EL_LIST, EL_DATA_LIST, INITIAL_STATE } from "../../configs/constants";
import { filterElement } from "../../utils/filterElement";
import Toolbar from "../../core/Toolbar";

const Dashboard = () => {
  const [{ layout }, dispatch] = useStateValue();
  const dashMainBodyRef = React.useRef(null);
  const dashMainRef = React.useRef(null);

  const handleOnDrop = e => {
    const elLabel = e.dataTransfer.getData("text/plain");
    const el = EL_LIST.filter(el => el.label === elLabel)[0];
    dispatch(addNewElement(el, uuid, INITIAL_STATE));
  };

  // handle scroll bar positiono based on active card's position
  React.useEffect(() => {
    const cardsHTMLCollection = dashMainBodyRef.current.children;
    const activeCard = [...cardsHTMLCollection].filter(
      card => card.id === layout.activeEl.id
    );
    if (layout.activeEl.id) {
      const currentOffset = activeCard[0].offsetTop;
      dashMainBodyRef.current.scrollTop =
        currentOffset - (100 + dashMainRef.current.offsetTop);
    }
  }, [layout.activeEl]);

  const handleOnToolClick = (ev, id, i) => {
    ev.stopPropagation();
    const filteredEls = filterElement(layout, id);
    dispatch(removeElement(filteredEls, i));
  };

  // const handleOnElementClick = id => {
  //   dispatch({ type: CHANGE_ACTIVE_ELEMENT, payload: id });
  // };

  const getElementData = el => (
    <>
      {EL_DATA_LIST.map(item =>
        item.label === el.elLabel ? (
          <item.Data key={item.id} elData={el.elData} />
        ) : null
      )}
    </>
  );

  return (
    <div className="dashboard">
      <div className="dashboard-main" ref={dashMainRef}>
        <div className="dashboard-main-header">Header</div>
        <div
          className="dashboard-main-body"
          onDrop={handleOnDrop}
          onDragOver={e => e.preventDefault()}
          ref={dashMainBodyRef}
        >
          {layout.elements.map((el, i) => (
            <div
              className={`element-wrapper ${
                el.elId === layout.activeEl.id ? "element-wrapper-active" : ""
              }`}
              key={el.elId}
              id={el.elId}
              onClick={() => dispatch(changeActiveElement(el.elId))}
            >
              <Toolbar
                className={"toolbar"}
                onClick={ev => handleOnToolClick(ev, el.elId, i)}
              />
              {getElementData(el)}
            </div>
          ))}
        </div>
        <div className="dashboard-main-footer">Footer</div>
      </div>
    </div>
  );
};

export default Dashboard;
