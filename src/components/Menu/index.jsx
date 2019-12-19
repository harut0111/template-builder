import React from "react";
import uuid from "uuid";
import Settings from "../Settings";
import { connect } from 'react-redux'
import { EL_LIST, BAR_LIST } from "../Constants";
import { dispatchBarIndex, dispatchLayouts } from '../../redux/action'


const Menu = (props) => {

  const {layout, dispatchBarIndex, dispatchLayouts} = props;
  

  // const handleOnClick = el => {
  //   // dispatchLayouts({
  //   //   type: ADD_NEW_ELEMENT,
  //   //   payload: {
  //   //     elLabel: el.label,
  //   //     elId: uuid.v4(),
  //   //     ElSettings: <el.Settings />,
  //   //     elData: null
  //   //   }
  //   // });
  // };

  return (
    <div className="menu">
      <div className="menu-main">
        <div className="menu-main-navbar">
          <nav>
            <ul>
              {BAR_LIST.map((text, i) => (
                <li
                  key={uuid.v4()}
                  className={`bar ${
                    layout.activeBarIndex === i ? "bar-active" : ""
                  }`}
                  onClick={() =>
                    layout.activeEl.id
                      ? dispatchBarIndex(i)
                      : null
                  }
                >
                  {text}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="menu-main-body">
          {layout.activeBarIndex ? (
            <Settings />
          ) : (
            EL_LIST.map(el => (
              <div
                key={uuid.v4()}
                className="element"
                draggable={true}
                unselectable="on"
                onDragStart={e =>
                  e.dataTransfer.setData("text/plain", el.label)
                }
                id={el.label}
                onClick={() => dispatchLayouts(el, () => uuid.v4())}
              >
                {<el.Icon size="22px" />}
                <span>{el.label}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    layout: state.layout
  }
}

const mapDispatchToProps = {
  dispatchBarIndex,
  dispatchLayouts
}

export default connect(mapStateToProps, mapDispatchToProps)(Menu);
