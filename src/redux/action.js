import { REMOVE_ELEMENT, CHANGE_ACTIVE_ELEMENT } from "../components/Constants/actionTypes";


export const dispatchFilteredEls = filteredEls => ({
  type: REMOVE_ELEMENT,
  payload: filteredEls
});

export const dispatchId = (id) => (
    { type: CHANGE_ACTIVE_ELEMENT, payload: id }
);
