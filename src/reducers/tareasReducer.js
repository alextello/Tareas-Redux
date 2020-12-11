import {
    COMIENZA_DESCARGA_TAREAS,
    DESCARGA_TAREAS_EXITO,
    DESCARGA_TAREAS_ERROR,
    COMIENZA_AGREGAR_TAREA,
    AGREGAR_TAREA_EXITO,
    AGREGAR_TAREA_ERROR,
    COMIENZA_EDITAR_TAREA,
    EDITAR_TAREA_EXITO,
    EDITAR_TAREA_ERROR,
    COMIENZA_ELIMINAR_TAREA,
    ELIMINAR_TAREA_EXITO,
    ELIMINAR_TAREA_ERROR,
    VALIDAR_TAREA,
    OBTENER_PRODUCTO_EDITAR,
    OBTENER_PRODUCTO_ELIMINAR,
    SET_TAREA_EDITAR
} from '../types'

/* ------------------- Cada reducer tiene su propio state ------------------- */
const initialState = {
    tareas: [
        {
            id: 1,
            nombre: 'Tarea 1',
            descripcion: 'Descripcion',
            estado: 'pendiente'
        },
        {
            id: 2,
            nombre: 'Tarea 2',
            descripcion: 'Descripcion',
            estado: 'completada'
        }
    ],
    tareaEditar: null,
    error: null,
    mensajeError: null,
    loading: false,
}

// eslint-disable-next-line
export default function (state = initialState, action) {
    switch (action.type) {
        case AGREGAR_TAREA_EXITO:
            return {
                ...state,
                tareas: [...state.tareas, action.payload]
            }
        case COMIENZA_DESCARGA_TAREAS:
            return {
                ...state,
                loading: true
            }
        case VALIDAR_TAREA:
            return {
                ...state,
                error: true
            }
        case EDITAR_TAREA_EXITO:
            return {
                ...state,
                tareas: state.tareas.map(tarea => (tarea.id === action.payload.id ? action.payload : tarea))
            }
        case ELIMINAR_TAREA_EXITO:
            return {
                ...state,
                tareas: state.tareas.filter(tarea => (tarea.id !== action.payload))
            }
        case ELIMINAR_TAREA_ERROR:
        case DESCARGA_TAREAS_ERROR:
        case AGREGAR_TAREA_ERROR:
        case EDITAR_TAREA_ERROR:
            return {
                ...state,
                error: action.payload.estado,
                mensajeError: action.payload.mensaje
            }
        case SET_TAREA_EDITAR:
            return {
                ...state,
                tareaEditar: action.payload
            }
        default:
            return state;
    }
}