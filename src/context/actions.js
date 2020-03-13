export const ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT";
export const UPDATE_ELEMENT = "UPDATE_ACTIVE_ELEMENT_DATA";
export const SET_BAR_INDEX = "SET_BAR_INDEX";
export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
export const CHANGE_ACTIVE_ELEMENT = "CHANGE_ACTIVE_ELEMENT";

export const addNewElement = (el, uuid, initialState) => ({
  type: ADD_NEW_ELEMENT,
  payload: {
    elLabel: el.label,
    elId: uuid.v4(),
    elData: initialState(el.label)
  }
});

export const updateElState = elements => ({
  type: UPDATE_ELEMENT,
  payload: elements
});

export const updateElement = elements => ({
  type: UPDATE_ELEMENT,
  payload: elements
});

export const setBarIndex = i => ({ type: SET_BAR_INDEX, payload: i });

export const removeElement = (filteredEls, i) => ({
  type: REMOVE_ELEMENT,
  payload: { els: filteredEls, i }
});

export const changeActiveElement = id => ({
  type: CHANGE_ACTIVE_ELEMENT,
  payload: id
});
