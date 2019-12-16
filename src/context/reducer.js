// export const ADD_LAYOUT = 'ADD_LAYOUT';
export const ADD_NEW_ELEMENT = "ADD_NEW_ELEMENT";
export const UPDATE_ELEMENT_DATA = "UPDATE_ACTIVE_ELEMENT_DATA";
export const INITIAL_TEXT_DATA = "<p>type some text</p>";

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
    activeElId: null
  }
};

export const reducer = (state, { type, payload }) => {
  // console.log('type', type);
  // console.log('payload', payload);
  switch (type) {
    case ADD_NEW_ELEMENT:
      return {
        ...state.layout,
        layout: {
          elements: [...state.layout.elements, payload],
          activeEl: {
            id: payload.elId
          }
        }
      };
    case UPDATE_ELEMENT_DATA: {
      // console.log("payload", payload);
      // return state;
      return {
        ...state.layout,
        layout: { ...state.layout, elements: payload }
      };
    }
    default:
      return state;
  }
};
