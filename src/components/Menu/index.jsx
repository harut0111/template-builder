import React, { useState } from "react";
import { MdTextFields } from "react-icons/md";
import { TiDivideOutline } from "react-icons/ti";
import { FaRegPlayCircle, FaImage } from "react-icons/fa";
import { IoIosImages, IoMdShare } from "react-icons/io";
import { FiHeadphones, FiLink2, FiMapPin } from "react-icons/fi";

import Text from "./";
import Video from "./";
import Image from './';
import Slider from './';
import SocialMedia from './';
import Audio from './';
import Map from './';
import LinkButton from './';
import Divider from './';

import { useStateValue } from "../../context";

import { ADD_LAYOUT } from "../../context/reducer";
import ComponentSettings from "./ComponentSettings";

export const CARD_LIST = [
    { card: Text, name: "Text" },
    { card: Video, name: "Video" },
    { card: Image, name: "Image" },
    { card: Slider, name: "Slider" },
    { card: SocialMedia, name: "Social Media" },
    { card: Audio, name: "Audio" },
    { card: Map, name: "Map" },
    { card: LinkButton, name: "Link/Button" },
    { card: Divider, name: "Divider" }
  ];

const Menu = () => {
  const [barIndex, setBarIndex] = useState(0);
  const [elementIndex, setElementIndex] = useState(null);
  const barList = ["Elements", "Component Settings"];

  const [{ layouts }, dispatchLayouts] = useStateValue();

  const elements = [
    { icon: MdTextFields, text: "Text" },
    { icon: FaRegPlayCircle, text: "Video" },
    { icon: FaImage, text: "Image" },
    { icon: IoIosImages, text: "Slider" },
    { icon: IoMdShare, text: "Social Media" },
    { icon: FiHeadphones, text: "Audio" },
    { icon: FiMapPin, text: "Map" },
    { icon: FiLink2, text: "Link/Button" },
    { icon: TiDivideOutline, text: "Divider" }
  ];



  const addLayout = type => {
    CARD_LIST.forEach(item => {
      if (item.name === type) {
        dispatchLayouts({
          type: ADD_LAYOUT,
          payload: Object.assign({}, layouts, {
            items: [
              ...layouts.items,
              {
                i: `${type}-${layouts.newCounter}`,
                x: (layouts.items.length * 2) % (layouts.cols || 12),
                y: Infinity, // puts it at the bottom
                w: 1,
                h: 1
              }
            ],
            newCounter: layouts.newCounter + 1
          })
        });
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
                  key={i}
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
            <ComponentSettings />
          ) : (
            elements.map((element, i) => (
              <div
                key={i}
                className={`element ${
                  elementIndex === i ? "element-active" : ""
                }`}
                draggable={true}
                unselectable="on"
                onDragStart={e =>
                  e.dataTransfer.setData("text/plain", element.text)
                }
                onClick={() => {
                  addLayout(element.text);
                  setElementIndex(i);
                }}
                id={element.text}
              >
                {<element.icon size="22px" />}
                <span>{element.text}</span>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
};

export default Menu;