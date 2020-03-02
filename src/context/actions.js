export const ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT";
export const UPDATE_ELEMENT = "UPDATE_ACTIVE_ELEMENT_DATA";
export const SET_BAR_INDEX = "SET_BAR_INDEX";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const CHANGE_ACTIVE_ELEMENT = "CHANGE_ACTIVE_ELEMENT";

export const updateElState = elements => ({
  type: UPDATE_ELEMENT,
  payload: elements
});
