import React from "react";
import uuid from "uuid";
import Settings from "../Settings";
import { useStateValue } from "../../context";
import { ADD_NEW_ELEMENT, SET_BAR_INDEX } from "../../context/actions";
import { EL_LIST, BAR_LIST } from "../../configs/constants";

const Menu = () => {
  const [{ layout }, dispatchLayouts] = useStateValue();

  const formEldata = type => {
    switch (type) {
      
      // Text
      case EL_LIST[0].label:
        return { markup: "<p></p>" };
      // Video
      case EL_LIST[1].label:
        return {
          provider: "YouTube",
          url: "",
          videoFormat: { autoplay: false, loop: false, control: true }
        };
      // 
      case EL_LIST[2].label:
        return { url: { value: "", validity: false }, imgSrc: "" };
      // Slider
      case EL_LIST[3].label:
        return {
          duration: 1000,
          imgSrc: [
            { id: uuid.v4(), value: null },
            { id: uuid.v4(), value: null }
          ]
        };
      // SocialMedia
      case EL_LIST[4].label:
        return [{ socialMedia: "Facebook", url: "", id: uuid.v4() }];

      // Audio
      case EL_LIST[5].label:
        return {
          provider: "YouTube",
          url: "",
          videoFormat: { autoplay: false, loop: false, control: true }
        };

      // Map
      case EL_LIST[6].label:
        return { address: "", zoom: 7 };

      // LinkButton
      case EL_LIST[7].label:
        return {
          btnText: "",
          btnColor: "#ffffff",
          url: "",
          bgColor: "#000000",
          borderType: "solid"
        };
    
      // Divider
      case EL_LIST[8].label:
        return {
          borderType: "solid",
          borderWidth: "1",
          borderColor: "#000000"
        };
      default:
        return null;
    }
  };

  const handleOnClick = el => {
    dispatchLayouts({
      type: ADD_NEW_ELEMENT,
      payload: {
        elLabel: el.label,
        elId: uuid.v4(),
        elData: formEldata(el.label)
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
