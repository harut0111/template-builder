import { MdTextFields } from "react-icons/md";
import { TiDivideOutline } from "react-icons/ti";
import { FaRegPlayCircle, FaImage } from "react-icons/fa";
import { IoIosImages, IoMdShare } from "react-icons/io";
import { FiHeadphones, FiLink2, FiMapPin } from "react-icons/fi";

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
  { label: "Social Media", Icon: IoMdShare, Settings: SocialMedia },
  { label: "Audio", Icon: FiHeadphones, Settings: Audio },
  { label: "Map", Icon: FiMapPin, Settings: Map },
  { label: "Link/Button", Icon: FiLink2, Settings: LinkButton },
  { label: "Divider", Icon: TiDivideOutline, Settings: Divider }
];

export const BAR_LIST = ["Elements", "Component Settings"];

export const getActiveEl = layout => {
  const filteredItem = layout.elements.filter(
    el => el.elId === layout.activeEl.id
  );
  return filteredItem[0];
};


export const filterElement = (layout, id) => {
  const filteredItem = layout.elements.filter(
    el => el.elId !== id
  );
  return filteredItem;
};


