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

const LABELS = ["Text", "Video",  "Image", "Slider", "Social Media", "Audio", "Map", "Link/Button", "Divider"];
const ICONS = [MdTextFields, FaRegPlayCircle, FaImage, IoIosImages, IoMdShare, FiHeadphones, FiMapPin, FiLink2, TiDivideOutline];
const SETS = [Text, Video, Image, Slider, SocialMedia, Audio, Map, LinkButton, Divider];
const DATA = [TextData, VideoData, ImageData, SliderData, SocialMediaData, AudioData, MapData, LinkButtonData, DividerData];
const VIDEO_PROVIDERS = ["YouTube", "Facebook"];
const SOCIAL_MEDIAS = ["Facebook", "Twitter", "Instagram", "YouTube"];
const SOCIAL_MEDIA_ICONS = [FaFacebook, FaTwitter, FaInstagram, FaYoutube];

export const BORDER_TYPE_LIST = ["solid", "dotted", "dashed", "double", "none"];
export const BAR_LIST = ["Elements", "Component Settings"];

export const EL_LIST = LABELS.map((label, i) => ({label: label, Icon: ICONS[i]}));
export const EL_SETS_LIST = LABELS.map((label, i) => ({label: label, Sets: SETS[i]}));
export const EL_DATA_LIST = LABELS.map((label, i) => ({label: label, Data: DATA[i], id: uuid.v4()}));
export const VIDEO_PROVIDER_LIST = VIDEO_PROVIDERS.map((provider) => ({name: provider, id: uuid.v4()}))
export const AUDIO_PROVIDER_LIST = ["Soundcloud"];
export const SOCIAL_MEDIA_LIST = SOCIAL_MEDIAS.map((label, i) => ({label: label, Icon: SOCIAL_MEDIA_ICONS[i], id: uuid.v4()}))

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


// export const EL_LIST = [
//   { label: "Text", Icon: MdTextFields },
//   { label: "Video", Icon: FaRegPlayCircle },
//   { label: "Image", Icon: FaImage },
//   { label: "Slider", Icon: IoIosImages },
//   { label: "Social Media", Icon: IoMdShare },
//   { label: "Audio", Icon: FiHeadphones },
//   { label: "Map", Icon: FiMapPin },
//   { label: "Link/Button", Icon: FiLink2 },
//   { label: "Divider", Icon: TiDivideOutline }
// ];

// export const EL_SETS_LIST = [
//   { label: "Text", Sets: Text },
//   { label: "Video", Sets: Video },
//   { label: "Image", Sets: Image },
//   { label: "Slider", Sets: Slider },
//   { label: "Social Media", Sets: SocialMedia },
//   { label: "Audio", Sets: Audio },
//   { label: "Map", Sets: Map },
//   { label: "Link/Button", Sets: LinkButton },
//   { label: "Divider", Sets: Divider }
// ];

// export const EL_DATA_LIST = [
//   { label: "Text", Data: TextData, id: uuid.v4() },
//   { label: "Video", Data: VideoData, id: uuid.v4() },
//   { label: "Image", Data: ImageData, id: uuid.v4() },
//   { label: "Slider", Data: SliderData, id: uuid.v4() },
//   { label: "Social Media", Data: SocialMediaData, id: uuid.v4() },
//   { label: "Audio", Data: AudioData, id: uuid.v4() },
//   { label: "Map", Data: MapData, id: uuid.v4() },
//   { label: "Link/Button", Data: LinkButtonData, id: uuid.v4() },
//   { label: "Divider", Data: DividerData, id: uuid.v4() }
// ];

// export const VIDEO_PROVIDER_LIST = [
//   { name: "YouTube", id: uuid.v4() },
//   { name: "Facebook", id: uuid.v4() }
//   // {name: "Vimeo", id: uuid.v4()},
//   // {name: "Metacafe", id: uuid.v4()},
//   // {name: "Veoh", id: uuid.v4()}
// ];



// export const SOCIAL_MEDIA_LIST = [
//   { label: "Facebook", Icon: FaFacebook, id: uuid.v4() },
//   { label: "Twitter", Icon: FaTwitter, id: uuid.v4() },
//   { label: "Instagram", Icon: FaInstagram, id: uuid.v4() },
//   { label: "YouTube", Icon: FaYoutube, id: uuid.v4() }
// ];