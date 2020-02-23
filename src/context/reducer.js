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

const obj_from_localStr = JSON.parse(localStorage.getItem("state"));
// eslint-disable-next-line
const buildedObj = Object.assign(initialState, obj_from_localStr)

// console.log('obj_from_localStr', obj_from_localStr);
// console.log('buildedObj', buildedObj);


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
          elements: payload,
          activeEl: {
            id: payload.length && payload[payload.length - 1].elId
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
