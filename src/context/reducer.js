import {
  ADD_NEW_ELEMENT,
  REMOVE_ELEMENT,
  UPDATE_ELEMENT,
  CHANGE_ACTIVE_ELEMENT,
  SET_BAR_INDEX
} from "./actions";

export const initialState = {
  layout: {
    elements: [],
    activeEl: { id: null },
    activeBarIndex: 0
  }
};

Object.assign(initialState, JSON.parse(localStorage.getItem("state")));

export const reducer = (state, { type, payload }) => {
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
          elements: payload.els,
          activeEl: {
            id: payload.els.length && payload.els[payload.i - 1].elId
          },
          activeBarIndex: payload.length ? 1 : 0
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
