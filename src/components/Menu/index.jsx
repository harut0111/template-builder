import React, { useState } from "react";
import { MdTextFields } from "react-icons/md";
import { TiDivideOutline } from "react-icons/ti";
import { FaRegPlayCircle, FaImage } from "react-icons/fa";
import { IoIosImages, IoMdShare } from "react-icons/io";
import { FiHeadphones, FiLink2, FiMapPin } from "react-icons/fi";
import uuid from "uuid";

import { useStateValue } from "../../context";

import { ADD_NEW_ELEMENT, SET_BAR_INDEX } from "../../context/reducer";
import Settings from "../Settings";

import Text from "../Settings/Text";
import Video from "../Settings/Video";
import Image from "../Settings/Image";
import Slider from "../Settings/Slider";
import SocialMedia from "../Settings/SocialMedia";
import Audio from "../Settings/Audio";
import Map from "../Settings/Map";
import LinkButton from "../Settings/LinkButton";
import Divider from "../Settings/Divider";

export const EL_LIST = [
  { label: "Text", Icon: MdTextFields, Settings: Text },
  { label: "Video", Icon: FaRegPlayCircle, Settings: Video },
  { label: "Image", Icon: FaImage, Settings: Image },
  { label: "Slider", Icon: IoIosImages, Settings: Slider },
  { label: "Social Media", Icon: IoMdShare, Settingscard: SocialMedia },
  { label: "Audio", Icon: FiHeadphones, Settings: Audio },
  { label: "Map", Icon: FiMapPin, Settings: Map },
  { label: "Link/Button", Icon: FiLink2, Settings: LinkButton },
  { label: "Divider", Icon: TiDivideOutline, Settings: Divider }
];

const Menu = () => {

  const barList = ["Elements", "Component Settings"];
  const [{ layout }, dispatchLayouts] = useStateValue();

  // console.log("layout.activeEl", layout.activeEl);

  const handleOnClick = el => {
    dispatchLayouts({
      type: ADD_NEW_ELEMENT,
      payload: {
        elId: uuid.v4(),
        ElSettings: <el.Settings />,
        elData: null
      }
    });
  };

  return (
    <div className="menu">
      <div className="menu-main">
        <div className="menu-main-navbar">
          <nav>
            <ul>
              {barList.map((text, i) => (
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
            EL_LIST.map((el, i) => (
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
