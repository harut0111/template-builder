import { isUrlValid } from "../urlValidation";
import { updateElementData } from "../updateElData";
import { convertToRaw } from "draft-js";
import draftToHtml from "draftjs-to-html";
import uuid from "uuid";
import { imageReader } from "../imageReader";

export const setTextVal = (editorState, els, activeElId) => {
  const markup = draftToHtml(convertToRaw(editorState.getCurrentContent()));
  return updateElementData(els, activeElId, {
    markup
  });
};

export const setUrlVal = (urlRef, els, activeElId) => {
  const url = urlRef.current.value.trim();
  return updateElementData(els, activeElId, {
    url: { value: url, validity: isUrlValid(url) }
  });
};

export const setVideoProviderVal = (providerRef, els, activeElId) => {
  const provider = providerRef.current.value;
  return updateElementData(els, activeElId, {
    provider
  });
};

export const setVideoFormatVals = (
  { autoplayRef, loopRef, controlRef },
  els,
  activeElId
) => {
  const autoplay = autoplayRef.current.checked;
  const loop = loopRef.current.checked;
  const control = controlRef.current.checked;

  return updateElementData(els, activeElId, {
    videoFormat: { autoplay, loop, control }
  });
};

export const setDurationVal = (durRef, els, activeElId, SD) => {
  const duration = Number(durRef.current.value);
  return updateElementData(els, activeElId, { ...SD, duration });
};

export const setRemoveImage = (id, els, activeElId, SD) => {
  return updateElementData(els, activeElId, {
    ...SD,
    imgSrc: SD.imgSrc.filter(item => item.id !== id)
  });
};

export const setAddImage = (els, activeElId, SD) => {
  return updateElementData(els, activeElId, {
    ...SD,
    imgSrc: [...SD.imgSrc, { id: uuid.v4(), value: null }]
  });
};

export const setImageVal = async (fileRef, els, activeElId) => {
  const file = fileRef.current.files[0];
  const result = await imageReader(file);
  return updateElementData(els, activeElId, {
    imgSrc: result
  });
};

export const setSliderImageVal = async (
  fileRef,
  els,
  activeElId,
  id,
  SD,
  layout
) => {
  const file = fileRef.filter(file => file.id === id)[0].files[0];
  const result = await imageReader(file);
  let elData;

  els.forEach((element, i) => {
    if (element.elId === layout.activeEl.id) {
      elData = Object.assign({}, SD, {
        imgSrc: els[i].elData.imgSrc.map(imgSrc =>
          imgSrc.id === id ? { ...imgSrc, value: result } : imgSrc
        )
      });
    }
  });

  return updateElementData(els, activeElId, { ...elData });
};

export const setSocialMediaVal = (socialMediaRef, els, activeElId, i, SMD) => {
  const socialMedia = socialMediaRef[i].value;
  console.log("socialMedia", socialMedia);
  const elements = els.map(obj => {
    if (obj.elId === activeElId) {
      const CSMD = [...SMD];
      CSMD[i] = { ...CSMD[i], socialMedia };
      return Object.assign({}, obj, {
        elData: CSMD
      });
    }
    return obj;
  });
  return elements;
};

export const setSocialMediaUrlVal = (urlRef, els, activeElId, i, SMD) => {
  const url = urlRef[i].value;
  const elements = els.map(obj => {
    if (obj.elId === activeElId) {
      const CSMD = [...SMD];
      CSMD[i] = { ...CSMD[i], url: { value: url, validity: isUrlValid(url) } };
      return Object.assign({}, obj, {
        elData: CSMD
      });
    }
    return obj;
  });
  return elements;
};

export const setRemoveSocialMedia = (els, activeElId, i) => {
  const elements = els.map(obj => {
    if (obj.elId === activeElId) {
      return Object.assign({}, obj, {
        elData: obj.elData.filter((item, index) => index !== i)
      });
    }
    return obj;
  });
  return elements;
};

export const setAddSocialMedia = (els, activeElId, SMD) => {
  const elements = els.map(obj => {
    if (obj.elId === activeElId) {
      return Object.assign({}, obj, {
        elData: [...SMD, { socialMedia: "Facebook", url: "", id: uuid() }]
      });
    }
    return obj;
  });
  return elements;
};

export const setZoomVal = (addressRef, els, activeElId) => {
  const zoom = addressRef.current.state.value;
  return updateElementData(els, activeElId, {
    zoom
  });
};

export const setAddressVal = (addressRef, els, activeElId) => {
  const address = addressRef.current.value;
  return updateElementData(els, activeElId, {
    address
  });
};

export const setBorderTypeVal = (borderTypeRef, els, activeElId) => {
  const borderType = borderTypeRef.current.value;
  return updateElementData(els, activeElId, {
    borderType
  });
};

export const setBorderWidthVal = (borderWidthRef, els, activeElId) => {
  const borderWidth = borderWidthRef.current.value;
  return updateElementData(els, activeElId, {
    borderWidth
  });
};

export const setBorderColorVal = (borderColorRef, els, activeElId) => {
  const borderColor = borderColorRef.current.value;
  return updateElementData(els, activeElId, {
    borderColor
  });
};
