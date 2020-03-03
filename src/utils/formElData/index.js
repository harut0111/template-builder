import { LABELS } from '../../configs/constants'
import uuid from 'uuid';

export const formElData = type => {
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