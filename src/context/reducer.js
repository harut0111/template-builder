// export const ADD_LAYOUT = 'ADD_LAYOUT';
export const ADD_NEW_ELEMENT = 'ADD_NEW_ELEMENT';
export const INITIAL_TEXT_DATA = '<p>type some text</p>';

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
    console.log('type', type);
    console.log('payload', payload);
    switch (type) {
        case "DATA_UPDATE":
            return Object.assign({}, state, {
                cardsData: {...initialState.cardsData, text: payload},
            })
        case ADD_NEW_ELEMENT: 
            return {...state.layout, layout: {elements: [...state.layout.elements, payload]}, activeElId: payload.elId}
        default:
            return state;
    }
};