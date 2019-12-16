import React, { useState } from "react";
import { MdTextFields } from "react-icons/md";
import { TiDivideOutline } from "react-icons/ti";
import { FaRegPlayCircle, FaImage } from "react-icons/fa";
import { IoIosImages, IoMdShare } from "react-icons/io";
import { FiHeadphones, FiLink2, FiMapPin } from "react-icons/fi";
import uuid from "uuid";

import { useStateValue } from "../../context";

import { ADD_NEW_ELEMENT } from "../../context/reducer";
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
  { label: "Text", icon: MdTextFields, Settings: Text },
  { label: "Video", icon: FaRegPlayCircle, Settings: Video },
  { label: "Image", icon: FaImage, Settings: Image },
  { label: "Slider", icon: IoIosImages, Settings: Slider },
  { label: "Social Media", icon: IoMdShare, Settingscard: SocialMedia },
  { label: "Audio", icon: FiHeadphones, Settings: Audio },
  { label: "Map", icon: FiMapPin, Settings: Map },
  { label: "Link/Button", icon: FiLink2, Settings: LinkButton },
  { label: "Divider", icon: TiDivideOutline, Settings: Divider }
];

const Menu = () => {
  const [barIndex, setBarIndex] = useState(0);
  const [elementIndex, setElementIndex] = useState(null);
  const barList = ["Elements", "Component Settings"];

  const [{ layout }, dispatchLayouts] = useStateValue();

  // const elements = [
  //   { icon: MdTextFields, text: "Text" },
  //   { icon: FaRegPlayCircle, text: "Video" },
  //   { icon: FaImage, text: "Image" },
  //   { icon: IoIosImages, text: "Slider" },
  //   { icon: IoMdShare, text: "Social Media" },
  //   { icon: FiHeadphones, text: "Audio" },
  //   { icon: FiMapPin, text: "Map" },
  //   { icon: FiLink2, text: "Link/Button" },
  //   { icon: TiDivideOutline, text: "Divider" }
  // ];

  // const addLayout = type => {
  //   CARD_LIST.forEach(item => {
  //     if (item.name === type) {
  //       dispatchLayouts({
  //         type: ADD_LAYOUT,
  //         payload: Object.assign({}, layouts, {
  //           items: [
  //             ...layouts.items,
  //             {
  //               i: `${type}-${layouts.newCounter}`,
  //               x: (layouts.items.length * 2) % (layouts.cols || 12),
  //               y: Infinity, // puts it at the bottom
  //               w: 1,
  //               h: 1
  //             }
  //           ],
  //           newCounter: layouts.newCounter + 1
  //         })
  //       });
  //     }
  //   });
  // };

  // console.log('layout', layout);

  const handleOnClick = el => {
    // console.log('el', el);
    setBarIndex(1);
    dispatchLayouts({
      type: ADD_NEW_ELEMENT,
      payload: {
        // elLabel: el.label,
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
                  className={`bar ${barIndex === i ? "bar-active" : ""}`}
                  onClick={() => setBarIndex(i)}
                >
                  {text}
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="menu-main-body">
          {barIndex ? (
            <Settings />
          ) : (
            EL_LIST.map((el, i) => (
              <div
                key={uuid.v4()}
                className={`element ${
                  elementIndex === i ? "element-active" : ""
                }`}
                draggable={true}
                unselectable="on"
                onDragStart={e =>
                  e.dataTransfer.setData("text/plain", el.label)
                }
                onClick={() => handleOnClick(el)}
                id={el.label}
              >
                {<el.icon size="22px" />}
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
