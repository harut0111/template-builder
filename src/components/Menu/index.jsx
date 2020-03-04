import React from "react";
import uuid from "uuid";
import Settings from "../Settings";
import { useStateValue } from "../../context";
import { ADD_NEW_ELEMENT, SET_BAR_INDEX } from "../../context/actions";
import { EL_LIST, BAR_LIST, initialState } from "../../configs/constants";

const Menu = () => {
  const [{ layout }, dispatchLayouts] = useStateValue();

  const handleOnClick = el => {
    dispatchLayouts({
      type: ADD_NEW_ELEMENT,
      payload: {
        elLabel: el.label,
        elId: uuid.v4(),
        elData: initialState(el.label)
      }
    });
  };

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
                      ? dispatchLayouts({ type: SET_BAR_INDEX, payload: i })
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
                onClick={() => handleOnClick(el)}
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

export default Menu;
