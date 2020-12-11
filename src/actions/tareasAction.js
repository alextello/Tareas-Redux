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
    SET_TAREA_EDITAR,
    OBTENER_tarea_EDITAR,
    OBTENER_tarea_ELIMINAR
} from '../types'

import { v4 as uuid } from 'uuid';
import Swal from 'sweetalert2'
// Crear nuevos tareas
export function crearNuevaTareaAction(tarea) {
    return async (dispatch) => {
        tarea.id = uuid();
        tarea.estado = 'pendiente';
        try {
            dispatch(agregarTareaExito(tarea));
            Swal.fire({
                icon: 'success',
                title: 'Correcto',
                text: 'la tarea se agregó correctamente'
            });
        } catch (error) {
            console.log(error);
            // Si hay un error, cambia el state
            dispatch(agregarTareaError(true))
            // Alerta de error
            Swal.fire({
                icon: 'error',
                title: 'Error',
                text: 'Hubo un error'
            });
        }
    }
}

// Si el tarea se gurada
const agregarTareaExito = tarea => ({
    type: AGREGAR_TAREA_EXITO,
    payload: tarea
});

// Si hubo un error
const agregarTareaError = estado => ({
    type: AGREGAR_TAREA_ERROR,
    payload: estado
});

// Funcion que descarga proudctos de base de datos
export function obtenerTareasAction() {
    return async (dispatch) => {
        dispatch(descargarTareas());
        try {

            dispatch(descargaTareasExitosa())
        } catch (error) {
            dispatch(descargarTareasError());
        }
    }
}

const descargarTareas = () => ({
    type: COMIENZA_DESCARGA_TAREAS,
    payload: true
});

const descargaTareasExitosa = tareas => ({
    type: DESCARGA_TAREAS_EXITO,
    payload: tareas
});

const descargarTareasError = () => ({
    type: DESCARGA_TAREAS_EXITO,
    payload: true
});

// Selecciona y elimina el tarea
export function borrarTareaAction(id) {
    return async (dispatch) => {
        try {
            dispatch(eliminarTareaExito(id));
            // Si se elimina, mostrar alerta
            Swal.fire(
                'Eliminado',
                'El registro ha sido eliminado',
                'success'
            );
        } catch (error) {
            console.log(error);
            dispatch(eliminarTareaError());
        }
    }
}


const eliminarTareaError = () => ({
    type: ELIMINAR_TAREA_ERROR,
    payload: true
})

const eliminarTareaExito = (id) => ({
    type: ELIMINAR_TAREA_EXITO,
    payload: id
})

// Colocar tarea en edición
export function setTareaEditar(tarea) {
    return (dispatch) => {
        dispatch(setTareaEditarAction(tarea))
    }
}

const setTareaEditarAction = tarea => ({
    type: SET_TAREA_EDITAR,
    payload: tarea
});

// Editar un registro en la api y state
export function editarTareaAction(tarea) {
    return async (dispatch) => {
        dispatch(editarTarea())
        try {
            dispatch(editarTareaExito(tarea));
        } catch (error) {
            dispatch(editarTareaError());
        }
    }
}

const editarTarea = () => ({
    type: COMIENZA_EDITAR_TAREA
});

const editarTareaExito = tarea => ({
    type: EDITAR_TAREA_EXITO,
    payload: tarea
})

const editarTareaError = () => ({
    type: EDITAR_TAREA_ERROR,
    payload: true
})