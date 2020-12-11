import {
    MOSTRAR_MODAL,
    OCULTAR_MODAL
} from '../types';


// Cada reducer tiene su state

const initialState = {
    alerta: null
}

// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case MOSTRAR_MODAL:
            return {
                ...state,
                alerta: true
            }
        case OCULTAR_MODAL:
            return {
                ...state,
                alerta: null
            }
        default:
            return state;
    }
}