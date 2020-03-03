import { isUrlValid } from '../urlValidation'
import { updateElementData } from '../updateElData';

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

export const setVideoFormatVals = ({autoplayRef,loopRef, controlRef}, els, activeElId) => {
  const autoplay = autoplayRef.current.checked;
  const loop = loopRef.current.checked;
  const control = controlRef.current.checked;

  return updateElementData(els, activeElId, {
    videoFormat: { autoplay, loop, control }
  });
};
    