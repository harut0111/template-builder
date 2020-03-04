import uuid from "uuid";

import { MdTextFields } from "react-icons/md";
import { TiDivideOutline } from "react-icons/ti";
import { FaRegPlayCircle, FaImage } from "react-icons/fa";
import { IoIosImages, IoMdShare } from "react-icons/io";
import { FiHeadphones, FiLink2, FiMapPin } from "react-icons/fi";
import { FaFacebook, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

import Text from "../../components/Settings/Text";
import Video from "../../components/Settings/Video";
import Image from "../../components/Settings/Image";
import Slider from "../../components/Settings/Slider";
import SocialMedia from "../../components/Settings/SocialMedia";
import Audio from "../../components/Settings/Audio";
import Map from "../../components/Settings/Map";
import LinkButton from "../../components/Settings/LinkButton";
import Divider from "../../components/Settings/Divider";

import TextData from "../../components/Dashboard/TextData";
import VideoData from "../../components/Dashboard/VideoData";
import MapData from "../../components/Dashboard/MapData";
import DividerData from "../../components/Dashboard/DividerData";
import ImageData from "../../components/Dashboard/ImageData";
import SliderData from "../../components/Dashboard/SliderData";
import SocialMediaData from "../../components/Dashboard/SocialMediaData";
import AudioData from "../../components/Dashboard/AudioData";
import LinkButtonData from "../../components/Dashboard/LinkButtonData";

export const LABELS = [
  "Text",
  "Video",
  "Image",
  "Slider",
  "Social Media",
  "Audio",
  "Map",
  "Link/Button",
  "Divider"
];
const ICONS = [
  MdTextFields,
  FaRegPlayCircle,
  FaImage,
  IoIosImages,
  IoMdShare,
  FiHeadphones,
  FiMapPin,
  FiLink2,
  TiDivideOutline
];
const SETS = [
  Text,
  Video,
  Image,
  Slider,
  SocialMedia,
  Audio,
  Map,
  LinkButton,
  Divider
];
const DATA = [
  TextData,
  VideoData,
  ImageData,
  SliderData,
  SocialMediaData,
  AudioData,
  MapData,
  LinkButtonData,
  DividerData
];
const VIDEO_PROVIDERS = ["YouTube", "Facebook"];
const SOCIAL_MEDIAS = ["Facebook", "Twitter", "Instagram", "YouTube"];
const SOCIAL_MEDIA_ICONS = [FaFacebook, FaTwitter, FaInstagram, FaYoutube];

export const BORDER_TYPE_LIST = ["solid", "dotted", "dashed", "double", "none"];
export const BAR_LIST = ["Elements", "Component Settings"];

export const EL_LIST = LABELS.map((label, i) => ({ label, Icon: ICONS[i] }));
export const EL_SETS_LIST = LABELS.map((label, i) => ({
  label,
  Sets: SETS[i]
}));
export const EL_DATA_LIST = LABELS.map((label, i) => ({
  label,
  Data: DATA[i],
  id: uuid.v4()
}));
export const VIDEO_PROVIDER_LIST = VIDEO_PROVIDERS.map(provider => ({
  name: provider,
  id: uuid.v4()
}));
export const AUDIO_PROVIDER_LIST = ["Soundcloud"];
export const SOCIAL_MEDIA_LIST = SOCIAL_MEDIAS.map((label, i) => ({
  label,
  Icon: SOCIAL_MEDIA_ICONS[i],
  id: uuid.v4()
}));

export const FORMAT_LIST = [
  {
    label: "Autoplay: ",
    id: uuid.v4(),
    name: "autoplay",
    // defaultVal: false,
    for: ["YouTube", "Facebook", "Twitter", "Instagram"]
  },
  {
    label: "Loop: ",
    id: uuid.v4(),
    name: "loop",
    // defaultVal: false,
    for: ["YouTube"]
  },
  {
    label: "Control: ",
    id: uuid.v4(),
    name: "control",
    // defaultVal: true,
    for: ["YouTube"]
  }
];

// all state initial data
export const initialState = type => {
  switch (type) {
    // Text
    case LABELS[0]:
      return { markup: "<p></p>" };
    // Video
    case LABELS[1]:
      return {
        provider: "YouTube",
        url: { value: "", validity: false },
        videoFormat: { autoplay: false, loop: false, control: true }
      };
    // Image
    case LABELS[2]:
      return { url: { value: "", validity: false }, imgSrc: "" };
    // Slider
    case LABELS[3]:
      return {
        duration: 1000,
        imgSrc: [
          { id: uuid.v4(), value: null },
          { id: uuid.v4(), value: null }
        ]
      };
    // SocialMedia
    case LABELS[4]:
      return [{ socialMedia: "Facebook", url: "", id: uuid.v4() }];

    // Audio
    case LABELS[5]:
      return {
        provider: "YouTube",
        url: "",
        videoFormat: { autoplay: false, loop: false, control: true }
      };

    // Map
    case LABELS[6]:
      return { address: "", zoom: 7 };

    // LinkButton
    case LABELS[7]:
      return {
        btnText: "",
        btnColor: "#ffffff",
        url: "",
        bgColor: "#000000",
        borderType: "solid"
      };

    // Divider
    case LABELS[8]:
      return {
        borderType: "solid",
        borderWidth: "1",
        borderColor: "#000000"
      };
    default:
      return null;
  }
};
