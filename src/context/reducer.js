// export const ADD_LAYOUT = 'ADD_LAYOUT';
export const ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT";
export const UPDATE_ELEMENT_DATA = "UPDATE_ACTIVE_ELEMENT_DATA";
export const SET_BAR_INDEX = "SET_BAR_INDEX";
// export const INITIAL_TEXT_DATA = "<p>type some text</p>";

// layout: {
//     elemens: [{
//         label: 'Text', setting: {

//         }}
//     ],
//     activeElId: ''
// }

export const initialState = {
  layout: {
    elements: [],
    activeEl: {},
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
    case UPDATE_ELEMENT_DATA: {
      return {
        ...state,
        layout: { ...state.layout, elements: payload }
      };
    }
    case SET_BAR_INDEX: {
      return { ...state, layout: { ...state.layout, activeBarIndex: payload } };
    }
    default:
      return state;
  }
};
