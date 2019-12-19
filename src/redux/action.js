import React from "react";

import {
  REMOVE_ELEMENT,
  CHANGE_ACTIVE_ELEMENT,
  SET_BAR_INDEX,
  ADD_NEW_ELEMENT,
  UPDATE_ELEMENT
} from "../components/Constants/actionTypes";

export const dispatchFilteredEls = filteredEls => ({
  type: REMOVE_ELEMENT,
  payload: filteredEls
});

export const dispatchId = id => ({
  type: CHANGE_ACTIVE_ELEMENT,
  payload: id
});

export const dispatchBarIndex = i => ({
  type: SET_BAR_INDEX,
  payload: i
});

export const dispatchLayouts = (el, uuid) => ({
  type: ADD_NEW_ELEMENT,
  payload: {
    elLabel: el.label,
    elId: uuid(),
    ElSettings: <el.Settings />,
    elData: null
  }
});

export const dispatchTextData = elements => ({
  type: UPDATE_ELEMENT,
  payload: elements
});
