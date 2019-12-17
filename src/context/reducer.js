import {
  ADD_NEW_ELEMENT,
  REMOVE_ELEMENT,
  UPDATE_ELEMENT,
  CHANGE_ACTIVE_ELEMENT,
  SET_BAR_INDEX
} from "./actions";

// export const ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT";
// export const UPDATE_ELEMENT = "UPDATE_ACTIVE_ELEMENT_DATA";
// export const SET_BAR_INDEX = "SET_BAR_INDEX";
// export const REMOVE_ELEMENT = "REMOVE_ELEMENT";
// export const CHANGE_ACTIVE_ELEMENT = "CHANGE_ACTIVE_ELEMENT";

export const initialState = {
  layout: {
    elements: [],
    activeEl: { id: null },
    activeBarIndex: 0
  }
};

export const reducer = (state, { type, payload }) => {
  // console.log('type', type);
  // console.log('payload', payload);
  switch (type) {
    case ADD_NEW_ELEMENT:
      return {
        ...state,
        layout: {
          ...state.layout,
          elements: [...state.layout.elements, payload],
          activeEl: {
            id: payload.elId
          },
          activeBarIndex: 1
        }
      };

    case REMOVE_ELEMENT: {
      return {
        ...state,
        layout: {
          ...state.layout,
          elements: payload,
          activeEl: {
            id: payload.length && payload[payload.length - 1].elId
          },
          activeBarIndex: 0
        }
      };
    }
    case UPDATE_ELEMENT: {
      return {
        ...state,
        layout: { ...state.layout, elements: payload }
      };
    }
    case CHANGE_ACTIVE_ELEMENT: {
      return {
        ...state,
        layout: {
          ...state.layout,
          activeEl: { id: payload },
          activeBarIndex: 1
        }
      };
    }
    case SET_BAR_INDEX: {
      return { ...state, layout: { ...state.layout, activeBarIndex: payload } };
    }
    default:
      return state;
  }
};
