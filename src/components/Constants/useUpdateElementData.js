import React from "react";
import { useStateValue } from "../../context";
import { UPDATE_ELEMENT } from "../../context/actions";

const useUpdateElementData = ({elData}) => {
  const [{ layout }, dispatch] = useStateValue();

  const elements = layout.elements.map(obj => {
    if (obj.elId === layout.activeEl.id) {
      return Object.assign({}, obj, {
        elData: { ...obj.elData, ...elData }
      });
    }
    return obj;
  });
  dispatch({ type: UPDATE_ELEMENT, payload: elements });
  return null
};

export default useUpdateElementData;
