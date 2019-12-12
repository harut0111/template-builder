export const ADD_LAYOUT = 'ADD_LAYOUT';
export const INITIAL_TEXT_DATA = '<p>type some text</p>';


export const initialState = {
    removedCard: null,
    isVisible: true,
    activeMode: 2,
    cardsData: {
        text: INITIAL_TEXT_DATA,
        dataTable: null,
    },
    layouts: {
        items: [],
        newCounter: 0,
        cols: undefined
    }
};

export const reducer = (state, { type, payload }) => {
    switch (type) {
        case "DATA_UPDATE":
            return Object.assign({}, state, {
                cardsData: {...initialState.cardsData, text: payload},
            })
        case ADD_LAYOUT: 
            return {...state, layouts: payload}
        default:
            return state;
    }
};