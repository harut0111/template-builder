import React from "react";
import uuid from "uuid";
import Settings from "../Settings";
import { useStateValue } from "../../context";

import { EL_LIST, BAR_LIST, INITIAL_STATE } from "../../configs/constants";
import { addNewElement, setBarIndex } from "../../context/actions";

const Menu = () => {
  const [{ layout }, dispatchLayouts] = useStateValue();

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
                    layout.activeEl.id ? dispatchLayouts(setBarIndex(i)) : null
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
                onClick={() =>
                  dispatchLayouts(addNewElement(el, uuid, INITIAL_STATE))
                }
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
